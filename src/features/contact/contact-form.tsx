"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(1, "Company name is required"),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
    "Frappe ERP Implementation",
    "Frappe Customization & Development",
    "Business Process Automation",
    "Legacy System Modernization",
    "System Integration",
    "ERP Consulting & Advisory",
    "Support & Optimization",
    "Training & Change Management",
    "Not sure yet",
];

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    async function onSubmit(data: ContactFormData) {
        // TODO_CLIENT_CONFIRMATION: Wire to email service (Resend, SendGrid, or server action)
        // Simulated submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submission:", data);
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand-blue-pale p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white text-3xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-text-primary">Message Received!</h3>
                <p className="text-text-secondary">
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
                <p className="text-sm text-text-muted">
                    For urgent enquiries, call us directly on{" "}
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-brand-blue">
                        {siteConfig.contact.phone}
                    </a>
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        placeholder="Your full name"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-xs text-red-600" role="alert">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-xs text-red-600" role="alert">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                        id="company"
                        placeholder="Your company"
                        {...register("company")}
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                        <p id="company-error" className="text-xs text-red-600" role="alert">
                            {errors.company.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+94 7X XXX XXXX"
                        {...register("phone")}
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="service">Service You&apos;re Interested In</Label>
                <select
                    id="service"
                    {...register("service")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <option value="">Select a service (optional)</option>
                    {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="message">How Can We Help? *</Label>
                <Textarea
                    id="message"
                    placeholder="Tell us about your current situation — what systems you use, your main challenges, and what you're hoping to achieve with ERP..."
                    rows={5}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="text-xs text-red-600" role="alert">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message"}
            </Button>

            <p className="text-center text-xs text-text-muted">
                We typically respond within one business day. No spam, ever.
            </p>
        </form>
    );
}

export function ContactPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding-sm">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
                            Get in Touch
                        </p>
                        <h1 className="mt-3 text-display-lg font-bold text-white">
                            Let&apos;s Start the Conversation
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                            Whether you&apos;re exploring ERP for the first time or evaluating a migration from
                            an existing system — our consultants will help you find the right path forward.
                        </p>
                    </FadeUp>
                </Container>
            </section>

            {/* Main content */}
            <section className="section-padding">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr,420px]">
                        {/* Form */}
                        <FadeUp>
                            <div>
                                <h2 className="text-display-sm font-bold text-text-primary">
                                    Send Us a Message
                                </h2>
                                <p className="mt-2 text-text-secondary">
                                    Fill in the form below and a consultant will be in touch within one business day.
                                </p>
                                <div className="mt-8">
                                    <ContactForm />
                                </div>
                            </div>
                        </FadeUp>

                        {/* Sidebar */}
                        <FadeUp delay={0.15}>
                            <div className="space-y-6">
                                {/* Why contact us */}
                                <div className="rounded-2xl bg-brand-navy p-7 text-white">
                                    <h3 className="text-lg font-bold">What to Expect</h3>
                                    <ul className="mt-4 space-y-3">
                                        {[
                                            "Response within 1 business day",
                                            "No-pressure discovery call",
                                            "Honest assessment of your needs",
                                            "Clear pricing and timeline guidance",
                                            "Free initial consultation — no commitment",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                                <span className="text-brand-teal">✓</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact details */}
                                <div className="rounded-2xl border border-surface-border bg-surface p-7">
                                    <h3 className="font-bold text-text-primary">Contact Details</h3>
                                    <div className="mt-4 space-y-4 text-sm">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Address</p>
                                            <p className="mt-1 text-text-secondary">{siteConfig.contact.address.full}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Phone</p>
                                            <a href={`tel:${siteConfig.contact.phone}`} className="mt-1 font-semibold text-brand-blue hover:underline">
                                                {siteConfig.contact.phone}
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Email</p>
                                            <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 font-semibold text-brand-blue hover:underline">
                                                {siteConfig.contact.email}
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Office Hours</p>
                                            <p className="mt-1 text-text-secondary">Monday – Friday, 9:00 AM – 6:00 PM (IST)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Assessment CTA */}
                                <div className="rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal p-7 text-white">
                                    <h3 className="font-bold">Not Ready to Talk Yet?</h3>
                                    <p className="mt-2 text-sm text-white/80">
                                        Take our free ERP Readiness Assessment and get personalized recommendations instantly.
                                    </p>
                                    <Button variant="secondary" className="mt-4 bg-white text-brand-blue hover:bg-white/90" asChild>
                                        <a href="/assessment">Take Free Assessment</a>
                                    </Button>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>
        </div>
    );
}
