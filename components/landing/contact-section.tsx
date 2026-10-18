"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New TAI inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nCompany: ${form.get("company")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:gerencia@topadvertisinginternational.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary/50" />
              Start a conversation
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Let&apos;s make your brand <span className="text-primary">impossible to ignore.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Tell us where you want to go. We&apos;ll bring the strategy, creative thinking, and execution to get you there.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="mailto:gerencia@topadvertisinginternational.com" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail className="w-4 h-4 text-primary" /> gerencia@topadvertisinginternational.com</a>
              <a href="https://wa.me/18099631185" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp: +1 809 963 1185</a>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> International marketing team</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-foreground/10 p-6 lg:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="space-y-2 text-sm">
                <span>Name</span>
                <input required name="name" className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-primary" />
              </label>
              <label className="space-y-2 text-sm">
                <span>Email</span>
                <input required type="email" name="email" className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-primary" />
              </label>
            </div>
            <label className="space-y-2 text-sm block">
              <span>Company</span>
              <input name="company" className="w-full bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-primary" />
            </label>
            <label className="space-y-2 text-sm block">
              <span>How can we help?</span>
              <textarea required name="message" rows={4} className="w-full resize-none bg-transparent border-b border-foreground/20 py-3 outline-none focus:border-primary" />
            </label>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 group">
              {sent ? "Opening your email" : "Send inquiry"}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
