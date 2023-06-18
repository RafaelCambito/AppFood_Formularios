// Função para permitir carregar os dados de categoria
function loadCategory() {
    fetch("http://localhost:4000/categories")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Não foi possível carregar os dados.");
        }
      })
      .then(function(categories) {
        var categorySelect = document.getElementById("category");
        
        //Troca o conteúdo do elemento category por uma string vazia, deixando limpo o campo
        categorySelect.innerHTML = "";
  
        // percorre o array para exibir novas opções em category com console log caso ocorra erro
        categories.forEach(function(category) {
          var option = document.createElement("option");
          option.value = category._id;
          option.textContent = category.name;
          categorySelect.appendChild(option);
        });
      })
      .catch(function(error) {
        console.log(error);
        alert(`Não foi possível carregar os dados. ${error}`);
      });
  }
  

  // Busca os dados do elemento via ID (informados no formulário com evento de submit para o banco de dados Mongo)
  document.getElementById("Form-CadProduto").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("image", document.getElementById("image").files[0]);
    formData.append("price", document.getElementById("price").value);
    formData.append("category", document.getElementById("category").value);



    // request com fetch para a rota products com o metodo POST e alerta para sucesso ou erro
    fetch("http://localhost:4000/products", {
      method: "POST",
      body: formData
    })
      .then(function(response) {
        if (response.ok) {
          alert("Produto Cadastrado!");
          document.getElementById("Form-CadProduto").reset();
        } else {
          throw new Error("Ocorreu um erro ao realizar o cadastro");
        }
      })
      .catch(function(error) {
        console.log(error);
        alert("Solicitação não realizada");
      });
  });
  
  
  // Chamada para carregar a caregoria
  loadCategory();
  