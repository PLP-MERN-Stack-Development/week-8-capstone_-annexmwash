
// src/pages/Outline.jsx

import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Outline = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      // Redirect to login if no token is found
      navigate('/');
      return;
    }

    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/notes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNotes(res.data);
      } catch (err) {
        console.error('Error fetching notes:', err);
      }
    };

    fetchNotes();
  }, [token, navigate]);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📘 Blue Economy Learning Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard key={note._id} title={note.title} content={note.content} />
          ))
        ) : (
          <p className="text-gray-600">No notes available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Outline;
