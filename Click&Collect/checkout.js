const retirar = document.getElementById("retirar");
const entrega = document.getElementById("entrega");
const info = document.getElementById("info");

retirar.addEventListener("click",() => {

    retirar.classList.add("ativa");
    entrega.classList.remove("ativa");

    info.innerHTML = `
    <section>
        <div class="opcao2">
            <form>
                <h2>Retirar na loja</h2>
                <label for="cep">Digite seu CEP:</label>
                <input type="text" id="cep" maxlength="8" placeholder="Ex.: 92000-000">
                <button type="button" id="buscar">Buscar</button>
            </form>
        </div>
    </section>
    `;

const cep = document.getElementById("cep");
cep.addEventListener("input", () => {
    cep.value = cep.value.replace(/\D/g, '');
});
function validarCEP(cep){
    return /^[0-9]{8}$/.test(cep);
}


async function buscarCEP(){
    const cep = document.getElementById("cep").value;
    if(!validarCEP(cep)){
        alert("CEP inválido.");
        return;
    }
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    const lojas = {
        "Canoas":[
            "Canoas, Centro, Rua 15 de Janeiro, 222",
            "Canoas, Mathias Velho, Rua Florianópolis, 333",
            "Canoas, Nirerói, Santa Cruz, 143"
        ],
        "Porto Alegre":[
            "Porto Alegre, Centro Hitórico, Av. Borges de Medeiros, 1234",
            "Porto Alegre, Menino Deus, Rua Botafogo, 432",
            "Porto Alegre, Sarandi, 21 de Abril, 321"
        ],
        "Gravataí":[
            "Gravataí, Centro, Av. José Loureiro da Silva, 456",
            "Gravataí, Castelo Branco, Rua Ciprestes, 789",
            "Gravataí, Bernabé, Rua 20 de Setembro, 4356"
        ],
        "São Leopoldo":[
            "São Leopoldo, Feitoria, Av. Integração, 879",
            "São Leopoldo, Centro, Rua Conceição, 324",
            "São Leopoldo, Vicentina, Rua Arno Schuch, 1234"
        ],
        "Nono Hamburgo":[
            "Novo Hamburgo, Canudos, Rua Ícaro, 567",
            "Novo Hamburgo, Estância Velha, Av. Brasil, 900",
            "Novo Hamburgo, Boa Saúde, Rua Fredolino de Souza Soares, 3214"
        ],
        "Nova Santa Rita":[
            "Nova Santa Rita, Berto Círio, Av. Getúlio Vargas, 2345",
            "Nova Santa Rita, Califórnia, Rua Primavera, 890"
        ]
    };
    const cidade = dados.localidade;
    const resultado = document.getElementById("resultado");
    if(lojas[cidade]){
// esse info.innerHTML alem de mostrar as lojas tambem é responsavel por dar um reset quando a outra opção de entrega é escolhida
        info.innerHTML += `
            <h3 class= "center">lojas disponíveis:</h3>
            <ul class="ulp">
                ${lojas[cidade]
                    .map(loja => `<li class= "opcao3">${loja}</li>`)
                    .join("")}
            </ul>
        `;
    }
}
document
    .getElementById("buscar")
    .addEventListener("click", buscarCEP);

});

entrega.addEventListener("click",() => {
    entrega.classList.add("ativa");
    retirar.classList.remove("ativa");

    info.innerHTML = `
    <form class="opcao2">
        <h2>Entrega no local</h2>
        <label for="endereco">Digite o endereço de entrega:</label>
        <input type="text" id="endereco" name="endereco" placeholder="Ex.: Rua sete, 123"> 
    </form>
    `;
});




