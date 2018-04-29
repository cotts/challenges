# Front-End Challenge


## Escopo da atividade

- ## Tecnologias utilizadas no escopo da atividade
  > - Webpack
  > - Eslint
  > - Husky
  > - SASS
  > - EditorConfig
  > - NPM Scripts


- ## Funcionalidades
  > - Site Responsivo
  > - JSON sendo consumido no campo de encurtar link, Top 5 e contagem total de hits
  > - Interação realizada conforme solicitado
  > - Implementação realizada sem a necessidade de nenhum Framework Javascript
  > - Javascript e CSS com sourcemaps

#
## Requisitos

- NPM
- SASS

## Passos para build do projeto

1- Clonar repositório e acessar diretório do projeto

2- Instalar dependências
```
$ npm install
```

3- Executar o build do projeto
```
$ npm run build
```

4- Para executar o projeto em modo de desenvolvimento, utilize o comando
```
$ npm run server
```

#

## Estrutura do projeto

- ### Ambiente de Desenvolvimento
```
.
├── /Project/                         # Pasta principal do projeto
│       ├── /src                      # Códigos-fonte do projeto
│       |     ├── /assets             # Assets utilizados
│       |     |      ├── /data        # urls.json
│       |     |      └── /img         # Imagens e vetores utilizados
│       |     ├── /module             # Módulo criado com as principais funcionalidades
│       |     ├── /sass               # Códigos SASS utilizados
│       |     ├── app.js              # Código principal utilizado
│       |     └── index.html          # Arquivo HTML principal
|       └── readme.md                 # Descrição do projeto
│── .editorconfig                     # Configurações padrão do projeto
│── .eslintrc.json                    # Configurações do ESLint
│── .gitignore                        # Gitignore
│── package.json                      # Pacotes utilizados e NPM Scripts
└── webpack.config.js                 # Configurações do Ambiente de desenvolvimento
```

- ### Estrutura do Build do projeto
```
.
└── /Project/                         # Pasta principal do projeto
        └── /dist                     # Códigos transpilados, minificados e reorganizados
              ├── /assets             # Recursos utilizados no Código
              |       ├── /css        # CSS minificado, Sourcemap
              |       ├── /data       # urls.json
              |       ├── /img        # Imagens e vetores utilizados
              |       └── /js         # Javascript minificado, Sourcemap
              └── index.html          # Arquivo HTML principal
```

#
