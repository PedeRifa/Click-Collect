const retirar = document.getElementById("retirar");
const entrega = document.getElementById("entrega");
const info = document.getElementById("info");
function gerarCodigo(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let codigo = "";
    for(let i=0; i<6; i++){
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}
const modal = document.getElementById("modelo");
const fechar = document.getElementById("fechar");
    fechar.addEventListener("click",() => {
        modal.style.display = "none"; 
    });
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

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
            {
                nome: "Canoas Centro",
                endereco: "Rua 15 de Janeiro, 222",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "Canoas Mathias Velho",
                endereco: "Rua Florianópolis, 333",
                horario: "Segunda a sexta: 10h às 19h"
            },
            {
                nome: "Canoas Nirerói",
                endereco: "Santa Cruz, 143",
                horario: "Segunda a sexta: 8h às 17h"
            },
        ],
        "Porto Alegre":[
            {
                nome: "Porto Alegre, Centro Hitórico",
                endereco: "Av. Borges de Medeiros, 1234",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "Porto Alegre, Menino Deus",
                endereco: "Rua Botafogo, 432",
                horario: "Segunda a sexta: 10h às 19h"
            },
            {
                nome: "Porto Alegre, Sarandi",
                endereco: "21 de Abril, 321",
                horario: "Segunda a sexta: 8h às 17h"
            }
        ],
        "Gravataí":[
            {
                nome: "Gravataí, Centro",
                endereco: "Av. José Loureiro da Silva, 456",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "Gravataí, Castelo Branco",
                endereco: "Rua Ciprestes, 789",
                horario: "Segunda a sexta: 10h às 19h"
            },
            {
                nome: "Gravataí, Bernabé",
                endereco: "Rua 20 de Setembro, 4356",
                horario: "Segunda a sexta: 8h às 17h"
            }
        ],
        "São Leopoldo":[
            {
                nome: "São Leopoldo, Feitoria",
                endereco: "Av. Integração, 879",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "São Leopoldo, Centro",
                endereco: "Rua Conceição, 324",
                horario: "Segunda a sexta: 10h às 19h"
            },
            {
                nome: "São Leopoldo, Vicentina",
                endereco: "Rua Arno Schuch, 1234",
                horario: "Segunda a sexta: 8h às 17h"
            }
        ],
        "Novo Hamburgo":[
            {
                nome: "Novo Hamburgo, Canudos",
                endereco: "Rua Ícaro, 567",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "Novo Hamburgo, Estância Velha",
                endereco: "Av. Brasil, 900",
                horario: "Segunda a sexta: 10h às 19h"
            },
            {
                nome: "Novo Hamburgo, Boa Saúde",
                endereco: "Rua Fredolino de Souza Soares, 3214",
                horario: "Segunda a sexta: 8h às 17h"
            }
        ],
        "Nova Santa Rita":[
            {
                nome: "Nova Santa Rita, Berto Círio",
                endereco: "Av. Getúlio Vargas, 2345",
                horario: "Segunda a sexta: 9h às 18h"
            },
            {
                nome: "Nova Santa Rita, Califórnia",
                endereco: "Rua Primavera, 890",
                horario: "Segunda a sexta: 10h às 19h"
            }
        ]
    };
    const cidade = dados.localidade;
    const resultado = document.getElementById("resultado");
    if(lojas[cidade]){
        resultado.innerHTML = `
            <h3 class="center">Lojas disponíveis perto de você:</h3>
            ${lojas[cidade]
                .map((loja, indice) => `
                    <li class="opcao3 loja" data-indice="${indice}"><strong>${loja.nome}</strong>, ${loja.endereco}</li>
                `)
                .join("")}
        `;
        document
            .querySelectorAll(".loja")
            .forEach(botao => {
                botao.addEventListener("click", () => {
                    const indice = botao.dataset.indice;
                    const lojaEscolhida = lojas[cidade][indice];
                    const modal = document.getElementById("modelo");
                    const conteudoModal = document.getElementById("conteudomodelo");
                    conteudoModal.innerHTML = `
                        <h2>Retirar na Loja</h2>
                        <p>Deseja retirar o seu produto na loja <strong>${lojaEscolhida.nome}</strong>?</p>
                        <p>Endereço: ${lojaEscolhida.endereco}</p>
                        <div>
                            <button id="confirmar-retirada">Confirmar Retirada</button>
                            <button id="cancelar-retirada">Cancelar</button>
                        </div>
                    `;
                    modal.style.display = "block";
                    document
                        .getElementById("cancelar-retirada")
                        .addEventListener("click", () => {
                            modal.style.display = "none";
                        });
                    document
                        .getElementById("confirmar-retirada")
                        .addEventListener("click", () => {
                            const codigo = gerarCodigo();
                            conteudoModal.innerHTML = `
                                <h2> Retirar na Loja </h2>
                                <p>Seu pedido foi confirmado</p>
                                <p>Loja: <strong>${lojaEscolhida.nome}</strong></p>
                                <p>Endereço: ${lojaEscolhida.endereco}</p>
                                <p>Horário de funcionamento: ${lojaEscolhida.horario}</p>
                                <hr>
                                <h3> Código de Retirada: </h3>
                                <div class="codigo-retirada">
                                    ${codigo}
                                </div>
                                <button id="fechar-confirmacao">Fechar</button>
                            `;
                            document
                                .getElementById("fechar-confirmacao")
                                .addEventListener("click", () => {
                                    modal.style.display = "none";
                                });
                });
                        })
            });
        
    }
}
document
    .getElementById("buscar")
    .addEventListener("click", buscarCEP);

});

entrega.addEventListener("click",() => {
    entrega.classList.add("ativa");
    retirar.classList.remove("ativa");
    document.getElementById("resultado").innerHTML = "";
    info.innerHTML = `
    <form class="opcao2">
        <h2>Entrega no local</h2>
        <label for="endereco">Digite o endereço de entrega:</label>
        <input type="text" id="endereco" name="endereco" placeholder="Ex.: Rua sete, 123"> 
    </form>
    `;
});
