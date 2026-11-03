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
  title: "Anti-Spam Policy",
  description:
    "BusinessGPS only emails people who asked to hear from us. Every email has an unsubscribe link, and we never buy or rent lists.",
  alternates: { canonical: "/anti-spam" },
};

export default function AntiSpamPage() {
  return (
    <PolicyPage title="Anti-Spam Policy">
      <PolicySection heading="Who we email">
        <p>
          We only email people who signed up for, registered for, attended, or asked to hear from
          BusinessGPS. We never buy or rent email lists.
        </p>
      </PolicySection>

      <PolicySection heading="What every email includes">
        <PolicyList
          items={[
            "An unsubscribe link.",
            `Our mailing address: BusinessGPS, ${contact.address}.`,
          ]}
        />
      </PolicySection>

      <PolicySection heading="Unsubscribing">
        <p>
          Unsubscribes are honored promptly, and always within the 10 business days CAN-SPAM allows.
          Unsubscribing is free, and we won&rsquo;t ask you for anything beyond your email address.
        </p>
      </PolicySection>

      <PolicySection heading="CAN-SPAM">
        <p>
          We follow the CAN-SPAM Act. Our emails say clearly that they come from BusinessGPS, and our
          subject lines reflect what&rsquo;s in the message.
        </p>
      </PolicySection>

      <PolicySection heading="Reporting unwanted email">
        <p>
          If you get an email from us that you didn&rsquo;t ask for, tell us at <PolicyEmail /> and
          we&rsquo;ll look into it. For how we handle your information, see our{" "}
          <PolicyLink href="/privacy">Privacy Policy</PolicyLink>.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
