# Vue_api

    <h1>Vue_api</h1>
    <h3>Descrição do projeto</h3>
    <p>Este projeto se baseia em uma API REST de usuários feita com NodeJs e express que faz conexão com uma página web
        feita em VueJs, com ferramentas como criação, edição, listagem e exclusão de usuários.Além de todas essas
        funcionalidades, foi implementado um sistema de autentificação via token para o acesso da ferramenta.Apenas
        usuários administradores podem acessar o CRUD para realizar as operações com os usuários.Além disso, foi
        implementado um sistema de recuperção de senha que funciona apenas por meio de requisições POST, esta
        funcionalidade não foi implementada no front-end, ficando como desafio futuro.No demais, espero que apreciem o
        projeto e esperem por projetos mais aprofundados e robusto futuramente.</p>
    <p>Atenciosamente, <strong>Eduardo Augusto Oliveira</strong>.</p>
    <h3>Passos para inicialização do projeto</h3>
    <p>Para iniciar o projeto com sucesso, navegue até sua pasta com o seu terminal de preferência e digite os seguintes
        scripts:</p>
    <ul>
        <li>Entre na pasta api_users e digite => npm install</li>
        <li>Volte para a pasta principal do projeto.</li>
        <li>Entre na past users e digite => npm install</li>
    </ul>
    <p>Depois de instaladas, vá até o arquivo apiuserssql.sql e utilize os scripts SQL para criar a base de dados
        corretamente, caso queira criar a partir de um sofware de manipulação de bancos de dados SQL, recomendo o
        HeidiSQL.
    </p>
    <p>A seguir, instruções de como devem ser criadas as tabelas no HeidiSQL:</p>
    <img src="./imgs/img1.jpg" alt="img1">
    <img src="./imgs/img2.jpg" alt="img2">
    <p>Após isso, vá até a pasta /api_users/database e entre no arquivo connection.js e modifique o seguinte script para
        os dados do seu mysql:</p>
    <pre>
        <code>var knex = require('knex')({
            client: 'mysql2',
            connection: {
              host : '127.0.0.1',
              user : '>>usuário aqui <<',
              password : '>>senha aqui<<',
              database : 'api_user'
            }
          });
        </code>
    </pre>
    <p>Depois de todas essas etapas, inicie o servidor da API navegando até a pasta api_users com seu terminal e
        digitando o script >> npm node.js<<,após isso, cadastre um usuário na rota POST localhost:3000/user.</p>
            <p>Após cadastrar, vá até o seu banco de dados e mude o campo role na tabela users para 1, assim você terá
                seu primeiro usuário admin, assim podendo acessar todas as rotas.Os uruários com role == 1 são admins e
                com role == 0 são usuários comuns.</p>
            <h3>Iniciando os servidores</h3>
            <p>Após iniciado o servidor da api conforme explicado acima, navegue até a pasta users na raiz do projeto e
                digite o seguinte script npm run serve<<, assim iniciando todo o projeto. </p>
                    <h3>Descrição das rotas</h3>
                    <h4>Rotas da API:</h4>
                    <h5> GET localhost:3000/</h5>
                    <p>Parâmetros: Nenhum</p>
                    <p>Corpo da requisição: Nenhum</p>
                    <p>Resposta:
                    <pre>
            <code>{
                Api de usuários!
            }</code>
        </pre>
            </p>
            <h5> GET localhost:3000/user</h5>
            <p>Parâmetros: Nenhum</p>
            <p>Corpo da requisição: Nenhum</p>
            <p>Exemplos de resposta:
            <p>Status code: 200</p>
            <pre>
            <code>
                [
                    {
                        "id": 1,
                        "email": "duduaugustooliveira@gmail.br",
                        "role": 1,
                        "name": "Eduardo"
                    }
                ]
            </code>
        </pre>
            <p>Status code: 403</p>
            <pre>
            <code>
                {
                    Você não tem permissão para isso!
                }
            </code>
        </pre>
    </p>
    <p>Status code : 403</p>
    <pre>
        <code>
            {
                Você não está autenticado
            }
        </code>
    </pre>
    <h5> POST localhost:3000/user</h5>
    <p>Parâmetros: Nenhum</p>
    <p>Corpo da requisição:</p>
    <pre>
            <code>
                {
                    "email":"exemplo@exemplo.com"
                    "name":"Fulano"
                    "password":"1234"
                }
            </code>
        </pre>
    </p>
    <p>Exemplo de respostas:</p>
    <p>Status code: 406</p>
    <pre>
        <code>
                {
                    O e-mail já está cadastrado!
                }
        </code>
    </pre>
    <p>Status code: 200</p>
    <pre>
        <code>
                {
                    Tudo ok!
                }
        </code>
    </pre>
    </pre>
    <p>Status code: 403</p>
    <pre>
<code>
                {
                    Você não tem permissão para isso!
                }
</code>
</pre>
    </p>
    <p>Status code : 403</p>
    <pre>
<code>
                {
                    Você não está autenticado
                }
</code>
</pre>
    <h5> PUT localhost:3000/user/:id</h5>
    <p>Parâmetros: id do usuário</p>
    <p>Corpo da requisição:</p>
        <pre>
            <code>
                {
                    "email":"exemplo@exemplo.com",
                    "name":"Fulano",
                    "password":"1234",
                    "role":"0"
                }
            </code>
        </pre>
    <p>Exemplos de respostas:</p>
    <p>Status code : 406</p>
    <pre>
<code>
                {
                    Err ...
                }
</code>
    <p>Status code : 406</p>
    <pre>
<code>
                {
                    Ocorreu um erro no servidor!
                }
</code>
    <p>Status code: 403</p>
    <pre>
<code>
                {
                    Você não tem permissão para isso!
                }
</code>
</pre>
    </p>
    <p>Status code : 403</p>
    <pre>
<code>
                {
                    Você não está autenticado
                }
</code>
</pre>
    <h5> DELETE localhost:3000/user/:id</h5>
    <p>Parâmetros: id do usuário</p>
    <p>Corpo da requisição: Nenhum</p>
    <p>Exemplo de respostas:</p>
    <p>Status code: 200</p>
    <pre>
<code>
                {
                    Tudo ok!
                }
</code>
<p>Status code: 406</p>
    <pre>
<code>
                {
                    Err ...
                }
</code>
    <p>Status code: 403</p>
    <pre>
<code>
                {
                    Você não tem permissão para isso!
                }
</code>
</pre>
    </p>
    <p>Status code : 403</p>
    <pre>
<code>
                {
                    Você não está autenticado
                }
</code>
    <h5> POST localhost:3000/recoverpassword</h5>
    <p>Parâmetros: Nenhum</p>
    <p>Corpo da requisição: 
        <pre>
            <code>
                "email":"exemplo@exemplo.com"
            </code>
        </pre>
    </p>
    <p>Exemplos de respostas:</p>
    <p>Status code: 200</p>
    <pre>
        <code>
                {
                    Exemplo de token:123465689874
                }
        </code>
    </pre>
    <p>Status code: 406</p>
    <pre>
        <code>
                {
                    Err...
                }
        </code>
    </pre>
    <h5> POST localhost:3000/changepassword</h5>
    <p>Parâmetros: Nenhum</p>
    <p>Corpo da requisição: 
        <pre>
            <code>
                "password":"4785",
                "token":"147891482588"
            </code>
        </pre>
    </p>
    <p>Exemplos de respostas:</p>
    <pre>
        <code>
                {
                    Senha alterada!
                }
        </code>
    </pre>
    <p>Status code: 406</p>
    <pre>
        <code>
                {
                    Token errado!
                }
        </code>
    </pre>
    <h5> POST localhost:3000/login</h5>
    <p>Parâmetros: Nenhum</p>
    <p>Corpo da requisição: 
        <pre>
            <code>
                "password":"4785",
                "email":"exemplo@exemplo.com"
            </code>
        </pre>
    </p>
    <p>Exemplos de respostas:</p>
    <p>Status code: 200</p>
    <pre>
        <code>
                {
                    Token : aqui vem o token para autentificação
                }
        </code>
    </pre>
    <p>Status code: 406</p>
    <pre>
        <code>
                {
                    Senha incorreta!
                }
        </code>
    </pre>
    <p>Status code: 406</p>
    <pre>
        <code>
                {
                    Err...
                }
        </code>
    </pre>
    <h3>Site que consone a API</h3>
    <p>Após que iniciar o servidor local da API e executar o npm run serve na pasta users, o terminal fornecera uma url para o acesso do site, onde poderá navergar com seu usuário e realizar as operações com os usuários</p>
    <h3>Contato</h3>
    <p>Para qualquer duvida em relação ao projeto e outros assuntos, entre em contato pelo github ou pelas redes sociais:
        <ul>
            <li><a href="https://www.instagram.com/eduu_augusto/">Instagran</a></li>
            <li><a href="https://www.linkedin.com/in/eduardo-augusto-07/">Linkedin</a></li>
        </ul>
    </p>
