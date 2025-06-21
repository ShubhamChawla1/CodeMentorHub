import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About CodeMentorHub</h1>
        <p className="text-lg text-gray-700 mb-8">
          CodeMentorHub is your trusted tech learning platform, built to help you master in-demand skills
          and grow your career through interactive and hands-on courses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            alt="Vision"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To make quality tech education accessible to everyone, everywhere. Learn anytime, build
            real-world skills, and achieve more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png"
            alt="What We Offer"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
          <ul className="text-gray-600 list-disc text-left pl-6 space-y-1">
            <li>Expert-Led Courses</li>
            <li>Hands-on Projects</li>
            <li>Quizzes & Certifications</li>
            <li>Job-Oriented Curriculum</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4139/4139981.png"
            alt="Who We Are"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
          <p className="text-gray-600">
            A passionate team of developers, educators, and designers building a bridge between
            academic learning and real-world tech careers.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Join CodeMentorHub and Start Your Learning Journey Today!
        </h2>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          Explore Courses
        </a>
      </div>
    </div>
  );
};

export default Aboutus;