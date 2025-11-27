import React from 'react';

const Blog = ({ darkMode, blog }) => {
  return (
    <div id="blog" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Blog</h2>
          <p className="mt-4 text-lg leading-6 text-slate-500">
            Insights and updates from our team.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {blog.map((post) => (
            <div key={post.title} className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-500">
                    Article
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold">{post.title}</p>
                    <p className="mt-3 text-base text-slate-400">{post.snippet}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-slate-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
