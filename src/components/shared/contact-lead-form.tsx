'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type ContactLeadFormProps = {
  inputClassName: string;
  textareaClassName: string;
  buttonClassName: string;
  labelClassName: string;
  helperClassName?: string;
  subjectOptions?: string[];
};

export function ContactLeadForm({
  inputClassName,
  textareaClassName,
  buttonClassName,
  labelClassName,
  helperClassName,
  subjectOptions = ['General Question'],
}: ContactLeadFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to send your message.');
      }

      setStatus('success');
      setMessage(data?.message || 'Thanks. Your message has been received.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div>
        <label className={labelClassName}>Your Name</label>
        <input name="name" required className={inputClassName} placeholder="John Doe" />
      </div>
      <div>
        <label className={labelClassName}>Email Address</label>
        <input name="email" type="email" required className={inputClassName} placeholder="john@example.com" />
      </div>
      <div>
        <label className={labelClassName}>Phone Number</label>
        <input name="phone" className={inputClassName} placeholder="Optional" />
      </div>
      <div>
        <label className={labelClassName}>Subject</label>
        <select name="subject" className={inputClassName} defaultValue={subjectOptions[0] || 'General Question'}>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClassName}>Message</label>
        <textarea name="message" required className={textareaClassName} placeholder="Tell us more about your inquiry..." />
      </div>
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {message ? (
        <div className={`rounded-2xl px-4 py-3 text-sm font-semibold ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>
          <div className="flex items-start gap-3">
            {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
            <span>{message}</span>
          </div>
        </div>
      ) : null}
      {helperClassName ? <p className={helperClassName}>We will review your request and reply as soon as possible.</p> : null}
      <button type="submit" disabled={status === 'submitting'} className={buttonClassName}>
        {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Send Message
      </button>
    </form>
  );
}
