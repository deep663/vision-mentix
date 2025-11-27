import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ darkMode, contact }) => {
  return (
    <div id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-slate-500">
            We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="ml-3 text-base">
                <h3 className="font-semibold">Address</h3>
                <p className="text-slate-400">{contact.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="ml-3 text-base">
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-slate-300">{contact.email}</a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="ml-3 text-base">
                <h3 className="font-semibold">Phone</h3>
                <a href={`tel:${contact.phone}`} className="text-slate-400 hover:text-slate-300">{contact.phone}</a>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">Full name</label>
                  <input type="text" name="full-name" id="full-name" autoComplete="name" className={`block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md ${darkMode ? 'bg-slate-700' : ''}`} placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className={`block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md ${darkMode ? 'bg-slate-700' : ''}`} placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} className={`block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md ${darkMode ? 'bg-slate-700' : ''}`} placeholder="Message" defaultValue={""} />
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
