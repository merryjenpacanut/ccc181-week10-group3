require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

if (!JWT_SECRET) {
  console.error('JWT_SECRET is missing. Copy .env.example to .env first.');
  process.exit(1);
}

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

// In-memory demo users list
const users = [
  {
    id: 1,
    name: 'Demo Student',
    email: 'student@campusconnect.test',
    passwordHash: bcrypt.hashSync('Campus26', 10),
  },
];

// GET /api/v1/health
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
