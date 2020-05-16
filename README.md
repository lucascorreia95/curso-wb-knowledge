# web-knowledge
Projeto final do [curso de web moderno](https://www.udemy.com/course/curso-web/)

### Plataforma de gerenciamento e postagem de artigos

Projeto desenvolvido ao final do curso, onde foi criada uma pequena plataforma para, postar e gerenciar artigos.

No projeto foi desenvolvido duas partes principais:
  - Parte do administrador, onde é possível criar, editar, consultar e excluir os artigos, categorias e usuários da plataforma.
  - Parte do usuário comum, onde é possível buscar, filtrar e vizualizar os artigos publicados.

### Projeto está dividido em duas aplicações:

#### Front-end

Responsável por renderizar a UI do projeto, e também efetuar algumas validações e retornos dos formulários, desenvolvido utilizando [Vue](https://vuejs.org/), [axios](https://github.com/axios/axios), [bootstrap-vue](https://bootstrap-vue.org/), [vue-router](https://router.vuejs.org/), [vuex](https://vuex.vuejs.org/) e mais algumas bibliotecas que ajudaram no processo.

#### Back-end

Responsável pelas regras de negócio, validação das informações, autorização e autenticação dos usuários, conexão com os bancos de dados. Desenvolvido utilizando [NodeJS](https://nodejs.org/en/), [knex](http://knexjs.org/), [passport](http://www.passportjs.org/), [JWT](https://jwt.io/) e mais algumas bibliotecas que ajudaram no processo.

Foi utilizado o banco de dados [PostgreSQL](https://www.postgresql.org/) para persistir as informações dos usuários, artigos e categoias. Também foi utilizado o [MongoDB](https://www.mongodb.com/) para armazenar informações referente ao Dashbord, que é exibido como página inicial do usuário.
