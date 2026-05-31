"use client";

import { useState } from "react";

const ISSUE_CATEGORIES = [
  "Sanitation",
  "Roads",
  "Street lights",
  "Water",
  "Drainage",
  "Garbage",
  "Safety",
  "Other",
];

export default function ReportIssuePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/report-issue", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatusMessage(data?.message || "Could not submit the issue right now.");
        return;
      }

      form.reset();
      setStatusMessage("Issue submitted.  .");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-saffron-deep mb-4">UPF / Report an Issue</p>
        <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-[0.92] mb-4">Tell us what needs fixing.</h1>
        <p className="max-w-2xl text-[17px] leading-[1.65] text-ink-2 mb-10">
          Fill this form, upload photos if you have them, and we will store the details in Google Sheets and the images in Google Drive.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5 border-2 border-ink bg-paper-2 p-6 sm:p-8 shadow-[10px_10px_0_var(--color-ink)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Full name</span>
              <input name="name" required className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Phone no.</span>
              <input name="phone" required className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Location / Street</span>
              <input name="location" required className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Municipality</span>
              <input name="municipality" className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Ward</span>
              <input name="ward" className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Issue category</span>
              <select name="category" className="border-2 border-ink bg-paper px-4 py-3 outline-none">
                {ISSUE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Description</span>
            <textarea name="description" rows={6} required className="border-2 border-ink bg-paper px-4 py-3 outline-none resize-y" />
          </label>

          <label className="grid gap-2">
            <span className="font-condensed text-[13px] uppercase tracking-[0.18em]">Images</span>
            <input name="images" type="file" accept="image/*" multiple className="border-2 border-ink bg-paper px-4 py-3 outline-none" />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="justify-self-start bg-ink text-paper font-condensed text-[13px] tracking-[0.2em] uppercase px-6 py-4 border-2 border-ink disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit issue"}
          </button>

          {statusMessage && <p className="text-[15px] leading-[1.6] text-ink-2">{statusMessage}</p>}
        </form>
      </section>
    </main>
  );
}