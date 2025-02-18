// components/Voting.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Voting = ({ election, onSubmit }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [email, setEmail] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h1 className="text-2xl font-bold mb-6">{election.title}</h1>
      
      <div className="space-y-4 mb-8">
        {election.candidates.map((candidate, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-lg border ${
              selectedCandidate === index 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
            onClick={() => setSelectedCandidate(index)}
          >
            <h3 className="font-semibold text-lg">{candidate.name}</h3>
            <p className="text-gray-600">{candidate.bio}</p>
          </motion.div>
        ))}
      </div>

      <input
        type="email"
        placeholder="Enter college email"
        className="w-full p-3 border rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-green-500 text-white py-3 rounded font-semibold"
        onClick={() => onSubmit(email, selectedCandidate)}
        disabled={!selectedCandidate || !email}
      >
        Submit Vote
      </motion.button>
    </motion.div>
  );
};