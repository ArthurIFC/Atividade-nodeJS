Trabalho Realizado por Arthur França e Philipp Wolfrik Krieser
# Atividade-nodeJS
- OBS: O coomit ficou salvo com o nome Vinícius, provavelmente um dos alunos que utiliza a mesma máquina e deixou salvo o seu email no github, tentamos tirá-lo o mesmo, mas não é possível. Então seguimos a orientação do professor de deixar assim mesmo, para não ter dois trabalhos com o mesmo conteúdo e ficar precisando explicar o ocorrido toda hora, facilitando para ambos os lados.
- Para executar o programa insere o "cd" pra definir o diretório do trabalho atual ou alterar o diretório atual, que é o "Atividade\Atividade-nodeJS".
- Pra fazer o trabalho utilizamos como base as outras atividades que fizemos em sala de aula e modificamos algumas partes pra se atribuir ao nosso trabalho.

      BANCO DE DADOS
- O nosso trabalho consiste em jogo que possui varios jogadores e varios jogadores poderam jogar um jogo.
- Como falado anteriormente o nosso trabalho possui "Jogador" e "Jogo" e em ambos possui os atributos:
- Jogo: Id, Nome e nele tem os atributos do codigo que fizemos, e no final do codigo exportamos ele para os outros módulos; 
- Jogador: Id, Nome, Idade e uma chave estrangeira com o "Jogo" em que varios jogadores podem jogar um jogo e consequentemente pode ter varios jogadores.
- E logo em seguida temos o "Armazenamento" com o objetivo de adicionar as configurações e estabelecer uma conexão com o banco de dados entre o: "Nome do banco de dados", "Nome do usuario", "E senha do banco de dados" e por fim utilizamos um "dialect" pra especificar que o banco de dados é o MySQL.

- No "insomnia" tera as seguintes especificações pedidas no trabalho:

      POST
- Primeiro criamos o JOGADOR
localhost:3002/Jogador/

    {"nome":"Logan","idade":18}

- Depois criamos o JOGO
localhost:3002/Jogo/

    {"Nome":"tomas","JogadorId":2}

- depois utilizamos um get para pegar todos os JOGADORES e JOGOS
  
      GET
- Pegando todos os JOGADORES
  
      localhost:3002/Jogador/
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/c96924b2-86ac-4ab9-89e3-5fb1b5478cef)

- Pegando todos os JOGOS
  
      localhost:3002/Jogo/
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/d07b5281-43b8-434c-8c45-2d82ecbece04)

- logo em seguida fizemos novamente um GET para pegar o ID de ambos

      localhost:3002/Jogo/3      esse vai ser para o jogo
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/d50beb46-5a41-4252-a2f3-c5b5c9f27971)

    localhost:3002/Jogador/2      e esse vai ser para o jogador
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/d2275dd6-324c-46b9-9a10-c4a3b026f082)

- e nesse terceiro get vamos pegar a idade do jogador e do jogo vamos pegar apenas o nome
  
      localhost:3002/Jogador/idade/25    
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/bac7ec8c-1ef3-462f-83b1-479f59a59e3f)

- esse agora é do jogo
  
      localhost:3002/Jogo/nome/Minecraft 
![image](https://github.com/ArthurIFC/Atividade-nodeJS/assets/160235840/e6f6ec1e-5ea3-487e-ac26-dbfa3f43649f)

    PUT 
- Esse put iremos utilizar para atualizar os dados do banco de dados, nele vamos pegar o ID tanto do jogador quanto do jogo

localhost:3002/Jogador/

    {
    “nome”:“Tiago”,
    “idade”:152,
    “JogoId”: 8
    }

localhost:3002/Jogo/2

    {
    “nome”:”GTA”,
    “jogadorId” 2
    }

Delete  
– Para apagar o jogador e jogo
localhost:3002/Jogador/8

localhost:3002/Jogo/8
