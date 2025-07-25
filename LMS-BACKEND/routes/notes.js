
// routes/notes.js

import express from 'express';
import Note from '../models/Note.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// GET all notes - for logged-in users (teachers)
router.get('/', verifyToken, async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
