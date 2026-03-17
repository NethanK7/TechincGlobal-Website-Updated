import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using TECHINCGLOBAL's website and services.",
};

export default function TermsPage() {
  return (
    <main id="main-content">
      {/* Breadcrumbs */}
      <div className="border-b border-surface-border bg-surface-muted/50">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service" },
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
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              Last updated: January 2025
            </p>
          </div>

          {/* Terms content */}
          <div className="space-y-10 text-text-secondary leading-relaxed">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p>
                Welcome to TECHINCGLOBAL. These Terms of Service
                (&quot;Terms&quot;) constitute a legally binding agreement between
                you (&quot;you,&quot; &quot;your,&quot; or &quot;user&quot;) and
                Techincglobal (Pvt) Ltd (&quot;TECHINCGLOBAL,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a company
                registered in Sri Lanka, governing your access to and use of the
                website located at{" "}
                <Link
                  href="https://techincglobal.com"
                  className="text-brand-blue hover:underline"
                >
                  techincglobal.com
                </Link>{" "}
                (the &quot;Website&quot;) and any related services, tools,
                assessments, or resources provided through the Website
                (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-3">
                By accessing or using our Website and Services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms. If you are accessing the Website on behalf of a business or
                other legal entity, you represent that you have the authority to
                bind such entity to these Terms. If you do not agree with any part
                of these Terms, you must not access or use our Website or
                Services.
              </p>
            </section>

            {/* 2. Services Description */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                2. Description of Services
              </h2>
              <p>
                TECHINCGLOBAL is an enterprise technology solutions provider
                specialising in ERP implementation, consulting, and digital
                transformation services. Our Services include, but are not limited
                to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  ERPNext implementation and deployment using our proprietary
                  NXTGEN Agile methodology.
                </li>
                <li>
                  Frappe Framework customisation and application development.
                </li>
                <li>
                  Business process automation and workflow optimisation.
                </li>
                <li>
                  Legacy system modernisation and data migration services.
                </li>
                <li>
                  System integration and API development.
                </li>
                <li>
                  ERP consulting, advisory, and strategic planning.
                </li>
                <li>
                  Ongoing support, maintenance, and system optimisation.
                </li>
                <li>
                  Training, change management, and user adoption programmes.
                </li>
                <li>
                  Online tools such as the ERP Readiness Assessment and resource
                  library.
                </li>
              </ul>
              <p className="mt-3">
                The specific scope, deliverables, timelines, and fees for any
                engagement will be defined in a separate Statement of Work (SOW)
                or service agreement between TECHINCGLOBAL and the client. These
                Terms govern the use of the Website and general interactions with
                our Services; project-specific terms are outlined in individual
                service agreements.
              </p>
            </section>

            {/* 3. Use of Website */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                3. Use of Website
              </h2>
              <p>
                You agree to use our Website and Services only for lawful purposes
                and in accordance with these Terms. You agree not to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Use the Website in any way that violates any applicable national
                  or international law or regulation.
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of the Website,
                  our servers, or any systems or networks connected to our
                  servers.
                </li>
                <li>
                  Use any robot, spider, scraper, or other automated means to
                  access the Website for any purpose without our express written
                  permission.
                </li>
                <li>
                  Introduce any viruses, trojans, worms, logic bombs, or other
                  material that is malicious or technologically harmful.
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone&apos;s
                  use or enjoyment of the Website, or which may harm
                  TECHINCGLOBAL or users of the Website.
                </li>
                <li>
                  Use the Website to transmit, or procure the sending of, any
                  unsolicited or unauthorised advertising, promotional materials,
                  spam, or any other form of solicitation.
                </li>
                <li>
                  Impersonate or attempt to impersonate TECHINCGLOBAL, a
                  TECHINCGLOBAL employee, another user, or any other person or
                  entity.
                </li>
                <li>
                  Reproduce, distribute, modify, create derivative works of,
                  publicly display, or otherwise exploit any content from the
                  Website without our prior written consent.
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right to terminate or restrict your access to the
                Website at any time, without notice, for any conduct that we
                determine, in our sole discretion, violates these Terms or is
                harmful to other users, us, or third parties.
              </p>
            </section>

            {/* 4. Intellectual Property */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                4. Intellectual Property
              </h2>
              <p>
                Unless otherwise indicated, the Website and its entire contents,
                features, and functionality are owned by Techincglobal (Pvt) Ltd,
                its licensors, or other providers of such material and are
                protected by Sri Lankan and international copyright, trademark,
                patent, trade secret, and other intellectual property or
                proprietary rights laws.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                4.1 Our Intellectual Property
              </h3>
              <p>
                The TECHINCGLOBAL name, logo, NXTGEN methodology, and all related
                names, logos, product and service names, designs, and slogans are
                trademarks of Techincglobal (Pvt) Ltd. You must not use such
                marks without our prior written permission. All other names,
                logos, product and service names, designs, and slogans on the
                Website are the trademarks of their respective owners.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                4.2 Website Content
              </h3>
              <p>
                All text, graphics, photographs, images, illustrations, designs,
                icons, video and audio clips, articles, blog posts, case studies,
                whitepapers, software, and other content on the Website
                (collectively, &quot;Content&quot;) are the property of
                TECHINCGLOBAL or its content suppliers and are protected by
                intellectual property laws. You may not copy, reproduce,
                distribute, transmit, broadcast, display, sell, license, or
                otherwise exploit any Content for any other purposes without our
                prior written consent.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                4.3 Limited Licence
              </h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and
                revocable licence to access and use the Website for personal,
                non-commercial, informational purposes. This licence does not
                include the right to modify, reproduce, distribute, or create
                derivative works from the Website or its Content.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  The Website and its Content are provided on an &quot;as is&quot;
                  and &quot;as available&quot; basis, without any warranties of
                  any kind, either express or implied, including but not limited
                  to warranties of merchantability, fitness for a particular
                  purpose, or non-infringement.
                </li>
                <li>
                  TECHINCGLOBAL does not warrant that the Website will be
                  uninterrupted, error-free, secure, or free of viruses or other
                  harmful components.
                </li>
                <li>
                  In no event shall TECHINCGLOBAL, its directors, officers,
                  employees, agents, or affiliates be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including but not limited to loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from your access
                  to or use of (or inability to access or use) the Website or
                  Services.
                </li>
                <li>
                  Our total liability for any claims arising out of or relating to
                  these Terms or the use of the Website shall not exceed the
                  amount you have paid to TECHINCGLOBAL, if any, during the twelve
                  (12) months preceding the claim.
                </li>
              </ul>
              <p className="mt-3">
                Information presented on or through the Website, including blog
                posts, case studies, and assessment results, is made available
                solely for general information purposes. We do not warrant the
                accuracy, completeness, or usefulness of this information. Any
                reliance you place on such information is strictly at your own
                risk.
              </p>
            </section>

            {/* 6. Indemnification */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                6. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Techincglobal
                (Pvt) Ltd, its directors, officers, employees, agents, licensors,
                and service providers from and against any claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or
                relating to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Your violation of these Terms.</li>
                <li>Your use of the Website or Services.</li>
                <li>
                  Your violation of any third-party rights, including without
                  limitation any intellectual property, privacy, or proprietary
                  rights.
                </li>
                <li>
                  Any content or information you submit, post, or transmit through
                  the Website.
                </li>
                <li>
                  Any misrepresentation made by you in connection with the use of
                  our Website or Services.
                </li>
              </ul>
            </section>

            {/* 7. Governing Law */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                7. Governing Law
              </h2>
              <p>
                These Terms and any disputes arising out of or in connection with
                them shall be governed by and construed in accordance with the
                laws of the Democratic Socialist Republic of Sri Lanka, without
                regard to its conflict of law provisions.
              </p>
              <p className="mt-3">
                You agree that any legal suit, action, or proceeding arising out
                of or related to these Terms or the Website shall be instituted
                exclusively in the courts of Sri Lanka. You waive any and all
                objections to the exercise of jurisdiction over you by such courts
                and to venue in such courts.
              </p>
            </section>

            {/* 8. Dispute Resolution */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                8. Dispute Resolution
              </h2>
              <p>
                In the event of any dispute, claim, or controversy arising out of
                or relating to these Terms or the breach, termination,
                enforcement, interpretation, or validity thereof (a
                &quot;Dispute&quot;), the parties agree to the following
                resolution process:
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                8.1 Informal Resolution
              </h3>
              <p>
                Before initiating any formal dispute resolution proceedings, the
                parties agree to first attempt to resolve the Dispute informally.
                Either party may initiate this process by sending a written notice
                describing the nature and basis of the Dispute to the other party.
                The parties shall use good-faith efforts to resolve the Dispute
                within thirty (30) days of receipt of such notice.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                8.2 Mediation
              </h3>
              <p>
                If the Dispute cannot be resolved informally within the thirty-day
                period, either party may submit the Dispute to mediation
                administered by a mutually agreed-upon mediator in Colombo, Sri
                Lanka. The costs of mediation shall be shared equally between the
                parties.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-medium text-text-primary">
                8.3 Litigation
              </h3>
              <p>
                If the Dispute is not resolved through mediation within sixty (60)
                days of the commencement of mediation, either party may pursue
                resolution through the courts of Sri Lanka as specified in
                Section 7.
              </p>
            </section>

            {/* 9. Modifications */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                9. Modifications to Terms
              </h2>
              <p>
                We reserve the right to revise and update these Terms at our sole
                discretion, at any time. All changes are effective immediately
                when posted on the Website and apply to all access to and use of
                the Website thereafter.
              </p>
              <p className="mt-3">
                When we make material changes to these Terms, we will:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Update the &quot;Last updated&quot; date at the top of this
                  page.
                </li>
                <li>
                  Post a notice on our Website indicating the Terms have changed.
                </li>
                <li>
                  For changes that materially affect existing client engagements,
                  provide direct notice via email.
                </li>
              </ul>
              <p className="mt-3">
                Your continued use of the Website following the posting of
                revised Terms means that you accept and agree to the changes. You
                are expected to check this page periodically so you are aware of
                any changes, as they are binding on you.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                10. Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or feedback regarding these
                Terms of Service, please contact us:
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
                These Terms of Service are effective as of January 2025. For
                information about how we handle your personal data, please review
                our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-brand-blue hover:underline"
                >
                  Privacy Policy
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
