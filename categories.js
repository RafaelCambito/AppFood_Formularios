// Função para permitir carregar os dados da categoria para envio com um preventdefault para evitar o envio do formulário
document.getElementById("categoryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
    // variaveis com get para receber os elementos name e icon pegando pelo ID
    var name = document.getElementById("name").value;
    var icon = document.getElementById("icon").value;
  
    // Criação de um json para os elementos anteriomente recebidos
    var categoryData = {
      name: name,
      icon: icon,
      id: ""
    };
  
    //request com fetch para a rota categories com o metodo POST e alerta para sucesso ou erro
    fetch("http://localhost:4000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(categoryData)
    })
    .then(function(response) {
      if (response.ok) {
        alert("Categoria Cadastrada!");
        document.getElementById("categoryForm").reset();
        console.log(categoryData);
      } else {
        alert("Ocorreu um erro ao realizar o cadastro");
      }
    })
    .catch(function(error) {
      alert(`Solicitação não realizada ${error}`);
      console.log(error);
    });
  });
  