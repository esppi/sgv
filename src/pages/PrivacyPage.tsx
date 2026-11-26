import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="November 26, 2026">
      <p>
        Social Graph Ventures LLC ("SGV", "we", "us" or "our") respects your privacy. This Privacy
        Policy explains how we collect, use, share and protect information when you visit
        socialgraph.vc, use our member portal, or use the tools and applications we operate,
        including applications that connect to your Google account with your permission (together,
        the "Services").
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide.</strong> Your name, email address, company and anything
          else you send us when you contact us, submit a company for review or communicate with our
          team.
        </li>
        <li>
          <strong>Usage information.</strong> Basic technical data collected automatically, such as
          IP address, browser type, pages visited and timestamps, including through privacy-friendly
          website analytics.
        </li>
        <li>
          <strong>Google user data.</strong> If you connect a Google account to one of our
          applications, we access only the data covered by the permissions you approve on
          Google's consent screen. Depending on those permissions, this may include your email
          address and basic profile, Gmail messages, labels and settings, Google Calendar events,
          Google Contacts, and Google Drive, Docs and Sheets files.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>
          To provide, operate and maintain the Services and the features you request, such as
          reading, organizing and drafting email, managing calendar events, and finding, reading or
          editing documents on your behalf.
        </li>
        <li>To communicate with you and respond to your requests.</li>
        <li>To keep the Services secure, prevent abuse and fix problems.</li>
        <li>To comply with our legal obligations.</li>
      </ul>

      <h2>3. Google API Services: Limited Use</h2>
      <p>
        SGV's use and transfer to any other app of information received from Google APIs will
        adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. In particular:
      </p>
      <ul>
        <li>We use Google user data only to provide and improve the user-facing features of our applications.</li>
        <li>We do not sell Google user data.</li>
        <li>
          We do not use or transfer Google user data for serving advertisements, including
          retargeting, personalized or interest-based advertising.
        </li>
        <li>We do not use Google user data to determine creditworthiness or for lending purposes.</li>
        <li>
          We do not use Google user data to develop, improve or train generalized artificial
          intelligence or machine learning models.
        </li>
        <li>
          We do not allow humans to read Google user data unless you have given us your affirmative
          agreement for specific messages or files, it is necessary for security purposes such as
          investigating abuse, it is necessary to comply with applicable law, or the data has been
          aggregated and anonymized for internal operations.
        </li>
      </ul>

      <h2>4. How we share information</h2>
      <p>We do not sell personal information. We share information only:</p>
      <ul>
        <li>
          With service providers that help us run the Services, such as hosting, email and AI model
          providers, who process it on our behalf and only to provide the Services.
        </li>
        <li>When required by law, regulation, legal process or a governmental request.</li>
        <li>To protect the rights, property or safety of SGV, our users or others.</li>
        <li>In connection with a merger, acquisition or sale of assets, subject to this Policy.</li>
        <li>With your consent.</li>
      </ul>

      <h2>5. Storage and security</h2>
      <p>
        Access tokens and data are stored on servers we control or with reputable cloud providers,
        protected by encryption and access controls. No method of transmission or storage is
        completely secure, but we use reasonable measures to protect your information.
      </p>

      <h2>6. Retention and deletion</h2>
      <p>
        We keep information only as long as needed for the purposes described in this Policy or as
        required by law. You can revoke an application's access to your Google account at any time
        at{" "}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
          myaccount.google.com/permissions
        </a>
        . Once access is revoked, our stored tokens stop working and we can no longer access your
        Google data. To ask us to delete your information, email{" "}
        <a href="mailto:contact@socialgraph.vc">contact@socialgraph.vc</a>.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or restrict
        the use of your personal information, or to object to its processing. To make a request,
        email <a href="mailto:contact@socialgraph.vc">contact@socialgraph.vc</a>.
      </p>

      <h2>8. International transfers</h2>
      <p>
        We work from several countries and use providers in the United States and elsewhere, so
        your information may be processed outside the country where you live.
      </p>

      <h2>9. Children</h2>
      <p>
        The Services are not directed to anyone under 18, and we do not knowingly collect personal
        information from children.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We may update this Policy from time to time. We will post the new version on this page and
        change the "Last updated" date above.
      </p>

      <h2>11. Contact</h2>
      <p>
        Social Graph Ventures LLC, 8 The Green, Suite A, Dover, DE 19901, USA.
        <br />
        <a href="mailto:contact@socialgraph.vc">contact@socialgraph.vc</a>
      </p>
    </LegalLayout>
  );
}
