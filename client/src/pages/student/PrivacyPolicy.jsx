import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-14 px-6 lg:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">
          Privacy Policy
        </h1>
        <p className="text-center mb-10 text-lg">
          At <strong>CodeMentorHub</strong>, your privacy matters. We believe in being transparent about how we
          collect, use, and protect your information.
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>🔍</span> 1. Information We Collect
            </h2>
            <ul className="list-disc list-inside ml-4 text-base">
              <li>Full name, email address, and contact details</li>
              <li>Course progress and activity data</li>
              <li>Payment and billing information</li>
              <li>Device, browser, and location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>📊</span> 2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside ml-4 text-base">
              <li>Improve your learning experience</li>
              <li>Personalize recommendations and dashboard</li>
              <li>Secure your transactions and account</li>
              <li>Communicate updates, offers, or support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>🤝</span> 3. Data Sharing
            </h2>
            <p className="text-base">
              We do not sell your personal data. We only share your data with trusted service providers
              (like payment gateways and analytics) under strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>🍪</span> 4. Cookies
            </h2>
            <p className="text-base">
              We use cookies to improve user experience and gather analytics. You can manage cookie preferences in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>🔐</span> 5. Your Rights
            </h2>
            <p className="text-base">
              You have the right to access, correct, or delete your personal data. For any concerns,
              contact us at: <a href="mailto:support@codementorhub.com" className="text-blue-600 underline">support@codementorhub.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>📅</span> 6. Policy Updates
            </h2>
            <p className="text-base">
              This privacy policy may be updated from time to time. We'll notify users through email or platform notifications.
            </p>
          </section>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          Last updated: June 21, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;