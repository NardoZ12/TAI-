"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started",
    price: { monthly: 1500, annual: 1200 },
    features: [
      "Social media management",
      "Basic SEO optimization",
      "Monthly performance report",
      "Email marketing setup",
      "Dedicated account manager",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    price: { monthly: 4500, annual: 3800 },
    features: [
      "Everything in Starter",
      "PPC campaign management",
      "Content marketing strategy",
      "Advanced analytics dashboard",
      "A/B testing & optimization",
      "Influencer partnerships",
      "Weekly strategy calls",
    ],
    cta: "Start growing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large brands & global campaigns",
    price: { monthly: null, annual: null },
    features: [
      "Everything in Growth",
      "Multi-market campaigns",
      "Custom creative studio",
      "Brand strategy consulting",
      "Crisis management",
      "Dedicated creative team",
      "24/7 priority support",
      "Custom reporting",
    ],
    cta: "Contact us",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            <span className="text-primary">Flexible plans</span>
            <br />
            for every stage
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Choose the plan that fits your goals. Scale up anytime as your brand grows.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className={`text-sm transition-colors ${
              !isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-mono">
              Save 17%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-foreground">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include brand strategy consultation, performance tracking, and monthly reporting.
        </p>
      </div>
    </section>
  );
}
