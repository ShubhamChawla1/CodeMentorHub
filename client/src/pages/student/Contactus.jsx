import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-14 px-6 lg:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-lg mb-10">
          We're here to help! You can reach out to CodeMentorHub using the details below.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-600">support@codementorhub.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
            <p className="text-gray-600">‪+91 98765 43210‬</p>
            <p className="text-sm text-gray-500">Mon - Fri: 10:00 AM - 6:00 PM IST</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
            <p className="text-gray-600">
              CodeMentorHub Pvt. Ltd.<br />
              2nd Floor, Tech Park Building,<br />
              Bengaluru, Karnataka, 560001, India
            </p>
          </div>
        </div>

        <p className="mt-16 text-base text-gray-500">
          For any questions, suggestions, or technical issues, feel free to drop us an email or call us during business hours. We’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;