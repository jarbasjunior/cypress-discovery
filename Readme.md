# Testes UI com Cypress

Projeto de testes de UI na aplicação https://buger-eats-qa.vercel.app do curso [Cypress Discovery](https://app.qaninja.com.br/area/produto/item/148694), com integração dos testes no Github Actions e realtórios exibidos no https://dashboard.cypress.io instrutor [Fernando Papito](https://www.linkedin.com/in/papitoio).

---

## Índice: 📋
- [Requisitos](#requisitos)

  - [Node.js e NPM](#nodejs-e-npm)

- [Configuração do ambiente](#ambiente)

- [Execução dos testes](#testes)

- [Workflow Utilizado](#workflow)

- [Pacotes utilizados](#pacotes-utilizados)

  - [Cypress](#cypress)
  - [Cypress File Upload](#cypress-file-upload)
  - [Faker](#faker)
  - [Gerador Validador CPF](#gerador-validador-cpf)
  - [eslint](#eslint)
  - [Eslint plugin](#eslint-plugin)
  - [Husky](#husky)

---

## <a id="requisitos"/> Requisitos: ❗

* <a id="nodejs-e-npm"/> [Node.js e NPM](https://nodejs.org/en/download) - Node.js como ambiente de execução para criar e executar aplicações em Javascript. E o NPM para: instalação de pacotes, gerenciamento de versões e dependências.

## <a id="ambiente"/> Configuração do ambiente: 🛠️ </a>

* Na pasta raiz do projeto, execute o comando `npm install`, para instalar todas as dependências do projeto.

## <a id="testes"/> Execução dos testes: 🚀 </a>

* Na pasta raiz do projeto, execute o comando `npm test`, para executar toda a suíte de testes do projeto.

* Dentro do projeto acesse: `cypress > videos` para visualizar as evidências das execuções dos testes em vídeos.

---
## <a id="pacotes-utilizados"/> Pacotes utilizados: 📦 📚 </a>

* <a id="cypress"/> [Cypress](https://www.cypress.io) - Como ferramenta de teste de front-end web.

  * ### Instalação do Cypress ⚙️

    - Execute o comando `npm install cypress --save-dev` para instalar as dependências do **Cypress** na versão mais recente.

* <a id="cypress-file-upload"/> [Cypress File Upload](https://www.npmjs.com/package/cypress-file-upload) - Como biblioteca para teste de uploads de arquivos com Cypress.

  * ### Instalação do Cypress File Upload ⚙️

    - Execute o comando `npm i cypress-file-upload --save-dev` para instalar as dependências do **Cypress File Upload** na versão mais recente.

* <a id="faker"/> [Faker](https://www.npmjs.com/package/faker) - Como biblioteca para geração de dados fictícios.

  * ### Instalação do Faker ⚙️

    - Execute o comando `npm i faker@5.5.3 --save-dev` para instalar as dependências do **Faker** sem atualização automática no futuro.

* <a id="gerador-validador-cpf"/> [Gerador Validador CPF](https://www.npmjs.com/package/faker) - Como biblioteca para geração de dados fictícios.

  * ### Instalação do Gerador Validador CPF ⚙️

    - Execute o comando `npm i gerador-validador-cpf@5.0.2 --save-dev` para instalar as dependências do **Gerador Validador CPF** sem atualização automática no futuro.

  * ### Instalação eslint ⚙️

    - Na pasta raiz do projeto **seubarriga**, execute o comando abaixo para instalar o eslint como uma dependência de desenvolvimento do projeto.
      ```
      npm i -D eslint
      ```
    - Na pasta raiz do projeto **seubarriga**, execute o comando `node_modules/.bin/eslint --init` abaixo para configurar o eslint, em seguida responda as seguintes perguntas abaixo, conforme respostas exibidas:

      | <center>PERGUNTA</center> | RESPOSTA |
      |-----------|:-----------:|
      | <span style="color:magenta">How would you like to use ESLint?</span> | <span style="color:cyan">To check syntax, find problems, and enforce code style</span>  |
      | <span style="color:magenta">What type of modules does your project use?</span> | <span style="color:cyan">CommonJS (require/exports)</span>  |
      | <span style="color:magenta">Which framework does your project use?</span> | <span style="color:cyan">None of these</span>  |
      | <span style="color:magenta">Does your project use TypeScript?</span> | <span style="color:cyan">No</span>  |
      | <span style="color:magenta">Where does your code run?</span> | <span style="color:cyan">Node (press `<i>` to invert selection)</span>  |
      | <span style="color:magenta">How would you like to define a style for your project?</span> | <span style="color:cyan">Use a popular style guide</span>  |
      | <span style="color:magenta">Which style guide do you want to follow?</span> | <span style="color:cyan">Airbnb: http://github.com/airbnb/javascript</span>  |
      | <span style="color:magenta">What format do you want your config file to be in?</span> | <span style="color:cyan">JSON</span>  |
      | <span style="color:magenta">Would you like to install them now with npm?</span> | <span style="color:cyan">Yes</span>  |

    - Abra o arquivo `.eslintrc.json` e adicione dentro da chave `rules` a outra chave `"no-console": "off"`, para que o lint não reclame do comando `console.log();`, pois durante o desenvolvimento ele poderá ser utilizado com frequencia.

    - Por fim, no arquivo `package.json`, adicione na chave `scripts`, o novo script: `"lint": "eslint test/** src/** --fix"`. Desta forma, quando for executado na raiz do projeto o comando `npm run lint`, serão corrigidas as infrações que o eslint considera como autocorrigível de acordo com o *guide* Airbnb que foi configurado anteriomente.

* <a id="eslint-plugin"/> [Eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Plugin do eslint para o VSCode.


* <a id="husky"/> [Husky](https://www.npmjs.com/package/husky) - Para realização de tarefas antes do commit, por exemplo: varredura do lint e execução dos testes.

  * ### Instalação do Husky ⚙️

    - Execute o comando `npm i husky@7.0.4 --save-dev` para instalar as dependências do **Husky** no ambiente de desenvolvimento, na versão 7.0.4 sem atualização automática no futuro.

    - Agora, execute os comandos abaixo os quais irão realizar as seguintes tarefas:
      - Criar o script `prepare` no arquivo `package.json`
      - Exeutar o script `prepare` para ativar o *hook* no *git*
      - Criar o arquivo `pre-commit`, no qual serão gravadas pelo **Husky** as tarefas a serem realizadas antes do *commit*.
        ```
        npm set-script prepare "husky install" &&
        npm run prepare &&
        npx husky add .husky/pre-commit "npm run lint-check" &&
        git add .husky/pre-commit
        ```
---

## <a id="workflow"/> Workflow utilizado: 🤖 ▶️ ⚙️</a>
* <a id="github-actions"/> [Github Actions](https://github.com/features/actions) - Como ferramenta para automação de *workflow* após atualização dos testes para o repositório no Github. Abaixo estão listados cada propriedade utilizada no arquivo de *workflow*. Para mais detalhes sobre cada uma delas consulte a documentação oficial do Github [aqui](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#understanding-the-workflow-file).

  * `name` (opcional) - Nome atribuído ao *workflow* que será exibido no guia **Actions** do repositório do Github.
  
  * `on` - Especifica a *trigger* para o *workflow*. No nosso exemplo utilizaremos o `push`, ou seja, a cada alteração no repositório ou *pull request*, o *workflow* será acionado.
  
  * `jobs` - serve para agrupar todos os trabalhos que serão executados no *workflow*, neste projeto será atribuído o valor `ui-chrome-tests`.

  * `runs-on` - define a máquina virtual que será hospedada no Github para execução do *workflow*, no nosso exemplo utilizadoremos a `ubuntu-latest`.

  * `container` - onde serão executadas todas as etapas do job, no nosso exemplo será atribuído o valor `cypress/browsers:node14.17.0-chrome88-ff89`, o qual contém o Node na versão 14.17 e o chrome na versão 88. **OBS.** Caso não seja informado, as etapas serão executadas diretamente no host definido em `runs-on`.

  * `strategy.fail-fast` - cancela todos os *jobs* caso um deles falhe. No nosso exemplo atribuiremos o valor `false`

  * `steps` - agrupa todas as etapas executadas no *job*
    * `steps.name` - propriedade para nomear a etapa
    * `steps.uses` - *keyword* que especifica qual *action* e sua versão  será realizada em um *step*
    * `steps.with` - *keyword* que especifica quais propriedades serão utilizadas juntamente com uma *action* (dentro de `steps.uses`). Neste projeto serão utilizadas:
      * `install-command`: propriedade utilizada para instalar as dependências do projeto, no exemplo utilizaremos: `yarn install`.
      * `wait-on`: propriedade para definir uma URL que deve ser aguardada, no nosso caso será definifida pela variável de ambiente **BASE_URL** ${{ secrets.BASE_URL }}.
      * `wait-on-timeout`: propriedade para definir o tempo máximo de espera em segundos, da URL definida em `wait-on`, no nosso exemplo será **120**.
      * `browser`: tipo do navegador utilizados nos testes de UI, utilizaremos o `chrome`.
      * `record`: para habilitar a gravação da execução, definido como `true`
      * `group`: para agrupar as execuções de testes, no nosso exemplo será `'UI - Chrome'`
      * `spec`: cypress/integration/*
    * `env` - permite a utilização de uma variável de acordo com o ambiente definido no *workflow*
      * `CYPRESS_RECORD_KEY` - proprieda que guarda o valor do id do projeto criado no cypress.io, no nosso exemplo utilizaremos `${{ secrets.CYPRESS_RECORD_KEY }}`
      * `GITHUB_TOKEN` - propriedade que guarda o token de autenticação do usuário no Github, no nosso exemplo definido como `${{ secrets.GITHUB_TOKEN }}`