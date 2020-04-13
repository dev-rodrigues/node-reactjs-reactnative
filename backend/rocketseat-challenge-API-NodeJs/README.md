# gostack-template-conceitos-nodejs

Instalar Dependências:
```
  Execute:
    yarn
```

Executar Aplicação:
```
  Execute:
    yarn dev
```

<h2>Possíveis Endpoints</h2>

Criar um repositório
```
  POST: localhost:9090/repositories
  REQUEST:
  { 
	  "title": "Desafio Node.js", 
	  "url": "http://github.com/...", 
	  "techs": ["Node.js"]
  }
  RESPONSE:
  {
    "id": "0785d201-f2e3-4b00-9ec2-3fa59444f574",
    "title": "Desafio Node.js",
    "url": "http://github.com/...",
    "techs": [
      "Node.js"
    ],
    "likes": 0
  }
```

Listar todos os repositórios
```
  GET: localhost:9090/repositories
  RESPONSE:
  [
    {
      "id": "0785d201-f2e3-4b00-9ec2-3fa59444f574",
      "title": "Desafio Node.js",
      "url": "http://github.com/...",
      "techs": [
        "Node.js"
      ],
      "likes": 0
    }
  ]
```

Editar um repositório
```  
  PUT: localhost:9090/repositories/:id 
  REQUEST:
  { 
	  "title": "Desafio Node.j", 
	  "url": "http://github.com/...", 
	  "techs": ["Node.js", "React"], 
	  "likes": 0 
  }
  RESPONSE:
  {
    "id": "778ee0fb-c493-44bd-9167-6b1d8e1599a0",
    "title": "Desafio Node.j",
    "url": "http://github.com/...",
    "techs": [
      "Node.js",
      "React"
    ],
    "likes": 0
  }
```

Apagar um repositório
```
  DELETE: localhost:9090/repositories/:id
```

Curtir um repositório
```
  POST: localhost:9090/repositories/:id/like
```

Executar os Testes da Aplicação:
```
  Execute:
    yarn test
```
