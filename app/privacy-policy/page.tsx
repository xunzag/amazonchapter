export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0C1C2D] mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Amazon Chapter ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or enroll in our courses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-600">We collect several types of information, including:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Contact information for course enrollment</li>
                <li>Payment information</li>
                <li>Usage data and website activity</li>
                <li>Marketing and communications preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process your course enrollments</li>
              <li>Communicate with you about our services</li>
              <li>Send you important updates about our courses</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use third-party services for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Payment processing</li>
              <li>Analytics (Google Analytics)</li>
              <li>Marketing (Google Ads)</li>
              <li>Communication (WhatsApp Business)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              These services have their own privacy policies, and we recommend reviewing them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Marketing Communications</h2>
            <p className="text-gray-600 mb-4">
              You can opt out of marketing communications at any time by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clicking "unsubscribe" in our emails</li>
              <li>Contacting us directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for children under 13. We do not knowingly collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              For questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none text-gray-600 mt-2">
              <li>Email: info@amazonchapter.com</li>
              <li>WhatsApp: 0339 0200999</li>
              <li>Address: 98, Block L North Nazimabad Town, Karachi</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 