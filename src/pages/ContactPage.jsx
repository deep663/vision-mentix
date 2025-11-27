import React from 'react';
import Contact from '../components/Contact';
import { contact } from '../data';

export default function ContactPage({ darkMode }) {
  return (
    <div className="pt-20">
      <Contact darkMode={darkMode} contact={contact} />
    </div>
  );
}