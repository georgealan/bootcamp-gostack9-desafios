/**
 * Inicio do desafio 01: 23/10/2019 - 23:37
 */

const express = require('express');
const server = express();

server.use(express.json());

// Array populado com objeto já criado.
const projects = [{id:"1", title:"projeto financeiro", tasks:[]}];

// Middleware que calcula diferentes funções.
server.use((req, res, next) =>{
    console.count("Número de requisições");
    console.time('Request');
    console.timeEnd('Request');
    next();
});

// Middleware que verifica se um projeto existe.
function checkProjectExist(req, res, next){
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    if (!project) {
        return res.status(400).json({error: 'User ID is not exist'});
    }

    return next();
}

// Lista todos os projetos.
server.get('/projects', (req, res) => {
    return res.json(projects);
});

// Lista um único projeto.
server.get('/projects/:id', checkProjectExist, (req, res) => {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    return res.json(project);
});

// Cria novo projeto.
server.post('/projects', (req,res) => {
    const {id, title} = req.body;

    const project = {
        id,
        title,
        tasks: []
    };

    projects.push(project);
    return res.json(project);
});

// Faz update do titulo do projeto.
server.put('/projects/:id', checkProjectExist, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);
    project.title = title;

    return res.json(project);
});

// Deleta um projeto do array.
server.delete('/projects/:id', checkProjectExist, (req, res) => {
    const { id } = req.params;

    projects.splice(id, 1);

    return res.send();
});

// Adiciona nova tarefa no projeto.
server.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
});


server.listen(3000);