import React from 'react';
import Blog from '../components/Blog';
import { blog } from '../data';

export default function BlogPage({ darkMode }) {
  return (
    <div className="pt-20"> {/* account for fixed header */}
      <Blog darkMode={darkMode} blog={blog} />
    </div>
  );
}