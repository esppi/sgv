import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="November 26, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of socialgraph.vc, our member portal, and
        the tools and applications operated by Social Graph Ventures LLC ("SGV", "we", "us" or
        "our") (together, the "Services"). By using the Services, you agree to these Terms. If you
        do not agree, do not use the Services.
      </p>

      <h2>1. Eligibility</h2>
      <p>You must be at least 18 years old and able to form a binding contract to use the Services.</p>

      <h2>2. Use of the Services</h2>
      <p>You agree to use the Services only for lawful purposes and in line with these Terms. You will not:</p>
      <ul>
        <li>Misuse, interfere with or disrupt the Services or the systems that run them.</li>
        <li>Try to gain unauthorized access to the Services, other accounts or our systems.</li>
        <li>Copy, modify, reverse engineer or resell the Services, except as allowed by law.</li>
        <li>Use the Services to send spam or to share unlawful, harmful or infringing content.</li>
        <li>Violate the rights of others or any applicable law.</li>
      </ul>

      <h2>3. Accounts and connected services</h2>
      <p>
        Some features require an account or a connection to a third-party account, such as Google.
        You are responsible for keeping your credentials secure and for activity under your account.
        When you connect a third-party account, you authorize us to access the data you approve,
        only to provide the features you request, as described in our{" "}
        <Link to="/privacy">Privacy Policy</Link>. You can revoke this access at any time. Your use
        of third-party services is also governed by their own terms and policies.
      </p>

      <h2>4. No offer and no investment advice</h2>
      <p>
        Content on the Services is for informational purposes only. Nothing on the Services is an
        offer to sell, or a solicitation of an offer to buy, any security or interest in any fund,
        and nothing is investment, legal, tax or accounting advice. Any offer will be made only
        through definitive documents and only to qualified persons where permitted by law.
        References to portfolio companies are not recommendations, and past performance does not
        guarantee future results.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The Services and their content, including text, graphics, logos and software, are owned by
        SGV or its licensors and are protected by intellectual property laws. We grant you a
        limited, personal, non-exclusive, non-transferable and revocable license to use the
        Services for their intended purpose. The SGV name and logo are our trademarks and may not
        be used without our written permission.
      </p>

      <h2>6. Information you submit</h2>
      <p>
        You keep ownership of the content you submit to us. You grant us a license to use it to
        operate and provide the Services. SGV reviews many companies and opportunities, and may
        invest in or work with companies similar to yours. Unless we agree otherwise in writing,
        submitting information to us does not create a confidentiality obligation or any other
        relationship between you and SGV.
      </p>

      <h2>7. Third-party links and services</h2>
      <p>
        The Services may link to or integrate with websites and services we do not control. We are
        not responsible for their content, policies or practices.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Services are provided "as is" and "as available", without warranties of any kind,
        express or implied, including warranties of merchantability, fitness for a particular
        purpose and non-infringement. We do not guarantee that the Services will be uninterrupted,
        secure or error-free, or that any information on them is accurate or complete.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, SGV and its members, managers, employees and agents
        will not be liable for any indirect, incidental, special, consequential or punitive
        damages, or for any loss of profits, data or goodwill, arising from or related to your use
        of the Services. Our total liability for any claim related to the Services will not exceed
        one hundred US dollars (USD 100).
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless SGV and its members, managers, employees and
        agents from any claims, losses and expenses, including reasonable legal fees, arising from
        your use of the Services or your violation of these Terms.
      </p>

      <h2>11. Suspension and termination</h2>
      <p>
        We may suspend or end your access to the Services at any time, with or without notice, if
        we believe you have violated these Terms or to protect the Services or other users. You may
        stop using the Services at any time.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States, without
        regard to its conflict of laws rules. Any dispute will be resolved exclusively in the state
        or federal courts located in Delaware, and you consent to their jurisdiction.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the new version on this page and
        change the "Last updated" date above. Continued use of the Services after a change means
        you accept the updated Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        Social Graph Ventures LLC, 8 The Green, Suite A, Dover, DE 19901, USA.
        <br />
        <a href="mailto:contact@socialgraph.vc">contact@socialgraph.vc</a>
      </p>
    </LegalLayout>
  );
}
