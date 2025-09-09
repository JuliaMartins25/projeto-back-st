# 👾 Stranger Things API

API inspirada na série **Stranger Things**, construída com **Node.js, Express e Prisma**.  
Permite gerenciar **personagens** e **easter eggs**, oferecendo endpoints para listar, visualizar, criar, atualizar e deletar registros.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite / PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/) (dev)

---

## 📂 Estrutura do Projeto

```
src/
├── controllers
├── models
├── routes
├── prisma
└── index.js 
```

---

## ⚙️ Instalação e Execução

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/stranger-things-api.git
   cd stranger-things-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados no arquivo `.env`:**
   ```
   PORT=5000
   DATABASE_URL="file:./dev.db"   # Para SQLite
   ```

4. **Execute as migrations do Prisma:**
   ```bash
   npx prisma migrate dev
   ```

5. **Rode o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 📌 Endpoints Principais

### 🎭 Personagens

| Método | Rota                | Descrição                    |
|--------|---------------------|------------------------------|
| GET    | /characters         | Lista todos os personagens   |
| GET    | /characters/:id     | Detalhes de um personagem    |
| POST   | /characters         | Cria um novo personagem      |
| PUT    | /characters/:id     | Atualiza um personagem       |
| DELETE | /characters/:id     | Remove um personagem         |

**Exemplo de body (POST/PUT):**
```json
{
  "name": "Eleven",
  "description": "Menina com poderes telecinéticos (descrição mais completa)",
  "age": 14,
  "firstEp": "S01E01",
  "alive": true
}
```

---

### 🕵️ Easter Eggs

| Método | Rota               | Descrição                   |
|--------|--------------------|-----------------------------|
| GET    | /easteregg         | Lista todos os mistérios    |
| GET    | /easteregg/:id     | Detalhes de um mistério     |
| POST   | /easteregg         | Cria um novo mistério       |
| PUT    | /easteregg/:id     | Atualiza um mistério        |
| DELETE | /easteregg/:id     | Remove um mistério          |

**Exemplo de body (POST/PUT):**
```json
{
  "title": "O Mundo Invertido",
  "theories": "Conexão com dimensões paralelas",
  "facts": "Aparece desde a primeira temporada",
  "secrets": "Ligado aos experimentos do laboratório Hawkins"