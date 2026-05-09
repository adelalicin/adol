# BASMA – Government Transaction Clearance Platform Architecture

BASMA is designed as a premium Bahraini government transaction clearing platform for individuals, companies, and internal operations teams. The production version should preserve the Arabic/English, mobile-first experience demonstrated in the static prototype while adding secure data, authentication, payments, notifications, and file workflows.

## Experience Principles

- Arabic RTL and English LTR interfaces with instant language switching.
- Luxury government-technology visual identity using deep blue, white, soft gray, and gold accents.
- Client journeys for quick requests, multi-step applications, tracking, payments, and document uploads.
- Staff journeys for case assignment, status updates, Kanban operations, reporting, internal notes, and exports.
- Secure defaults: OTP, email verification, role-based access, encrypted storage, activity logs, and session management.

## Recommended Stack

- Frontend: Next.js App Router, React, Tailwind CSS, Framer Motion, Inter for English, Tajawal/Cairo for Arabic.
- Backend: Supabase or Firebase for rapid launch; Next.js Route Handlers or a Node.js API gateway for custom business logic.
- Database: PostgreSQL through Supabase for relational CRM, payments, reporting, and audit trails; Firestore is an alternative for a Firebase-first implementation.
- Authentication: Supabase Auth or Firebase Auth with OTP, email verification, password reset, and role claims.
- Storage: Supabase Storage or Firebase Cloud Storage with signed URLs, file categorization, virus scanning, and OCR metadata.
- Payments: Bahrain-ready payment gateway integration with invoice generation, payment history, and reconciliation exports.
- Notifications: Email, SMS, WhatsApp templates, push notifications, and in-app notification center.
- AI: OpenAI-powered chatbot, smart service suggestions, OCR-assisted document reading, and generated receipt summaries.

## Core Data Model

```sql
CREATE TYPE user_role AS ENUM ('ADMIN', 'MANAGER', 'EMPLOYEE', 'CLIENT');
CREATE TYPE application_status AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'WAITING_FOR_DOCUMENTS', 'GOVERNMENT_PROCESSING', 'COMPLETED', 'REJECTED');
CREATE TYPE notification_channel AS ENUM ('IN_APP', 'EMAIL', 'SMS', 'WHATSAPP', 'PUSH');

CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'CLIENT',
  preferred_language TEXT NOT NULL DEFAULT 'ar',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE services (
  id UUID PRIMARY KEY,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  category TEXT NOT NULL,
  description_ar TEXT NOT NULL,
  description_en TEXT NOT NULL,
  price_bhd NUMERIC(10,3) NOT NULL,
  processing_time TEXT,
  required_documents JSONB NOT NULL DEFAULT '[]',
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_visible BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE applications (
  id UUID PRIMARY KEY,
  application_no TEXT UNIQUE NOT NULL,
  client_id UUID REFERENCES profiles(id),
  assigned_staff_id UUID REFERENCES profiles(id),
  service_id UUID REFERENCES services(id),
  status application_status NOT NULL DEFAULT 'SUBMITTED',
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  customer_notes TEXT,
  internal_notes TEXT,
  government_reference TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  due_date DATE
);

CREATE TABLE application_files (
  id UUID PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_category TEXT,
  mime_type TEXT,
  ocr_text TEXT,
  uploaded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY,
  application_id UUID REFERENCES applications(id),
  invoice_no TEXT UNIQUE NOT NULL,
  amount_bhd NUMERIC(10,3) NOT NULL,
  gateway_reference TEXT,
  payment_status TEXT NOT NULL,
  paid_at TIMESTAMPTZ
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  application_id UUID REFERENCES applications(id),
  recipient_id UUID REFERENCES profiles(id),
  channel notification_channel NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  sent_at TIMESTAMPTZ
);

CREATE TABLE activity_logs (
  id UUID PRIMARY KEY,
  actor_id UUID REFERENCES profiles(id),
  entity_type TEXT NOT NULL,
  entity_id UUID NOT NULL,
  action TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## Primary API Routes

- `POST /api/auth/login` authenticates with email, password, and optional OTP challenge.
- `POST /api/auth/verify-otp` verifies login and sensitive status update actions.
- `GET /api/services` returns searchable, filterable public service cards.
- `POST /api/applications` creates an online multi-step application and draft auto-save record.
- `GET /api/applications/:applicationNo/track` returns status, timeline, notes, missing documents, and notifications.
- `POST /api/applications/:id/files` uploads and categorizes documents with OCR metadata.
- `PATCH /api/applications/:id/status` updates progress, writes an activity log, and triggers notifications.
- `POST /api/payments/checkout` creates a gateway checkout and pending invoice.
- `GET /api/dashboard/client` returns client widgets, applications, payments, messages, and notifications.
- `GET /api/dashboard/staff` returns assigned cases, Kanban columns, filters, analytics, and team performance.
- `POST /api/reports/export` creates PDF or Excel exports for authorized staff.
- `POST /api/ai/assistant` powers the BASMA chatbot and service recommendations.

## Security and Compliance Notes

- Enforce row-level security so clients can only access their own applications and files.
- Store refresh tokens in secure HTTP-only cookies and rotate sessions after privilege-sensitive actions.
- Validate file type, size, filename, and malware scan result before storage exposure.
- Keep immutable activity logs for status changes, payment actions, file deletion, exports, and staff assignment.
- Use signed URLs for private documents and short expiry windows for previews.
- Apply rate limits to tracking, login, OTP, upload, and chatbot endpoints.
- Back up the database daily, test monthly restores, and encrypt backup artifacts.

## Launch Phases

1. Public website, service catalog, contact flows, and tracking UI.
2. Authentication, client dashboard, multi-step applications, uploads, and payment history.
3. Staff dashboard, Kanban assignment, reports, activity logs, and exports.
4. Notifications through SMS, WhatsApp, email, and push.
5. AI assistant, OCR document reading, QR receipt verification, and automated reminders.
