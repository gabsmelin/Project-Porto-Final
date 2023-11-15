Olá professor!

Integrantes: Tem uma página com o nom e RMs de todos os integrantes do grupo.

Não usamos python em nossa aplicação, portando não foi usando no front-end. Ultilizamos a API em Java, segue os URLs:
-Chamado:
-http://localhost:8080/Solutech/api/chamado
-//GET http://localhost:8080/Solutech/api/chamado (Listar todos os produtos)
-//GET http://localhost:8080/Solutech/api/chamado/1 (Pesquisar pelo Id)
-//POST http://localhost:8080/Solutech/api/chamado/ (Cadastrar um produto)
-//PUT http://localhost:8080/Solutech/api/chamado/1 (Atualizar um produto)
-//DELETE http://localhost:8080/Solutech/api/chamado/1 (Apagar um produto)
-Contato Segurado:
-http://localhost:8080/Solutech/api/contatoSegurado
-GET http://localhost:8080/Solutech/api/contatoSegurado/query?nome=aaa(Pesquisar por nome)
-GET http://localhost:8080/Solutech/api/contatoSegurado/ (Listar todos os produtos)
-GET http://localhost:8080/Solutech/api/contatoSegurado/1 (Pesquisar pelo Id)
-POST http://localhost:8080/Solutech/api/contatoSegurado/ (Cadastrar um produto)
-PUT http://localhost:8080/Solutech/api/contatoSegurado/1 (Atualizar um produto)
-DELETE http://localhost:8080/Solutech/api/contatoSegurado/1 (Apagar um produto)
-Endereco Chamado:
-http://localhost:8080/Solutech/api/enderecoChamado
-GET http://localhost:8080/Solutech/api/enderecoChamado/query?nome=aaa(Pesquisar por nome)
-GET http://localhost:8080/Solutech/api/enderecoChamado (Listar todos os produtos)
-GET http://localhost:8080/Solutech/api/enderecoChamado/1 (Pesquisar pelo Id)
-POST http://localhost:8080/Solutech/api/enderecoChamado/ (Cadastrar um produto)
-PUT http://localhost:8080/Solutech/api/enderecoChamado/1 (Atualizar um produto)
-DELETE http://localhost:8080/Solutech/api/enderecoChamado/1 (Apagar um produto)
-Endereço Segurado:
-http://localhost:8080/Solutech/api/enderecoSegurado
-GET http://localhost:8080/Solutech/api/enderecoSegurado/query?nome=aaa(Pesquisar por nome)
-GET http://localhost:8080/Solutech/api/enderecoSegurado (Listar todos os produtos)
-GET http://localhost:8080/Solutech/api/enderecoSegurado/1 (Pesquisar pelo Id)
-POST http://localhost:8080/Solutech/api/enderecoSegurado/ (Cadastrar um produto)
-PUT http://localhost:8080/Solutech/api/enderecoSegurado/1 (Atualizar um produto)
-DELETE http://localhost:8080/Solutech/api/enderecoSegurado/1 (Apagar um produto)
-Segurado:
http://localhost:8080/Solutech/api/segurado
-GET //http://localhost:8080/Solutech/api/segurado/query?nome=aaa(Pesquisar por nome)
-GET //http://localhost:8080/Solutech/api/segurado (Listar todos os produtos)
-GET //http://localhost:8080/Solutech/api/segurado/1 (Pesquisar pelo Id)
-POST //http://localhost:8080/Solutech/api/segurado/ (Cadastrar um produto)
-PUT //http://localhost:8080/Solutech/api/segurado/1 (Atualizar um produto)
-DELETE //http://localhost:8080/Solutech/api/segurado/1 (Apagar um produto)
-Veiculo:
-//http://localhost:8080/Solutech/api/veiculo
GET http://localhost:8080/Solutech/api/veiculo/query?nome=aaa(Pesquisar por nome)
GET http://localhost:8080/Solutech/api/veiculo (Listar todos os produtos)
GET http://localhost:8080/Solutech/api/veiculo/1 (Pesquisar pelo Id)
POST http://localhost:8080/Solutech/api/veiculo/ (Cadastrar um produto)
PUT http://localhost:8080/Solutech/api/veiculo/1 (Atualizar um produto)
DELETE http://localhost:8080/Solutech/api/veiculo/1 (Apagar um produto)

Observação: Para testar a API, é preciso rodar em local host, assim como o projeto Web.

Nossa ideia foi trabalhar para resolver o problema atráves do chatBoot, por isso não tinhamos muita ideia de como desenvolver o front-end, com isso, não temos tantas funcionalidades mas consumimos a API, fazendo todos os métodos(POST, DELETE, PUT E GET). Temos todos os roteamentos de telas mas não usamos todas as tabelas existentens em nosso banco, pois não achamos necessário.
