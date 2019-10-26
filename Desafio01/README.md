# Primeiro desafio do Bootcamp GoStack 9.0

Para executar o projeto execute os comandos:

```sh
$ git clone https://github.com/georgealan/bootcamp-gostack9-desafios.git
$ cd bootcamp-gostack9-desafios
$ yarn
$ yarn dev
```
## Utilize o Insomnia ou Postman

Utilize Insomnia para testar as requisições REST:

```sh
// Lista todos os projetos
GET - http://localhost:3000/projects

// Lista um único projeto
GET - http://localhost:3000/projects/{id}

// Cria novo projeto
POST - http://localhost:3000/projects
JSON: 
{
	"id": "1",
	"title": "Financeiro",
	"tasks": []
}

// Faz update titulo projeto
PUT - http://localhost:3000/projects/{id}
JSON: 
{
	"id": "1",
	"title": "novo_titulo",
	"tasks": []
}

// Deleta um projeto no array
DELETE - http://localhost:3000/projects/{id}

// Adiciona nova tarefa no projeto
POST - http://localhost:3000/projects/{id}/tasks
JSON:
{
	"title": "Nova tarefa"
}
```

