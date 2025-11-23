import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ darkMode, testimonials }) {
  return (
    <section id="testimonials" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>What Our Clients Say</h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Real results from real partnerships</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cyan-500 fill-cyan-500" />
                ))}
              </div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
