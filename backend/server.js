require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Task Schema
const taskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task({ name: req.body.name, completed: false });
  await task.save();
  res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
