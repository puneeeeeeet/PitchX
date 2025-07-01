import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  // Dummy data for posts
  const [posts, setPosts] = useState([
    {
      id: 'post1',
      type: 'Project',
      title: 'E-commerce Platform Redesign',
      link: 'https://github.com/user/ecommerce-redesign',
      description: 'A modern e-commerce platform built with React and Node.js.',
      tags: ['#WebDev', '#ReactJS', '#NodeJS'],
      likes: 120,
      comments: 15,
      saved: false,
    },
    {
      id: 'post2',
      type: 'Certification',
      title: 'AWS Certified Solutions Architect - Associate',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      description: 'Achieved certification in designing distributed systems on AWS.',
      tags: ['#CloudComputing', '#AWS', '#Certification'],
      likes: 85,
      comments: 8,
      saved: true,
    },
    {
      id: 'post3',
      type: 'Coding Rank',
      platform: 'LeetCode',
      profileLink: 'https://leetcode.com/user_profile/',
      description: 'Achieved Guardian rank on LeetCode with 500+ problems solved.',
      tags: ['#Algorithms', '#DataStructures', '#CompetitiveProgramming'],
      likes: 200,
      comments: 25,
      saved: false,
    },
    {
      id: 'post4',
      type: 'Research Paper',
      title: 'Advancements in Reinforcement Learning for Robotics',
      link: 'https://arxiv.org/abs/2101.00001',
      description: 'Exploration of novel RL techniques applied to robotic control.',
      tags: ['#AI', '#MachineLearning', '#Robotics'],
      likes: 95,
      comments: 10,
      saved: false,
    },
    {
      id: 'post5',
      type: 'Internship',
      role: 'Software Engineering Intern',
      company: 'Tech Innovators Inc.',
      link: 'https://www.techinnovators.com/offer-letter-sample.pdf', // Dummy link
      description: 'Developed scalable microservices for a large-scale enterprise application.',
      tags: ['#SoftwareDevelopment', '#Backend', '#Java'],
      likes: 150,
      comments: 20,
      saved: true,
    },
    {
      id: 'post6',
      type: 'Project',
      title: 'Mobile Expense Tracker App',
      link: 'https://github.com/user/expense-tracker-app',
      description: 'Cross-platform mobile app for tracking personal expenses.',
      tags: ['#MobileDev', '#Flutter', '#Firebase'],
      likes: 70,
      comments: 5,
      saved: false,
    },
    {
      id: 'post7',
      type: 'Certification',
      title: 'Google Cloud Professional Data Engineer',
      link: 'https://cloud.google.com/certification/data-engineer',
      description: 'Certified in designing and building data processing systems on GCP.',
      tags: ['#CloudComputing', '#GCP', '#DataEngineering'],
      likes: 110,
      comments: 12,
      saved: false,
    },
    {
      id: 'post8',
      type: 'Coding Rank',
      platform: 'HackerRank',
      profileLink: 'https://www.hackerrank.com/user_profile/',
      description: 'Achieved Gold badge in Python and Algorithms on HackerRank.',
      tags: ['#Python', '#Algorithms', '#ProblemSolving'],
      likes: 180,
      comments: 18,
      saved: true,
    },
    {
      id: 'post9',
      type: 'Research Paper',
      title: 'Quantum Computing for Drug Discovery',
      link: 'https://science.org/doi/10.1126/science.abc1234', // Dummy link
      description: 'Investigating the potential of quantum algorithms in pharmaceutical research.',
      tags: ['#QuantumComputing', '#Chemistry', '#Research'],
      likes: 60,
      comments: 7,
      saved: false,
    },
    {
      id: 'post10',
      type: 'Internship',
      role: 'Data Science Intern',
      company: 'Analytics Solutions Co.',
      link: 'https://www.analyticssolutions.com/offer-letter-sample.pdf', // Dummy link
      description: 'Analyzed large datasets to derive insights and build predictive models.',
      tags: ['#DataScience', '#Python', '#MachineLearning'],
      likes: 130,
      comments: 17,
      saved: false,
    },
  ]);

  // Dummy data for sidebar sections
  const [leaderboardUsers, setLeaderboardUsers] = useState([
    { id: 'u1', name: 'Alice Smith', score: 1500 },
    { id: 'u2', name: 'Bob Johnson', score: 1450 },
    { id: 'u3', name: 'Charlie Brown', score: 1380 },
    { id: 'u4', name: 'Diana Prince', score: 1300 },
    { id: 'u5', name: 'Ethan Hunt', score: 1250 },
  ]);

  const [topProjects, setTopProjects] = useState([
    { id: 'tp1', title: 'AI-Powered Chatbot', likes: 500 },
    { id: 'tp2', title: 'Blockchain Voting System', likes: 450 },
    { id: 'tp3', title: 'Personal Finance Dashboard', likes: 400 },
  ]);

  const [topSkills, setTopSkills] = useState([
    { id: 'ts1', name: 'ReactJS', count: 1200 },
    { id: 'ts2', name: 'Python', count: 1100 },
    { id: 'ts3', name: 'AWS', count: 950 },
  ]);

  const [filter, setFilter] = useState('Recent'); // State for sorting/filtering
  const [categoryFilter, setCategoryFilter] = useState('All'); // State for category filter

  // Function to sort posts based on filter
  const getSortedAndFilteredPosts = () => {
    let filtered = posts;

    // Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(post => post.type === categoryFilter);
    }

    // Apply sorting
    switch (filter) {
      case 'Most Liked':
        return [...filtered].sort((a, b) => b.likes - a.likes);
      case 'Recent':
      default:
        // For dummy data, we'll just return as is, or you could add a timestamp
        return filtered;
    }
  };

  const sortedAndFilteredPosts = getSortedAndFilteredPosts();

  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 rounded-b-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">SkillShowcase Explore</h1>
          {/* Dummy user profile icon */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hidden sm:block">Welcome, User!</span>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 lg:col-span-1 space-y-6">
          <Sidebar
            leaderboardUsers={leaderboardUsers}
            topProjects={topProjects}
            topSkills={topSkills}
            filter={filter}
            setFilter={setFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </aside>

        {/* Main Feed */}
        <section className="md:col-span-2 lg:col-span-3 space-y-6">
          <MainFeed posts={sortedAndFilteredPosts} />
        </section>
      </main>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ leaderboardUsers, topProjects, topSkills, filter, setFilter, categoryFilter, setCategoryFilter }) => {
  return (
    <div className="space-y-6">
      {/* User Dashboard */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Dashboard</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            JS
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">Jane Doe</p>
            <p className="text-sm text-gray-500">@janedoe_dev</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-600">12</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-600">850</p>
            <p className="text-sm text-gray-500">Likes</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
          View Profile
        </button>
      </div>

      {/* Sorting/Filtering Options */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter & Sort</h2>
        <div className="mb-4">
          <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-2">Sort By:</label>
          <select
            id="sort-by"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Recent</option>
            <option>Most Liked</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
          <select
            id="category-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All</option>
            <option>Project</option>
            <option>Certification</option>
            <option>Coding Rank</option>
            <option>Research Paper</option>
            <option>Internship</option>
          </select>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Leaderboard</h2>
        <ul className="space-y-3">
          {leaderboardUsers.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-gray-600">{index + 1}.</span>
                <span className="text-gray-700">{user.name}</span>
              </div>
              <span className="text-indigo-600 font-semibold">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Projects */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Projects</h2>
        <ul className="space-y-3">
          {topProjects.map((project) => (
            <li key={project.id} className="flex items-center justify-between">
              <span className="text-gray-700">{project.title}</span>
              <span className="text-sm text-gray-500 flex items-center">
                <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {project.likes}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Skills */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Skills</h2>
        <ul className="space-y-3">
          {topSkills.map((skill) => (
            <li key={skill.id} className="flex items-center justify-between">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.count} users</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Feed Component
const MainFeed = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-600">
          No posts found matching your criteria.
        </div>
      )}
    </div>
  );
};

// Post Card Component
const PostCard = ({ post }) => {
  const renderPostContent = () => {
    switch (post.type) {
      case 'Project':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
              GitHub Link
            </a>
          </>
        );
      case 'Certification':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
              View Certificate
            </a>
          </>
        );
      case 'Coding Rank':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900">{post.platform}</h3>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <a href={post.profileLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
              View Profile
            </a>
          </>
        );
      case 'Research Paper':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
              View Source
            </a>
          </>
        );
      case 'Internship':
        return (
          <>
            <h3 className="text-xl font-semibold text-gray-900">{post.role} at {post.company}</h3>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">
              Offer Letter Link
            </a>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {post.type}
        </span>
        {/* Dummy user info for the post */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm">
            JD
          </div>
          <span className="text-sm font-medium text-gray-700">Jane Doe</span>
        </div>
      </div>

      {renderPostContent()}

      {/* Skill Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Interaction Options */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-around text-gray-500">
        <button className="flex items-center space-x-1 hover:text-blue-600 transition duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span>{post.likes} Likes</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600 transition duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.336-3.11c-.813-1.333-1.336-2.924-1.336-4.89C2 6.134 5.582 3 10 3s8 3.134 8 7z" clipRule="evenodd" />
          </svg>
          <span>{post.comments} Comments</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600 transition duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <span>{post.saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
};

// Make sure to include the Tailwind CSS CDN in your HTML file's <head> section
// <script src="https://cdn.tailwindcss.com"></script>
// And optionally, for the Inter font:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

export default App;
