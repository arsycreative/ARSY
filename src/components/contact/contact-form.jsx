"use client";

import { useEffect, useState } from "react";

export default function ContactForm({
  contactInfo,
  placeholderPhone,
  formspreeUrl,
}) {
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (formStatus.state === "success" || formStatus.state === "error") {
      const timer = setTimeout(
        () => setFormStatus({ state: "idle", message: "" }),
        7000
      );
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <form
      className="relative space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setFormStatus({ state: "submitting", message: "" });
        try {
          const res = await fetch("https://formspree.io/f/xgvjdrbd", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
          });
          if (res.ok) {
            setFormStatus({
              state: "success",
              message: "Thanks—your message is on the way.",
            });
            form.reset();
          } else {
            setFormStatus({
              state: "error",
              message: "Something went wrong. Please try again.",
            });
          }
        } catch (error) {
          setFormStatus({
            state: "error",
            message: "Network issue. Please try again.",
          });
        }
      }}
    >
      <input
        type="hidden"
        name="_subject"
        value="New contact from arsy-studio.com"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-white/80">
          <span>{contactInfo.fields.name}</span>
          <input
            type="text"
            name="name"
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
            placeholder={contactInfo.fields.name}
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-white/80">
          <span>{contactInfo.fields.workEmail}</span>
          <input
            type="email"
            name="email"
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
            placeholder={contactInfo.fields.workEmail}
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-white/80">
          <span>{contactInfo.fields.phone}</span>
          <input
            type="tel"
            name="phone"
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
            placeholder={placeholderPhone}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-white/80">
          <span>{contactInfo.fields.company}</span>
          <input
            type="text"
            name="company"
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
            placeholder={contactInfo.fields.company}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-white/80">
        <span>{contactInfo.fields.message}</span>
        <textarea
          rows={5}
          name="message"
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/40 dark:focus:ring-white/10"
          placeholder={contactInfo.fields.message}
          required
        />
      </label>
      <button
        type="submit"
        disabled={formStatus.state === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-violet-500 via-purple-500 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(124,58,237,0.35)] transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
      >
        {formStatus.state === "submitting"
          ? "Sending..."
          : contactInfo.fields.submit}
      </button>
      <p
        className={`text-sm transition-opacity duration-500 ${
          formStatus.state === "success"
            ? "text-emerald-600 dark:text-emerald-400"
            : formStatus.state === "error"
              ? "text-rose-600 dark:text-rose-400"
              : "text-transparent"
        } ${formStatus.state === "idle" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-live="polite"
      >
        {formStatus.message || "\u00A0"}
      </p>
    </form>
  );
}
