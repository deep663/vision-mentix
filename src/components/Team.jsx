import React from 'react';

export default function Team({ darkMode, team }) {
  return (
    <section id="team" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Team</h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Meet the experts behind Vision Mentix</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
            >
              <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
              <p className={`text-cyan-500 mb-4`}>{member.role}</p>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
