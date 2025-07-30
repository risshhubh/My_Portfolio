import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaCheck, FaEdit, FaLightbulb, FaBook, FaCode, FaStar } from "react-icons/fa";

const NotesPage = ({ darkMode = false }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('portfolio-notes');
    return savedNotes ? JSON.parse(savedNotes) : [
      {
        id: 1,
        title: "Portfolio Improvements",
        content: "Add more interactive animations and micro-interactions",
        category: "ideas",
        completed: false,
        priority: "high",
        date: new Date().toISOString()
      },
      {
        id: 2,
        title: "Learn React Native",
        content: "Start building mobile apps with React Native framework",
        category: "learning",
        completed: false,
        priority: "medium",
        date: new Date().toISOString()
      },
      {
        id: 3,
        title: "Build E-commerce App",
        content: "Create a full-stack e-commerce application with MERN stack",
        category: "projects",
        completed: true,
        priority: "high",
        date: new Date().toISOString()
      }
    ];
  });

  const [newNote, setNewNote] = useState({ title: "", content: "", category: "ideas" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [filter, setFilter] = useState("all");

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('portfolio-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note = {
        id: Date.now(),
        ...newNote,
        completed: false,
        priority: "medium",
        date: new Date().toISOString()
      };
      setNotes([note, ...notes]);
      setNewNote({ title: "", content: "", category: "ideas" });
      setShowAddForm(false);
    }
  };

  const toggleComplete = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "ideas": return <FaLightbulb className="text-yellow-500" />;
      case "learning": return <FaBook className="text-blue-500" />;
      case "projects": return <FaCode className="text-green-500" />;
      default: return <FaStar className="text-purple-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-yellow-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const filteredNotes = filter === "all" 
    ? notes 
    : notes.filter(note => note.category === filter);

  const categories = [
    { id: "all", name: "All", icon: <FaStar /> },
    { id: "ideas", name: "Ideas", icon: <FaLightbulb /> },
    { id: "learning", name: "Learning", icon: <FaBook /> },
    { id: "projects", name: "Projects", icon: <FaCode /> }
  ];

  return (
    <div className={`h-full w-full ${darkMode ? "bg-gray-900" : "bg-gray-50"} flex flex-col overflow-hidden`}>
      {/* Header */}
      <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
        <div className="flex justify-between items-center">
          <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>To-Do List</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"} transition-colors`}
          >
            <FaPlus className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
          </button>
        </div>
      </div>

      {/* Add Note Form */}
      {showAddForm && (
        <div className={`p-4 border-b ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}>
          <input
            type="text"
            placeholder="Note title..."
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            className={`w-full mb-3 p-2 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <textarea
            placeholder="Note content..."
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            rows="3"
            className={`w-full mb-3 p-2 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          />
          <select
            value={newNote.category}
            onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
            className={`w-full mb-3 p-2 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="ideas">Ideas</option>
            <option value="learning">Learning</option>
            <option value="projects">Projects</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={addNote}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Note
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className={`flex-1 py-2 px-4 rounded-lg border ${darkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-700 hover:bg-gray-100"} transition-colors`}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors ${
                filter === category.id
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredNotes.length === 0 ? (
          <div className={`text-center py-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <FaBook className="text-4xl mx-auto mb-3 opacity-50" />
            <p>No notes found</p>
            <p className="text-sm">Add your first note to get started!</p>
          </div>
        ) : (
          filteredNotes.map(note => (
            <div
              key={note.id}
              className={`p-4 rounded-lg border transition-all ${
                note.completed
                  ? darkMode
                    ? "bg-gray-800 border-gray-600 opacity-60"
                    : "bg-gray-100 border-gray-300 opacity-60"
                  : darkMode
                  ? "bg-gray-800 border-gray-600 hover:bg-gray-700"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {getCategoryIcon(note.category)}
                  <h3 className={`font-semibold truncate ${darkMode ? "text-white" : "text-gray-900"} ${note.completed ? "line-through" : ""}`}>
                    {note.title}
                  </h3>
                  <span className={`text-xs flex-shrink-0 ${getPriorityColor(note.priority)}`}>
                    {note.priority}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleComplete(note.id)}
                    className={`p-1 rounded ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                  >
                    <FaCheck className={`text-sm ${note.completed ? "text-green-500" : "text-gray-400"}`} />
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className={`p-1 rounded ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                  >
                    <FaTrash className="text-sm text-red-500" />
                  </button>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} ${note.completed ? "line-through" : ""}`}>
                {note.content}
              </p>
              <div className={`text-xs mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {new Date(note.date).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesPage; 