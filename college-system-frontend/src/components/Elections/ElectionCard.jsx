// components/Elections.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Elections = ({ elections }) => (
  <div className="container mx-auto p-4">
    <motion.h1 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-3xl font-bold mb-8"
    >
      Ongoing Elections
    </motion.h1>

    <div className="grid gap-6 md:grid-cols-2">
      {elections.map((election) => (
        <motion.div
          key={election._id}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-2">{election.title}</h2>
          <p className="text-gray-600 mb-4">{election.description}</p>
          <Link 
            to={`/elections/${election._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            View Election
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);