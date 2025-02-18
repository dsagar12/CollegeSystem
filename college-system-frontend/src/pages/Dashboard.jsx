import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Importing external CSS

const Dashboard = () => {
  const userName = "Sagar Dhawlapure";

  const modules = [
    { id: 1, title: "Active Elections", count: 1, description: "Student Council Elections", icon: "🗳️" },
    { id: 2, title: "Applications", count: 0, description: "Pending Review", icon: "📄" },
    { id: 3, title: "Available Facilities", count: 0, description: "Ready to Book", icon: "🏢" },
    { id: 4, title: "Active Complaints", count: 0, description: "Under Moderation", icon: "💬" }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>College Manager</h2>
        <p>Welcome, {userName}</p>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/elections">Elections</Link></li>
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/complaints">Complaints</Link></li>
          </ul>
        </nav>
        <Link to="/logout" className="logout">Logout</Link>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <h1>Welcome Back, {userName}!</h1>
        <p>Here's what's happening in your college today</p>

        {/* Modules Grid */}
        <div className="modules-grid">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="module-card"
            >
              <div className="module-icon">{module.icon}</div>
              <h2 className="module-title">{module.title}</h2>
              <h3 className="module-count">{module.count}</h3>
              <p className="module-description">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
