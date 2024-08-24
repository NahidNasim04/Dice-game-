const express = require('express');
const router = express.Router();
const Score = require('../models/score');

router.post('/', async (req, res) => {
  const { name, score } = req.body;
  const newScore = new Score({ name, score });
  await newScore.save();
  res.json(newScore);
});

router.get('/', async (req, res) => {
  const scores = await Score.find().sort({ score: -1 });
  res.json(scores);
});

module.exports = router;
