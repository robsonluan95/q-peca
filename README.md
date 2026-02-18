# 📦 Q-Peca Backend

O **Q-Peca** é um sistema SaaS de catálogo e compatibilidade de autopeças. Esta API permite gerenciar categorias, peças, veículos e seus respectivos vínculos de compatibilidade, além de rastrear preços em diferentes lojas.

---

## 🛠️ Stack Tecnológica

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework Web:** [Express 5](https://expressjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** SQLite (Desenvolvimento)
- **Ferramentas:** `ts-node-dev` para hot-reload.

---

## 📂 Estrutura do Projeto

```text
back/
├── prisma/             # Configuração do banco e schema
│   └── schema.prisma   # Definição das tabelas
├── src/
│   ├── controllers/    # Lógica de entrada/saída HTTP (Request/Response)
│   ├── services/       # Regras de negócio e integração com Prisma
│   ├── routes.ts       # Definição de todos os endpoints
│   └── server.ts       # Ponto de entrada da aplicação
└── API_README.md       # Documentação técnica das rotas
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Yarn ou NPM

### Instalação
1. Clone o repositório
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Configure o banco de dados:
   ```bash
   npx prisma db push
   ```
4. Inicie o servidor:
   ```bash
   yarn dev
   ```
O servidor estará rodando em `http://localhost:3333`.

---

## 🗄️ Modelo de Dados

- **Users**: Gerenciamento de acesso.
- **Vehicles**: Cadastro de carros (Marca, Modelo, Ano).
- **Categories**: Organização das peças (ex: Motor, Freios).
- **Parts**: Peças com código (Part Number) e descrição.
- **PartApplication**: Tabela de compatibilidade (Peça X serve no Carro Y). Possui fluxo de aprovação (**PENDING**, **APPROVED**, **REJECTED**).
- **Stores**: Lojas parceiras.
- **Prices**: Preços e links de afiliados para cada peça em cada loja.

---

## 🔐 Autenticação e Papéis

O sistema utiliza **JWT (JSON Web Token)** para autenticação.

- **ADMIN**: Pode gerenciar tudo (Categorias, Peças, Veículos, Lojas, Preços) e aprovar aplicações sugeridas.
- **USER**: Pode listar dados aprovados e sugerir novas aplicações de peças.
- **Visitante**: Pode apenas listar dados aprovados (sem necessidade de token).

---

## 📖 Documentação da API

Para detalhes técnicos sobre como realizar chamadas para os endpoints, consulte o arquivo dedicado:

👉 **[Documentação de Rotas (API_README.md)](./API_README.md)**

---


## 📄 Licença

[MIT License](LICENSE)

---
Desenvolvido por **Robson Luan**
