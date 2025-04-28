# MusicLyrics

Este é um projeto full-stack para gerenciamento de letras de músicas, desenvolvido com React no frontend e Node.js/Express no backend.

## 🚀 Tecnologias Utilizadas

### Frontend
- React 19
- React Router DOM
- Axios
- React Testing Library

### Backend
- Node.js
- Express
- MySQL
- CORS

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- Node.js (versão 14 ou superior)
- MySQL
- Git

## 🔧 Instalação e Configuração

### Backend

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados MySQL:
- Crie um banco de dados chamado `musiclyrics`
- Configure as credenciais do banco de dados no arquivo de configuração

4. Inicie o servidor backend:
```bash
npm start
```

O servidor backend estará rodando em `http://localhost:8800`

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontent
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

O frontend estará disponível em `http://localhost:3000`

## 🛠️ Scripts Disponíveis

### Backend
- `npm start`: Inicia o servidor em modo de desenvolvimento com nodemon

### Frontend
- `npm start`: Inicia o servidor de desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Cria a versão de produção
- `npm run eject`: Ejecta as configurações do Create React App

## 📝 Estrutura do Projeto

```
MusicLyrics/
├── backend/           # Servidor Node.js/Express
├── frontent/          # Aplicação React
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
