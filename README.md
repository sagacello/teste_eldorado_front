# Introdução!

![grab-landing-page](https://j.gifs.com/jYZ8vW.gif)

Desafio:
  - Desenvolva uma aplicação web de gerenciamento de dispositivo simples.
  - Os dispositivos têm (Id, categoria, cor, número). A categoria do dispositivo também deve ser gerenciada pela aplicação e cada categoria tem um (id, nome).
  - Essa API deve permitir:
    * Login e autenticação não são necessários;
    * O aplicativo da web deve ter um menu com duas opções: (Gerenciamento de categoria, Dispositivo de Gestão);
    * Deve ser implementado um CRUD simples com (Creat, Read e Delete) não é necessário o update devido ao tempo;
  - Para o dispositivo:
    * id: (gerado automaticamente);
    * Categoria: um dropdown que deve ter as opções das categorias;
    * Cor: string, com validação de apenas 16 caracteres;
    * partNumber(número): inteiro positivo;
  - Para a categoria:
    * id: gerado automaticamente, inteiro, e autoincrementado;
    * Nome: não deve estar vazio e todas suas categorias não devem ter mais de 128 caracteres;
  - Todos estes campos são obrigatórios.
  - Livre para qualquer layout mais o aplicativo deve listar todos os dispositivos e categorias, e também tem telas ou componentes que permitem ao usuário criar novas categorias e dispositivos ou excluí-los.
  - Testes no back-end não são obrigatorios, porém serão um extra valioso.
  - Deve ser feito o deploy da aplicação completa (AWS, GCP, Heroku ou qualquer outra de sua escolha).
  - Esse desafio tem duração de 4 dias.

## Principais tecnologias que devem ser utilizadas no desenvolvimento 
  * Node.js 
  * Angular
  * Mysql
### Este repositório contém o back-end da aplicação
## Resolução do para o back-end
  * Para a persistência no banco de dados foi utilizado (ORM) sequelize
  * A arquitetura utilziada na aplicação foi a MSC(Models, Service, Controller)
  * Para as validações foi utilizada a biblioteca "joi"
  * Os tests foram feitos utilizando "jest" e "supertest"
 
## Esboço do relacionamneto do banco de dados
  ![Preview](https://github.com/sagacello/teste_eldorado/blob/main/esbo%C3%A7o_eldorado.png)
  
## Para rodar o back-end da aplicação localmente
  * Clone o projeto e instale as dependências
  * Coloque as suas configurações de acesso ao banco de dados no arquivo config.js dentro da src/config ou em um arquivo .env  
  * O banco de dados criado vai receber o nome de devices_management e pode ser colocado no arquivo config como:
    * database: 'devices_management',
  * Foram criados scripts que criam e populam o banco de dados:
    - npm run drop (para dropar o banco);
    - npm run create (para criar as migrations e models);
    - npm run seed (para popular o banco inicialmente).
  * npm start ou npm run debug para rodar em modo de desenvolvimento
  * npm run test para rodar todos os testes, ou individualmente:
    - OBS: Não é necessario rodar os scripts de preenchimento do banco para os testes funcionarem;
    - npm test categories.test.js (para os testes das categorias);
    - npm test devices.test.js (para os testes dos dipositivos).
    
## Resolução do para o front-end
  * Foi feito utilizando React e Context Api;
  * As requisições são feitas com a biblioteca axios;
  * Para customização foi utilizado a biblioteca semantic-ui;
  * A arquitetura principal foi dividida em componentes e páginas, os componentes são chamados e renderizados na página principal que contém a maior parte da lógica da aplicação.

## Para rodar o front end da aplicação localmente 
  * Clone o projeto e instale as dependências;
  * Configure as rotas das requisições dentro da pasta service de acordo com sua porta;
  * Na pasta raiz de o comando:
    - npm start
