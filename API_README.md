# Documentação da API (Q-Peca)

Este guia contém as informações necessárias para interagir com a API do backend, incluindo rotas, métodos e payloads esperados. Ideal para configurar ferramentas como Insomnia ou Postman.

## 🚀 Configuração
- **Base URL**: `http://localhost:3333`
- **Headers**: `Content-Type: application/json`

---

## 📂 Categorias (Categories)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/category` | Criar categoria | `{ "name": "Freios" }` |
| **GET** | `/categories` | Listar todas | N/A |
| **PUT** | `/category` | Atualizar | `{ "id": "uuid", "name": "Suspensão" }` |
| **DELETE** | `/category` | Deletar | `?id=uuid` ou `{ "id": "uuid" }` |

---

## 🔧 Peças (Parts)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/part` | Criar peça | `{ "name": "Pastilha", "partNumber": "123", "description": "...", "categoryId": "uuid" }` |
| **GET** | `/parts` | Listar peças | `?q=busca` (opcional) |
| **PUT** | `/part` | Atualizar peça | `{ "id": "uuid", "name": "Peça Nova", ... }` |
| **DELETE** | `/part` | Deletar peça | `?id=uuid` |

---

## 🚗 Veículos (Vehicles)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/vehicle` | Criar veículo | `{ "make": "Honda", "model": "Civic", "yearStart": 2010, "yearEnd": 2015 }` |
| **GET** | `/vehicles` | Listar todos | N/A |
| **PUT** | `/vehicle` | Atualizar veículo | `{ "id": "uuid", "make": "...", ... }` |
| **DELETE** | `/vehicle` | Deletar veículo | `?id=uuid` |

---

## 🤝 Compatibilidade (Part Applications)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/part/apply` | Vincular peça/veículo | `{ "partId": "uuid", "vehicleId": "uuid", "notes": "..." }` |
| **GET** | `/part/applications` | Listar vínculos | N/A |
| **PUT** | `/part/apply` | Atualizar vínculo | `{ "id": "uuid", "notes": "Nova obs" }` |
| **DELETE** | `/part/apply` | Deletar vínculo | `?id=uuid` |

---

## 🏪 Lojas (Stores)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/store` | Criar loja | `{ "name": "Loja X", "baseUrl": "..." }` |
| **GET** | `/stores` | Listar todas | N/A |
| **PUT** | `/store` | Atualizar loja | `{ "id": "uuid", "name": "Loja Y" }` |
| **DELETE** | `/store` | Deletar loja | `?id=uuid` |

---

## 💰 Preços (Prices)

| Método | Rota | Descrição | Exemplo de JSON |
| :--- | :--- | :--- | :--- |
| **POST** | `/price` | Cadastrar preço | `{ "value": 150.0, "url": "...", "partId": "uuid", "storeId": "uuid" }` |
| **GET** | `/prices` | Listar preços | N/A |
| **PUT** | `/price` | Atualizar preço | `{ "id": "uuid", "value": 160.0 }` |
| **DELETE** | `/price` | Deletar preço | `?id=uuid` |
