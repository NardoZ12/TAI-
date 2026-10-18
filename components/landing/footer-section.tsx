"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Performance Marketing", href: "#services" },
    { name: "Creative Strategy", href: "#services" },
    { name: "Brand Development", href: "#services" },
    { name: "Analytics", href: "#services" },
  ],
  Resources: [
    { name: "Case Studies", href: "#case-studies" },
    { name: "Blog", href: "#contact" },
    { name: "Marketing Guides", href: "#services" },
    { name: "Industry Reports", href: "#case-studies" },
  ],
  Company: [
    { name: "About TAI", href: "#contact" },
    { name: "Our Team", href: "#contact" },
    { name: "Careers", href: "mailto:gerencia@topadvertisinginternational.com?subject=Careers%20at%20TAI", badge: "Hiring" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/topadvertisinginternational?igsi=MWJ0M3V6NjF1dXZlaw==" },
  { name: "Facebook", href: "https://www.facebook.com/share/18uB2tqG65/" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-3 mb-6">
                <img src="/images/tai-logo-icon.png" alt="TAI Logo" className="h-12" />
                <span className="text-2xl font-display text-primary">TAI</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Top Advertising International. Your partner for data-driven digital marketing that delivers real results.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Top Advertising International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
