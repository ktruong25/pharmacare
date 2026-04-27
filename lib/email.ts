import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.PHARMACY_EMAIL!;

export async function sendRefillNotification(data: {
  name: string;
  phone: string;
  rxNumber: string;
  pickup?: string | null;
  notes?: string | null;
}) {
  await resend.emails.send({
    from: 'PharmaCare Rx <noreply@pharmacarerxfv.com>',
    to,
    subject: `New Refill Request — Rx# ${data.rxNumber}`,
    html: `
      <h2>New Refill Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Rx Number:</strong> ${data.rxNumber}</p>
      <p><strong>Pickup Preference:</strong> ${data.pickup || 'Not specified'}</p>
      <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
    `,
  });
}

export async function sendDeliveryNotification(data: {
  name: string;
  phone: string;
  address: string;
  city: string;
  scheduledDate: string;
  scheduledTime: string;
  rxNumbers?: string | null;
  notes?: string | null;
}) {
  await resend.emails.send({
    from: 'PharmaCare Rx <noreply@pharmacarerxfv.com>',
    to,
    subject: `New Delivery Request — ${data.name}`,
    html: `
      <h2>New Delivery Schedule Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}</p>
      <p><strong>Date:</strong> ${data.scheduledDate}</p>
      <p><strong>Time Window:</strong> ${data.scheduledTime}</p>
      <p><strong>Rx Number(s):</strong> ${data.rxNumbers || 'Not provided'}</p>
      <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
    `,
  });
}

export async function sendContactNotification(data: {
  name: string;
  phone?: string | null;
  email: string;
  subject?: string | null;
  message: string;
}) {
  await resend.emails.send({
    from: 'PharmaCare Rx <noreply@pharmacarerxfv.com>',
    to,
    subject: `New Message — ${data.subject || 'General Inquiry'}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Topic:</strong> ${data.subject || 'Other'}</p>
      <p><strong>Message:</strong><br>${data.message}</p>
    `,
  });
}
