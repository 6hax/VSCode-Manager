# VSCode Settings Manager

<div align="center">

![VSCode Manager](https://img.shields.io/badge/VSCode-Settings%20Manager-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)]()
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/6hax/VSCodeManager)

**Gerencie suas configurações do VSCode de forma fácil e intuitiva!**

*Crie, gerencie e aplique diferentes perfis de configuração do Visual Studio Code com uma interface web moderna.*


</div>

---

## ✨ Características

- 🎨 **Interface Moderna**: Interface web responsiva e intuitiva construída com Tailwind CSS
- ⚡ **Aplicação Instantânea**: Aplique configurações do VSCode instantaneamente
- 🔄 **Múltiplos Perfis**: Crie e gerencie diferentes perfis de configuração
- 💾 **Backup Automático**: Salve suas configurações personalizadas
- 🌐 **Multiplataforma**: Funciona no Windows, macOS e Linux
- 🎯 **Fácil de Usar**: Interface simples e direta para gerenciar settings
- 🔧 **Configuração Avançada**: Suporte completo para todas as configurações do VSCode


## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Visual Studio Code instalado

### Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/6hax/VSCodeManager.git 

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

### Instalação com Yarn

```bash
# Clone o repositório
git clone https://github.com/6hax/VSCodeManager.git

# Instale as dependências
yarn install

# Inicie o servidor
yarn start
```

## 💡 Uso

### Iniciando o Servidor

```bash
# Modo produção
npm start

# Modo desenvolvimento (com hot reload)
npm run dev

# Compilar CSS
npm run build:css
```

### Acessando a Interface

1. Abra seu navegador e acesse: `http://localhost:3000`
2. Crie uma nova configuração inserindo:
   - **Nome da Setting**: Um nome descritivo (ex: "JavaScript Dev", "Python Setup")
   - **Conteúdo do JSON**: Cole suas configurações do VSCode em formato JSON

### Gerenciando Configurações

- **Criar**: Preencha o formulário e clique em "Criar Setting"
- **Aplicar**: Clique em "Aplicar" para aplicar a configuração no seu VSCode
- **Remover**: Clique em "Remover" para deletar uma configuração


## 🔧 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/settings` | Lista todas as configurações |
| `POST` | `/api/settings` | Cria uma nova configuração |
| `DELETE` | `/api/settings/:name` | Remove uma configuração |
| `POST` | `/api/settings/apply/:name` | Aplica uma configuração |

### Exemplo de Uso da API

```javascript
// Listar configurações
fetch('/api/settings')
  .then(res => res.json())
  .then(settings => console.log(settings));

// Criar nova configuração
fetch('/api/settings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'My Config',
    config: '{"editor.fontSize": 16}'
  })
});

// Aplicar configuração
fetch('/api/settings/apply/My%20Config', {
  method: 'POST'
});
```


### Configurações do VSCode

O sistema detecta automaticamente o caminho das configurações do VSCode baseado no sistema operacional:

- **Windows**: `%APPDATA%\Code\User\settings.json`
- **macOS**: `~/Library/Application Support/Code/User/settings.json`
- **Linux**: `~/.config/Code/User/settings.json`

## 🤝 Contribuir

Contribuições são sempre bem-vindas! Aqui estão algumas formas de contribuir:

### 🐛 Reportar Bugs

1. Abra uma [issue](https://github.com/6hax/VSCodeManager/issues)
2. Inclua informações detalhadas sobre o problema


### 🔧 Pull Requests

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, JavaScript (ES6+), Tailwind CSS
- **Ferramentas**: Nodemon, Tailwind CLI
- **Sistema**: Cross-platform (Windows, macOS, Linux)

## 👨‍💻 Autor

**hax**
- GitHub: [@6hax](https://github.com/6hax)

