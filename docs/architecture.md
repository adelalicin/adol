# Basma Pro Services Production Architecture

This document describes the production implementation plan for the premium Arabic-first website and internal management system.

## Stack

- Frontend: Next.js App Router, React Server Components, TailwindCSS, Cairo for Arabic, Poppins for English.
- Backend: Node.js with Express or Next.js Route Handlers behind an API gateway.
- Database: PostgreSQL for relational accounting/CRM data. MongoDB can be used for flexible template drafts if preferred.
- Authentication: JWT access tokens, refresh tokens, bcrypt password hashing, role-based access control.
- Storage: Cloudinary or Firebase Storage for attachments, generated PDFs, Word files, and service images.
- AI: OpenAI API for marketing copy and document generation.

## Core Tables

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  email VARCHAR(190) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(40) NOT NULL CHECK (role IN ('SUPER_ADMIN','EMPLOYEE','ACCOUNTANT','CONTENT_MANAGER')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE services (
  id UUID PRIMARY KEY,
  title_ar VARCHAR(220) NOT NULL,
  description_ar TEXT NOT NULL,
  price_bhd NUMERIC(10,3) NOT NULL,
  required_documents JSONB NOT NULL DEFAULT '[]',
  processing_time VARCHAR(120),
  status VARCHAR(40) DEFAULT 'VISIBLE',
  featured_image_url TEXT,
  created_by UUID REFERENCES users(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE company_setup_types (
  id UUID PRIMARY KEY,
  name_ar VARCHAR(220) NOT NULL,
  price_bhd NUMERIC(10,3) NOT NULL,
  government_fees_bhd NUMERIC(10,3) DEFAULT 0,
  requirements JSONB NOT NULL DEFAULT '[]',
  documents JSONB NOT NULL DEFAULT '[]',
  processing_duration VARCHAR(120),
  notes TEXT,
  is_visible BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  order_no VARCHAR(40) UNIQUE NOT NULL,
  customer_name VARCHAR(180) NOT NULL,
  company_name VARCHAR(180),
  phone VARCHAR(40) NOT NULL,
  email VARCHAR(190),
  request_type VARCHAR(80) NOT NULL,
  service_id UUID REFERENCES services(id),
  request_price NUMERIC(10,3),
  agreed_amount NUMERIC(10,3),
  remaining_amount NUMERIC(10,3),
  payment_status VARCHAR(40) NOT NULL,
  request_date DATE NOT NULL,
  deadline DATE,
  request_status VARCHAR(40) CHECK (request_status IN ('PENDING','PROCESSING','WAITING_CUSTOMER','COMPLETED','CANCELLED')),
  notes TEXT,
  assigned_employee_id UUID REFERENCES users(id),
  source VARCHAR(40) DEFAULT 'WEBSITE',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE attachments (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  file_type VARCHAR(80),
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  amount NUMERIC(10,3) NOT NULL,
  method VARCHAR(60),
  paid_at TIMESTAMPTZ DEFAULT NOW(),
  received_by UUID REFERENCES users(id)
);

CREATE TABLE activity_logs (
  id UUID PRIMARY KEY,
  actor_id UUID REFERENCES users(id),
  action VARCHAR(180) NOT NULL,
  entity_type VARCHAR(80),
  entity_id UUID,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## API Routes

- `POST /api/auth/login` issues JWT tokens after validating credentials.
- `GET /api/services` returns visible public services.
- `POST /api/services` creates a service for Super Admin and Content Manager roles.
- `PATCH /api/services/:id` updates price, visibility, description, documents, and featured image.
- `DELETE /api/services/:id` soft-deletes or hides a service.
- `GET /api/company-setup-types` returns company setup packages.
- `PATCH /api/company-setup-types/:id` updates prices, requirements, fees, notes, and duration.
- `POST /api/orders` creates website or manual orders.
- `GET /api/orders` supports role-aware pagination, search, status filters, employee filters, and date ranges.
- `PATCH /api/orders/:id` updates status, payments, deadlines, assigned employees, notes, and internal comments.
- `POST /api/orders/:id/attachments` uploads files to Cloudinary or Firebase Storage.
- `POST /api/ai/marketing` sends service name, offer details, and target audience to OpenAI.
- `POST /api/ai/documents` generates an editable Arabic RTL document draft from selected parties and document type.
- `POST /api/documents/:id/export/pdf` exports a print-ready A4 PDF.
- `GET /api/reports/revenue` returns revenue and outstanding balances.
- `GET /api/reports/performance` returns employee performance and completion rates.
- `POST /api/backups` creates an encrypted backup for Super Admin users.

## OpenAI Integration Shape

```ts
const response = await openai.responses.create({
  model: 'gpt-4.1-mini',
  input: [
    { role: 'system', content: 'You write professional Arabic RTL marketing and government-office documents for Bahrain.' },
    { role: 'user', content: JSON.stringify({ serviceName, offerDetails, targetAudience }) }
  ]
});
```

## Security Notes

- Use HTTPS-only cookies for refresh tokens.
- Store access tokens in memory where possible.
- Validate all uploaded file types and sizes.
- Apply RBAC middleware to every dashboard route.
- Audit service price changes, payment updates, file deletions, and document exports.
- Run daily encrypted backups and monthly restore drills.
