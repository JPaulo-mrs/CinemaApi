# AWS For Software Quality e Test Automation
![banner](/Assets/banner.png)

![Badge](https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen)
## Indice
- [Autor](#autor)
- [Cinema PBs](#cinema-pbs)
  - [Dependências](#dependências)
    - [Visual Studio Code](#vs-code)
    - [Git](#git)
    - [Node.js](#nodejs)
    - [NPM](#npm)
    - [Postman](#postman)
    - [K6](#k6)
  - [Instalação](#instalação)
  - [Endpoints](#endpoints)
  - [Testes no K6](#testes-no-k6)
## Autor

<a href="https://www.linkedin.com/in/joão-moura-7ab135209">
 <img alt="foto do autor" src="/Assets/eu.jpg" width="200px">
 <br />
 <b>João Paulo de Moura</b></a> <a href="https://www.linkedin.com/in/joão-moura-7ab135209/"></a>
 <br />

## Cinema PBs
Para quem está começando em testes de API, a Cinema PBs é uma ferramenta **essencial**. Ela oferece um ambiente **pronto e fácil de usar** para simular um e-commerce real, com endpoints completos e diversos cenários para testar. Com a Cinema PBs, você pode **praticar seus conhecimentos** de testes de API, **explorar diferentes métodos HTTP** e **entender como funcionam as APIs** de forma prática e intuitiva. 

### Dependências
![vscode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)![postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)![K6](https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white)

#### VS Code
Para instalar o Visual Studio Code, siga estes passos:

1. Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/Download).
2. Clique no botão de download para a versão do seu sistema operacional (Windows, macOS ou Linux).
3. Após o download, abra o arquivo de instalação e siga as instruções na tela.
4. Durante a instalação, você pode escolher o local de instalação e se deseja criar um atalho na área de trabalho.
5. Após a instalação, abra o Visual Studio Code e comece a usar!

#### Git
Para instalar o Git, você pode seguir estes passos:

1. Acesse o site oficial do [Git](https://git-scm.com/download) e faça o download do instalador para o seu sistema operacional.
2. Execute o arquivo de instalação e siga as instruções na tela.
3. Durante a instalação, você pode escolher as opções que deseja, como o editor de texto padrão e o local de instalação.
4. Após a instalação, abra o prompt de comando ou terminal e digite `git --version` para verificar se o Git foi instalado corretamente.

#### Node.js
Para instalar o Node.js, você pode seguir estes passos:

1. Acesse o site oficial do [Node.js](https://nodejs.org/pt).
2. Baixe o instalador **.msi** para o seu sistema operacional **Windows**.
3. Execute o instalador e siga as instruções na tela.
4. Durante a instalação, você pode escolher o local de instalação e se deseja adicionar o Node.js ao **PATH** do sistema.
5. Após a instalação, abra o **prompt de comando** ou o **terminal** e digite **node -v** para verificar se a instalação foi bem-sucedida.

#### NPM
O NPM já vem instalado junto com o Node.js, então você não precisa instalá-lo separadamente! 

#### Postman
Para instalar o Postman, você pode seguir estes passos:

1. Acesse o site oficial do [Postman](https://www.postman.com/downloads/) e faça o download da versão para o seu sistema operacional.
2. Execute o arquivo de instalação e siga as instruções na tela.
3. Após a instalação, abra o Postman e faça login ou crie uma conta gratuita.

#### K6
Para instalar o K6, você pode seguir estes passos:

1. Abra o Windows PowerShell.
2. Execute o comando `winget install k6 --source winget`.

### Instalação
Para instalar e configurar a api Cinema PBs, você pode seguir estes passos:
1. Clonando o repositório do Cinema PBs:
- Obtenha o link do repositório: Acesse o repositório do [Cinema PBs](https://github.com/juniorschmitz/nestjs-cinema/tree/main) no GitHub, clique em code e depois em copiar.
![imagem do github do Cinema PBs](/Assets/repositorio.png)
- Clone o repositório: Abra o terminal e navegue até o diretório onde deseja clonar o projeto. Execute o seguinte comando, substituindo <link-do-repositorio> pelo link real do repositório:
~~~bash
git clone <link-do-repositorio>
~~~

2. Instalando as dependências do projeto:
- Navegue até o diretório do projeto: No terminal, use o comando cd para navegar até o diretório do projeto clonado.
- Instale as dependências: Execute o seguinte comando:
~~~bash
npm install
~~~
- Isso irá baixar e instalar todas as dependências do projeto.

3. Iniciando a API localmente:

- Execute a API: Execute o seguinte comando no terminal:
~~~bash
npm run start
~~~
- Isso irá iniciar a API do Cinema PBs localmente.
- Acesse a API: Abra o navegador e acesse o endereço que foi exibido no terminal (provavelmente algo como http://localhost:3000). Você verá a página inicial da API.

4. Importando a documentação do Swagger no Postman:

- Baixe o arquivo swagger.json: Acesse o repositório do Cinema PBs no GitHub e navegue até a pasta docs. Baixe o arquivo swagger.json.
- Instale o Postman: Se você ainda não o fez, baixe e instale o Postman.
- Importe o arquivo swagger.json: Abra o Postman e clique em "Import". Selecione o arquivo swagger.json que você baixou.
- Explore a documentação: As coleções do Swagger serão importadas para o Postman. Você pode explorar a documentação da API e começar a fazer suas requisições.

### Endpoints

### Testes no K6