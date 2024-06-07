# Gerenciador de Podcasts


### Descrição

Um app ao estilo Netflix em que permite centralziar diferentes episódios podcasts separados por categoria.


### Domínio

Podcasts feitos em vídeo.


### Features

- Listar os episódios de podcasts em sessões de categorias
    - (saúde, fitness, mentalidade, humor);

- Filtrar episódios por nome de podcast.


### Como


#### Feature:
- Listar os episódios de podcasts em sessões de categorias

##### Como vou implementar
Vou retornar em uma API REST o nome do podcast, titulo do episódio, imagem de capa e o link do episódio no Youtube

````js
{
    podcastName: "Flow",
    episode: "FAUSTO CARVALHO [JORGINHO] - Flow #370",
    videoId: "i9Y8uIE7HJI",
    cover: "https://i.ytimg.com/vi/i9Y8uIE7HJI/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=i9Y8uIE7HJI",
    category: ["humor"]
},
{
    podcastName: "Flow",
    episode: "JORLAN + RAFAEL BRANDÃO - Flow #373",
    videoId: "1h4EJuSuWyU",
    cover: "https://i.ytimg.com/vi/1h4EJuSuWyU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=1h4EJuSuWyU",
    category: ["saúde", "bodybuilding", "musculação"]
}
````