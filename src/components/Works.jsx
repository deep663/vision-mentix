import React from 'react';
import { ExternalLink } from 'lucide-react';

const Works = ({ darkMode, works }) => {
  return (
    <div id="works" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Works</h2>
          <p className="mt-4 text-lg leading-6 text-slate-500">
            A glimpse into some of the projects we have successfully delivered.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {works.map((project) => (
            <div key={project.title} className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-64 object-cover" src={project.image} alt={project.title} />
              <div className={`p-6 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-base text-slate-400">{project.desc}</p>
                <a href={project.link} className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-400">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
