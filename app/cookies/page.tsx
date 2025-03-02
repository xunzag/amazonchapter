export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0C1C2D] mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your experience better by remembering your preferences and providing essential features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors use our website</li>
              <li>Advertising cookies: Used to deliver relevant advertisements</li>
              <li>Preference cookies: Remember your settings and choices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Necessary Cookies</h3>
                <p className="text-gray-600">Required for basic website functionality. Cannot be disabled.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-gray-600">Help us improve our website by collecting anonymous usage information.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-gray-600">Used to track visitors across websites to display relevant advertisements.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Delete all cookies from your browser</li>
              <li>Block cookies from being set</li>
              <li>Allow only certain types of cookies</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Note that blocking some types of cookies may impact your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us at info@amazonchapter.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 