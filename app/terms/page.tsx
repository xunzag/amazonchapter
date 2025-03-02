export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0C1C2D] mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Amazon Chapter's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Course Enrollment and Payment</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2.1 Enrollment</h3>
              <p className="text-gray-600">
                Course enrollment is subject to availability and payment of applicable fees. We reserve the right to refuse enrollment at our discretion.
              </p>

              <h3 className="text-xl font-semibold">2.2 Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All fees are to be paid in full before course commencement</li>
                <li>Fees are non-refundable unless otherwise stated</li>
                <li>Payment methods accepted: Cash, Bank Transfer</li>
              </ul>

              <h3 className="text-xl font-semibold">2.3 Rescheduling</h3>
              <p className="text-gray-600">
                Course rescheduling requests must be made at least 48 hours before the scheduled class time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                All course materials, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Training materials and presentations</li>
                <li>Videos and recordings</li>
                <li>Documents and guides</li>
                <li>Website content</li>
              </ul>
              <p className="text-gray-600">
                are the property of Amazon Chapter and are protected by copyright laws. Reproduction or distribution without permission is strictly prohibited.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Student Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Attend classes regularly and punctually</li>
              <li>Complete assigned tasks and exercises</li>
              <li>Maintain respectful behavior towards instructors and fellow students</li>
              <li>Use provided resources and materials responsibly</li>
              <li>Not share course materials with non-enrolled individuals</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Course Completion</h2>
            <p className="text-gray-600 mb-4">
              Certificates will be issued upon successful completion of the course, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Minimum 80% attendance</li>
              <li>Completion of required assignments</li>
              <li>Participation in practical sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide accurate and up-to-date information, Amazon Chapter:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Does not guarantee specific income or business results</li>
              <li>Is not responsible for students' business decisions or outcomes</li>
              <li>Reserves the right to modify course content as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend access to our services for violations of these terms or disruptive behavior, without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at:
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