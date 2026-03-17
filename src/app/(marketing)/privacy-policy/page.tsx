import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TECHINCGLOBAL's privacy policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      {/* Breadcrumbs */}
      <div className="border-b border-surface-border bg-surface-muted/50">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
        </Container>
      </div>

      {/* Content */}
      <section className="section-padding">
        <Container size="narrow">
          {/* Page header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              Last updated: January 2025
            </p>
          </div>

          {/* Policy content */}
          <div className="space-y-10 text-text-secondary leading-relaxed">
            {/* 1. Introduction */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                1. Introduction
              </h2>
              <p>
                Welcome to TECHINCGLOBAL. Techincglobal (Pvt) Ltd (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) is committed to protecting the
                privacy and security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website{" "}
                <Link
                  href="https://techincglobal.com"
                  className="text-brand-blue hover:underline"
                >
                  techincglobal.com
                </Link>{" "}
                or engage with our services, including ERP implementation,
                consulting, and digital transformation solutions.
              </p>
              <p className="mt-3">
                By accessing or using our website and services, you acknowledge
                that you have read, understood, and agree to be bound by this
                Privacy Policy. If you do not agree with the terms of this policy,
                please do not access the website or use our services.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                2. Information We Collect
              </h2>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                2.1 Personal Information You Provide
              </h3>
              <p>
                We collect personal information that you voluntarily provide to us
                when you interact with our website or services. This includes, but
                is not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact information:</strong> name, email address, phone
                  number, and company name when you fill out contact forms,
                  request a consultation, or subscribe to our newsletter.
                </li>
                <li>
                  <strong>Business information:</strong> company size, industry,
                  current systems in use, and specific business requirements
                  provided during assessments or consultations.
                </li>
                <li>
                  <strong>Communication data:</strong> any information you include
                  in messages, emails, or correspondence with us.
                </li>
                <li>
                  <strong>Account information:</strong> login credentials if you
                  create an account to access client portals or support services.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                2.2 Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns, including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Device information:</strong> IP address, browser type
                  and version, operating system, device type, and screen
                  resolution.
                </li>
                <li>
                  <strong>Usage data:</strong> pages visited, time spent on pages,
                  click patterns, referring URLs, and navigation paths through our
                  website.
                </li>
                <li>
                  <strong>Location data:</strong> approximate geographic location
                  derived from your IP address.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                2.3 Cookies and Similar Technologies
              </h3>
              <p>
                We use cookies, web beacons, and similar tracking technologies to
                collect information about your browsing activities. Please refer
                to Section 6 of this policy for detailed information about our
                cookie practices.
              </p>
            </section>

            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect for the following purposes:
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                3.1 Service Delivery
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  To provide, maintain, and improve our ERP implementation,
                  consulting, and digital transformation services.
                </li>
                <li>
                  To process and respond to your inquiries, consultation requests,
                  and support tickets.
                </li>
                <li>
                  To deliver the ERP Readiness Assessment results and
                  personalised recommendations.
                </li>
                <li>
                  To manage client accounts and provide access to client portals.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                3.2 Communication
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  To send you service-related communications, including project
                  updates, support notifications, and administrative messages.
                </li>
                <li>
                  To send newsletters, industry insights, and marketing materials
                  when you have opted in to receive them.
                </li>
                <li>
                  To invite you to events, webinars, or training sessions relevant
                  to your interests.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                3.3 Improvement and Analytics
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  To analyse website usage patterns and improve the user
                  experience, content, and functionality of our website.
                </li>
                <li>
                  To monitor and analyse trends, usage, and activities in
                  connection with our services.
                </li>
                <li>
                  To develop new features, services, and offerings based on user
                  needs and feedback.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                3.4 Legal and Security
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  To comply with legal obligations and respond to lawful requests
                  from public authorities.
                </li>
                <li>
                  To protect our rights, privacy, safety, or property, and that of
                  our users and the public.
                </li>
                <li>
                  To detect, prevent, and address fraud, security breaches, or
                  technical issues.
                </li>
              </ul>
            </section>

            {/* 4. Information Sharing */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                limited circumstances:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Service providers:</strong> We may share information
                  with trusted third-party service providers who assist us in
                  operating our website, conducting our business, or servicing
                  you, provided they agree to keep this information confidential.
                  These include hosting providers, email service providers,
                  analytics platforms, and payment processors.
                </li>
                <li>
                  <strong>Technology partners:</strong> In the course of delivering
                  ERP and Frappe Framework solutions, we may share necessary
                  project-related information with Frappe Technologies or other
                  technology partners, strictly as required for service delivery.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose your
                  information if required to do so by law or in response to valid
                  requests by public authorities (e.g., a court or government
                  agency).
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger,
                  acquisition, or sale of all or a portion of our assets, your
                  personal information may be transferred as part of that
                  transaction. We will notify you via email and/or a prominent
                  notice on our website of any change in ownership or use of your
                  personal information.
                </li>
                <li>
                  <strong>With your consent:</strong> We may share your
                  information for any other purpose with your explicit consent.
                </li>
              </ul>
            </section>

            {/* 5. Data Security */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect the security of your personal information. These measures
                include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  SSL/TLS encryption for all data transmitted between your browser
                  and our servers.
                </li>
                <li>
                  Secure storage of personal data with access controls limited to
                  authorised personnel.
                </li>
                <li>
                  Regular security assessments and updates to our systems and
                  processes.
                </li>
                <li>
                  Employee training on data protection and privacy best practices.
                </li>
                <li>
                  Incident response procedures to address potential data breaches
                  promptly.
                </li>
              </ul>
              <p className="mt-3">
                While we strive to use commercially acceptable means to protect
                your personal information, no method of transmission over the
                Internet or method of electronic storage is 100% secure. We cannot
                guarantee absolute security, but we are committed to maintaining
                the highest reasonable standard of data protection.
              </p>
            </section>

            {/* 6. Cookies and Tracking */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                6. Cookies and Tracking Technologies
              </h2>
              <p>Our website uses the following types of cookies:</p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                6.1 Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function properly.
                They enable basic features such as page navigation, access to
                secure areas, and form submissions. The website cannot function
                correctly without these cookies.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                6.2 Analytics Cookies
              </h3>
              <p>
                We use analytics cookies (such as Google Analytics) to understand
                how visitors interact with our website. These cookies collect
                information about page views, traffic sources, and user behaviour
                patterns. This information helps us improve our website and
                services. All data collected is aggregated and anonymised.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                6.3 Functional Cookies
              </h3>
              <p>
                These cookies enable enhanced functionality and personalisation,
                such as remembering your preferences, language settings, and
                previously submitted form data to improve your experience.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                6.4 Managing Cookies
              </h3>
              <p>
                Most web browsers allow you to control cookies through their
                settings. You can set your browser to refuse all cookies, accept
                only certain cookies, or notify you when a cookie is set. Please
                note that disabling cookies may affect the functionality of our
                website. For more information about managing cookies, visit your
                browser&apos;s help documentation.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                7. Your Rights
              </h2>
              <p>
                Depending on your location and applicable data protection laws,
                you may have the following rights regarding your personal
                information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Right of access:</strong> You have the right to request
                  a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Right to rectification:</strong> You have the right to
                  request correction of inaccurate or incomplete personal
                  information.
                </li>
                <li>
                  <strong>Right to erasure:</strong> You have the right to request
                  deletion of your personal information, subject to certain legal
                  exceptions.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> You have the
                  right to request that we limit the processing of your personal
                  information under certain circumstances.
                </li>
                <li>
                  <strong>Right to data portability:</strong> You have the right
                  to receive your personal information in a structured, commonly
                  used, and machine-readable format.
                </li>
                <li>
                  <strong>Right to object:</strong> You have the right to object
                  to the processing of your personal information for direct
                  marketing purposes.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where we rely on
                  your consent to process personal information, you have the right
                  to withdraw that consent at any time.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                information provided in Section 10. We will respond to your
                request within 30 days.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfil the purposes for which it was collected, including to
                satisfy any legal, accounting, or reporting requirements. The
                retention period depends on the nature of the data and the purpose
                for which it is processed:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Client project data:</strong> Retained for the duration
                  of the business relationship and for up to 7 years thereafter to
                  comply with legal and contractual obligations.
                </li>
                <li>
                  <strong>Contact form submissions:</strong> Retained for up to 2
                  years from the date of submission unless a business relationship
                  is established.
                </li>
                <li>
                  <strong>Newsletter subscriptions:</strong> Retained until you
                  unsubscribe or request removal.
                </li>
                <li>
                  <strong>Website analytics data:</strong> Aggregated and
                  anonymised data is retained for up to 26 months.
                </li>
                <li>
                  <strong>Assessment data:</strong> Retained for up to 1 year from
                  the date of submission to provide follow-up recommendations.
                </li>
              </ul>
              <p className="mt-3">
                When personal information is no longer required, we will securely
                delete or anonymise it in accordance with our data retention
                procedures.
              </p>
            </section>

            {/* 9. Updates to This Policy */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, legal requirements, or
                other factors. When we make material changes to this policy, we
                will:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Update the &quot;Last updated&quot; date at the top of this page.
                </li>
                <li>
                  Post the revised policy on our website with a notice of the
                  changes.
                </li>
                <li>
                  For significant changes, notify you by email if you are an
                  existing client or subscriber.
                </li>
              </ul>
              <p className="mt-3">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we are protecting your information. Your
                continued use of our website and services after any changes
                indicates your acceptance of the updated policy.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                10. Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 rounded-xl border border-surface-border bg-surface-muted/50 p-6">
                <p className="font-semibold text-text-primary">
                  Techincglobal (Pvt) Ltd
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-text-primary">
                      Address:
                    </span>{" "}
                    No. 289/7 d, Lake Road, Malabe, Sri Lanka
                  </li>
                  <li>
                    <span className="font-medium text-text-primary">
                      Email:
                    </span>{" "}
                    <Link
                      href="mailto:info@techincglobal.com"
                      className="text-brand-blue hover:underline"
                    >
                      info@techincglobal.com
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium text-text-primary">
                      Phone:
                    </span>{" "}
                    <Link
                      href="tel:+94707978978"
                      className="text-brand-blue hover:underline"
                    >
                      +94 707 978 978
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium text-text-primary">
                      Website:
                    </span>{" "}
                    <Link
                      href="https://techincglobal.com"
                      className="text-brand-blue hover:underline"
                    >
                      techincglobal.com
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer note */}
            <div className="border-t border-surface-border pt-8">
              <p className="text-sm text-text-muted">
                This Privacy Policy is effective as of January 2025. For related
                information, please also review our{" "}
                <Link
                  href="/terms"
                  className="text-brand-blue hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
