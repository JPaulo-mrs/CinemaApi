# Análise da api Cinema PBs 
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
    - [Faker](#faker)
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
A API Cinema PBs é voltada para o setor de redes de cinemas, oferecendo uma plataforma completa para armazenar e gerenciar um catálogo de filmes. Com ela, os usuários podem navegar por uma seleção diversificada de títulos, escolher os que mais lhes interessam e adquirir ingressos de forma prática e intuitiva.

### Dependências
![vscode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)![K6](https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white)![Faker.js](https://img.shields.io/badge/Faker.js-Dynamic%20Data-brightgreen)


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

#### Faker
Para instalar o Faker, você pode seguir estes passos:

1. Abra o repositório clonado no Visual Studio.
2. Abra o terminal integrado do Visual Studio Code: Pressione **Ctrl+**.
3. Execute o comando `cd data/dynamic/lib`.
4. Execute o comando `npm install --save-dev @faker-js/faker`.

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

### Endpoints
**Movies:**


* **Endpoint:** `/movies`
* **Métodos:**
    * **POST (Criar filmes):**
        * **Parâmetros:**
            * `title` (string): Titulo do filme.
            * `description` (string): Descrição do filme
            * `launchdate` (string): Dia de lançamento do filme
            * `showtimes` (string): Dias de exibição do filme
        * **Resposta:** Retorna o ID do filme recém-criado.
    * **GET (Listar filmes):**
        * **Parâmetros:**
            * `title` (string): Titulo do filme.
            * `description` (string): Descrição do filme
            * `launchdate` (string): Dia de lançamento do filme
            * `showtimes` (string): Dias de exibição do filme
            * `_id` (int): ID do filme 
        * **Resposta:** Retorna uma lista de filmes com seus IDs e informações relevantes.
    * **GET (Buscar filme por ID):**
        * **Parâmetros:**
            * `_id` (int): ID do filme a ser buscado.
        * **Resposta:** Retorna os dados do filme com o ID especificado.
    * **PUT (Atualizar filme):**
        * **Parâmetros:**
            * `_id` (int): ID do filme.
        * **Resposta:**
            * **Sucesso:** Retorna um código de sucesso (ex: 201 - Filme atualizado com sucesso).
    * **DELETE (Deletar filme):**
        * **Parâmetros:**
            * `_id` (int): ID do filme.
        * **Resposta:**
            * **Sucesso:** Retorna um código de sucesso (ex: 201 - Filme excluído com sucesso).

**Tickets:**

* **Endpoint:** `/tickets`
* **Métodos:**
    * **POST (Criar ticket):**
        * **Parâmetros:**
            * `movieId` (string): ID do filme.
            * `userId` (string): ID do usuário.
            * `seatNumber` (int): Número do assento.
            * `price` (int): Valor do ticket.
            * `showtime` (string): Sessão escolhida.
        * **Resposta:** Retorna o ID do ticket recém-criado.
    * **GET (Listar tickets):**
        * **Parâmetros:**
            * `movieId` (string): ID do filme.
            * `userId` (string): ID do usuário.
            * `seatNumber` (int): Número do assento.
            * `price` (int): Valor do ticket.
            * `showtime` (string): Sessão escolhida.
            * `_id` (int): ID do ticket.
        * **Resposta:** Retorna uma lista de tickets com seus IDs e informações relevantes.
    * **GET (Buscar tickets por ID):**
        * **Parâmetros:**
            * `_id` (int): ID do ticket a ser buscado.
        * **Resposta:** Retorna os dados do ticket com o ID especificado.
    * **PUT (Atualizar ticket):**
        * **Parâmetros:**
            * `_id` (int): ID do ticket.
        * **Resposta:**
            * **Sucesso:** Retorna um código de sucesso (ex: 201 - ticket atualizado com sucesso).
    * **DELETE (Deletar ticket):**
        * **Parâmetros:**
            * `_id` (int): ID do ticekt.
        * **Resposta:**
            * **Sucesso:** Retorna um código de sucesso (ex: 201 - Ticket excluído com sucesso).
### Testes no K6
Para executar os testes no K6 siga os seguintes passos:
1. **Clonando o repositório:**
- Obtenha o link do repositório: Acesse o [repositório](https://gitlab.com/JPaulo-mrs/cinemaAPI) no GitLab, clique em code e depois em copiar no Clone with HTTPS.
- Clone o repositório: Abra o terminal e navegue até o diretório onde deseja clonar o projeto. Execute o seguinte comando, substituindo <link-do-repositorio> pelo link real do repositório:
~~~bash
git clone <link-do-repositorio>
~~~
- Os arquivos dos testes no K6 estão dentro da pasta "CinemaApi/K6".
2. **Execute o arquivo guia**  
- Abra a pasta do K6 e clique no arquivo **Executando testes.bat**.
- Ao ser executado, o arquivo vai abrir uma lista com todas os testes disponíveis. Para executar um teste, basta digitar o número do teste escolhido e apertar enter.

