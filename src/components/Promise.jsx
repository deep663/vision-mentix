import React from "react";
import { CheckCircle } from "lucide-react";
export default function Promise({ darkMode}) {
  return (
    <section
      id="our-promise"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Our Promise to You
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Transparency, speed, and partnership from day one
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-slate-50 border border-slate-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  No Surprises
                </h3>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  Fixed-scope sprints with clear deliverables. You always know
                  what you’re getting and when.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-slate-50 border border-slate-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Your Success = Our Success
                </h3>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  We only win when you do. That’s why we align our goals with
                  your business outcomes.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-slate-50 border border-slate-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Built to Scale
                </h3>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  Clean, maintainable code with modern DevOps practices—so
                  you’re ready for growth.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-slate-800 border border-slate-700"
                : "bg-slate-50 border border-slate-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Ethical & Secure by Design
                </h3>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  We follow industry best practices for data security and
                  privacy—even before formal certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
