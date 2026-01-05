
import React, { useState } from 'react';
import { generateUXBrief } from '../services/gemini';
import { GeneratedBrief } from '../types';

const AIBriefGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<GeneratedBrief | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setBrief(null);
    try {
      const result = await generateUXBrief(input);
      setBrief(result);
    } catch (error) {
      alert("Something went wrong generating the brief. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest">
            Experimental
          </span>
          <h2 className="text-4xl font-bold tracking-tight">AI Project Brief Assistant</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Stuck on a new project idea? Enter a vague concept and let my custom Gemini integration structure a professional UX brief for you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., An app for elderly people to find local walking groups..."
              className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Generate Brief</span>
                </>
              )}
            </button>
          </div>

          {brief && (
            <div className="mt-12 animate-fade-in space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Problem</h4>
                  <p className="text-gray-700 leading-relaxed">{brief.problem}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed">{brief.solution}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">User Persona</h4>
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                   <p className="text-purple-900 font-medium">{brief.persona}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Key MVP Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {brief.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIBriefGenerator;
