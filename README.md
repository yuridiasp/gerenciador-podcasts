Aqui está o README corrigido de acordo com a estrutura do projeto apresentada na imagem fornecida:

## Gerenciador de Podcasts

### Descrição
O Gerenciador de Podcasts é uma aplicação ao estilo Netflix que permite centralizar diferentes episódios de podcasts separados por categoria. O foco são podcasts feitos em vídeo.

### Domínio
Podcasts feitos em vídeo.

### Features
- Listar os episódios de podcasts em sessões de categorias (saúde, fitness, mentalidade, humor)
- Filtrar episódios por nome de podcast

### Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
gerenciador-podcasts/
├── node_modules/
├── src/
│   ├── controller/
│   │   └── podcasts-controller.ts
│   ├── data/
│   │   └── podcasts.json
│   ├── models/
│   │   ├── podcast-dto-model.ts
│   │   └── podcast-model.ts
│   ├── repositories/
│   │   └── podcasts-repository.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── service/
│   │   ├── filter-episodes-service.ts
│   │   └── list-episodes-service.ts
│   ├── utils/
│   │   ├── content-type.ts
│   │   ├── http-methods.ts
│   │   └── status-code.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .env.example
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Como Funciona

#### Feature: Listar os episódios de podcasts em sessões de categorias
##### Implementação

GET: Retornar lista de episódios

```json
[
    {
        "podcastName": "Flow",
        "episode": "FAUSTO CARVALHO [JORGINHO] - Flow #370",
        "videoId": "i9Y8uIE7HJI",
        "cover": "https://i.ytimg.com/vi/i9Y8uIE7HJI/hqdefault.jpg",
        "link": "https://www.youtube.com/watch?v=i9Y8uIE7HJI",
        "category": ["humor"]
    },
    {
        "podcastName": "Flow",
        "episode": "JORLAN + RAFAEL BRANDÃO - Flow #373",
        "videoId": "1h4EJuSuWyU",
        "cover": "https://i.ytimg.com/vi/1h4EJuSuWyU/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=1h4EJuSuWyU",
        "category": ["saúde", "bodybuilding", "musculação"]
    }
]
```

GET: Retornar lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast

### Como Rodar o Projeto

#### Pré-requisitos
- Node.js instalado
- npm ou yarn instalado

#### Passos

1. Clonar o repositório:
    ```sh
    git clone https://github.com/yuridiasp/gerenciador-podcasts.git
    cd gerenciador-podcasts
    ```

2. Instalar as dependências:
    ```sh
    npm install
    ```

3. Configurar variáveis de ambiente no arquivo `.env`:
    ```env
    PORT=3333
    ```

4. Rodar o servidor:
    ```sh
    npm start
    ```

5. O servidor estará disponível em `http://localhost:3333`.

### Licença
Este projeto é licenciado sob a licença [MIT](LICENSE).

### Desenvolvedor

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbsp<a style="color: white;" href="https://github.com/yuridiasp">Yuri Dias</a><br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)