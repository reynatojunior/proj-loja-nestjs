# 🛒 Loja - Gestão de Produtos

Bem-vindo ao **Loja**, um sistema completo para gestão de produtos, desenvolvido com [NestJS](https://nestjs.com/) no backend e um frontend simples em HTML, CSS e JavaScript. Este projeto é ideal para quem deseja aprender sobre APIs REST, TypeORM, integração com MySQL e boas práticas de desenvolvimento com TypeScript.

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
  
  
</p>

---

## 🚀 Funcionalidades

- Cadastro, edição, listagem e exclusão de produtos
- Integração com banco de dados MySQL usando TypeORM
- Validação de dados com class-validator
- Frontend responsivo e intuitivo
- API RESTful pronta para integração

---

## 📦 Estrutura do Projeto

```
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── loja/
│       ├── dto/
│       ├── entities/
│       ├── loja.controller.ts
│       ├── loja.service.ts
│       └── loja.module.ts
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── test/
├── package.json
└── README.md
```

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/loja.git
cd loja
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

- Certifique-se de ter o MySQL rodando localmente.
- Crie o banco de dados `loja` e ajuste o usuário/senha em [`src/app.module.ts`](src/app.module.ts).

### 4. Execute o backend

```bash
npm run start:dev
```

### 5. Execute o frontend

Abra o arquivo [`frontend/index.html`](frontend/index.html) em seu navegador.

---

## 🧪 Testes

Execute os testes unitários e de integração:

```bash
npm run test
npm run test:e2e
```

---

## 📚 Exemplos de uso da API

Veja exemplos de requisições em [`src/loja/loja.http`](src/loja/loja.http):

- Listar produtos: `GET /loja`
- Buscar produto: `GET /loja/:id`
- Criar produto: `POST /loja`
- Atualizar produto: `PATCH /loja/:id`
- Remover produto: `DELETE /loja/:id`

---

## 💡 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Jest](https://jestjs.io/)

---

## 👨‍💻 Autor

Feito por [Reynato Junior](https://github.com/reynatojunior)

---

## 📝 Licença

Este projeto está sob licença UNLICENSED. Sinta-se livre para estudar e adaptar!

---

<p align="center">
  <b>⭐️ Dê uma estrela se gostou do projeto!</b>
</p>
