import type { Metadata } from "next";
import { contact } from "@/components/nav-links";
import {
  PolicyEmail,
  PolicyLink,
  PolicyList,
  PolicyPage,
  PolicySection,
} from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What BusinessGPS collects through ourbizgps.com, how we use it, who processes it, and how to update or delete your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <PolicySection heading="Who we are">
        <p>
          ourbizgps.com is operated by BusinessGPS, a NexCore company, {contact.address}. This policy
          explains what we collect through the site and what we do with it. Questions go to{" "}
          <PolicyEmail />.
        </p>
      </PolicySection>

      <PolicySection heading="What we collect">
        <PolicyList
          items={[
            "Through our membership application and guest registration forms: your name, email, mobile number, business, industry, and the chapter or meeting you choose, plus anything else you tell us in the form, such as who invited you or why you want to join.",
            "Through our newsletter form: your name and email.",
            "Through our L.I.N.K. updates form: your email.",
          ]}
        />
      </PolicySection>

      <PolicySection heading="How we use it">
        <p>
          We use this information to manage chapter meetings and membership, follow up with guests,
          and send BusinessGPS updates.
        </p>
        <p>We never sell or rent your information.</p>
      </PolicySection>

      <PolicySection heading="Services that process it">
        <PolicyList
          items={[
            "Formspree receives our membership application, guest registration, and L.I.N.K. updates forms.",
            "Sender.net receives our newsletter signups and sends our email.",
            "Google reCAPTCHA helps protect our forms from spam and abuse.",
            "Eventbrite may handle event registrations.",
            "Square handles membership payments. We send you there to complete payment.",
            "Vercel hosts this site and provides its visitor analytics.",
          ]}
        />
        <p>
          Google&rsquo;s{" "}
          <PolicyLink href="https://policies.google.com/privacy">Privacy Policy</PolicyLink> and{" "}
          <PolicyLink href="https://policies.google.com/terms">Terms of Service</PolicyLink> apply to
          reCAPTCHA.
        </p>
      </PolicySection>

      <PolicySection heading="Cookies">
        <p>
          Sender.net sets cookies so our newsletter form works and to recognize subscribers, and
          Google reCAPTCHA may set cookies of its own. Vercel&rsquo;s analytics do not use cookies.
          You can block or clear cookies in your browser settings, though forms may not work as
          expected if you do.
        </p>
      </PolicySection>

      <PolicySection heading="Updating or deleting your information">
        <p>
          To update or delete your information, email <PolicyEmail />. To stop receiving our email,
          use the unsubscribe link in any message. See our{" "}
          <PolicyLink href="/anti-spam">Anti-Spam Policy</PolicyLink>.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
