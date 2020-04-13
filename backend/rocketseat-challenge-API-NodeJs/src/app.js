const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { name, title, url, techs, likes } = req.body;
  const totalLikes = likes? likes :0;

  const repository = {
    id: uuid(),
    name,
    title, 
    url, 
    techs, 
    likes: totalLikes
  }

  repositories.push(repository);
  return res.json(repository);
});

app.put("/repositories/:id", (req, res) => {
  const { id } = req.params;
  const { name, title, url, techs } = req.body;

  const repositoryIndex = repositories.findIndex( repo => repo.id === id);
  
  if(repositoryIndex < 0) {
    return res.status(400).json({error: 'Repository not found'});
  }

  const likes = repositories[repositoryIndex].likes;
  
  const repository = {
    id,
    name, 
    title, 
    url, 
    techs, 
    likes
  }

  repositories[repositoryIndex] = repository;

  return res.json(repository);
});

app.delete("/repositories/:id", (req, res) => {
  const { id } = req.params;
  const repositoryIndex = repositories.findIndex( repo => repo.id === id);
  
  if(repositoryIndex < 0) {
    return res.status(400).json({error: 'Repository not found'});
  }

  repositories.splice(repositoryIndex);


  return res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  const { id } = req.params;
  const repositoryIndex = repositories.findIndex( repo => repo.id === id);
  
  if(repositoryIndex < 0) {
    return res.status(400).json({error: 'Repository not found'});
  } 

  const repository = repositories[repositoryIndex];
  repository.likes += 1;

  repositories[repositoryIndex] = repository;

  return res.json(repository);
});

module.exports = app;
