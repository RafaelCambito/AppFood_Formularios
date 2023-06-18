### Atividade Prática do Curso de TADS - IFPR Cascavel - Programação WEB II - 2023</br>

### Atividade proposta:</br>
Criar formulários em HMTL e JS para cadastro de produtos e categorias no projeto em desenvolvimento App Food.</br>

### Considera-se que esse projeto já esta em andamento, então entende-se que o usuário já terá instalado em sua máquina os programas:</br>

Node JS</br>
Yarn</br>
Insomnia</br>
docker</br>

### Como funciona:</br>

Os arquivos do repositório devem estar em uma única pasta</br>
Abrir o pasta do projeto via VSCODE (VSCODE > FILE > OPEN FOLDER)</br>
Abrir terminal via VSCODE e executar os seguintes comandos</br>
	1 - npm install</br>
	2 - npm i -g yarn</br>
	3 - yarn dev</br>
Abrir um segundo terminal via VSCODE para startar o docker:</br>
	1 - docker ps -a</br>
	2 - docker run -p 27017:27017 mongo</br>

OBS: Irá notificar no primeiro terminal a mensagem "Server is runing on http://localhost:3000". Se essa mensagem não aparecer, basta executar novamente no primeiro terminal o comando "yarn dev".</br>

### Cadastros de categoria via Formulário
1 - Com o servidor iniciado, acessar o seguinte link http://127.0.0.1:5500/categories.html; </br>
1.1 - Campo Nome = Digitar o nome da categoria que será cadastrada;
1.2 - Campo Ícone = Informar o ícone que será utilizado para categoria;
1.3 - Clicar em cadastrar.

exemplo icone:
nome = Pizza</br>
ícone":🍕</br>

OBS: O ícone acima utilizado foi copiado do site (https://emojipedia.org). Ao acessar o site basta pesquisar pelo nome do ícone desejado, copiar e colar no espaço destinado ao ícone.

### Cadastros de produto via Formulário
1 - Com o servidor iniciado, acessar o seguinte link  http://127.0.0.1:5500/products.html; </br>
1.1 - Campo Nome = Digitar o nome do produto que será cadastrado;
1.2 - Campo Descrição = Digitar a descrição do produto;
1.3 - Imagem = Selecionar a imagem do produto que deverá estar previamente salva na pasta "uploads" do projeto;
1.4 - Preço = Informar o preço do produto
1.5 - Categoria = Informar a categoria do produto
1.6 - Clicar em cadastrar.
