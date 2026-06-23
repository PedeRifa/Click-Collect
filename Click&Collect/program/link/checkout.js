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
        <form class="opcao2" id="formEntrega">
            <h2>Entrega no local</h2>
            <button type="button" id="btnEnviarEntrega" class="botaoSubmit">Enviar</button>
        </form>
    `;

const cep = document.getElementById("cep");
cep.addEventListener("input", () => {
    cep.value = cep.value.replace(/\D/g, '');
});
this.validarCEP = validarCEP;
function validarCEP(cep){
    return /^[0-9]{8}$/.test(cep);
}

async function buscarCEP(){
    if(!validarCEP(document.getElementById("cep").value.replace(/\D/g, ''))){
        alert("CEP inválido.");
        return;
    }
    const resposta = await fetch(`https://viacep.com.br/ws/${document.getElementById("cep").value.replace(/\D/g, '')}/json/`);
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
                            
                            <div style="margin: 20px 0;">
                                <input type="text" id="nomeModal" placeholder="Seu Nome Completo" style="width: 90%; margin-bottom: 10px; padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                                <input type="email" id="emailModal" placeholder="Seu E-mail" style="width: 90%; padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                            </div>

                            <div>
                                <button id="confirmar-retirada">Confirmar Retirada</button>
                                <button id="cancelar-retirada">Cancelar</button>
                            </div>
                        `;
                        modal.style.display = "block";
                        
                        document.getElementById("cancelar-retirada").addEventListener("click", () => {
                            modal.style.display = "none";
                        });
                        
                        document.getElementById("confirmar-retirada").addEventListener("click", async () => {
                            const nomeCliente = document.getElementById("nomeModal").value || "Cliente Padrão";
                            const emailCliente = document.getElementById("emailModal").value || "cliente@email.com";
                            
                            const payload = {
                                Nome: nomeCliente,
                                Email: emailCliente,
                                TipoEntrega: "Retirada na Loja"
                            };

                            try {
                                const resposta = await fetch('http://localhost:5000/api/checkout', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(payload)
                                });

                                if(resposta.ok) {
                                    const codigo = gerarCodigo();
                                    conteudoModal.innerHTML = `
                                        <h2> Retirar na Loja </h2>
                                        <p>Seu pedido foi salvo no banco de dados!</p>
                                        <p>Nome: <strong>${nomeCliente}</strong></p>
                                        <p>Loja: <strong>${lojaEscolhida.nome}</strong></p>
                                        <hr>
                                        <h3> Código de Retirada: </h3>
                                        <div class="codigo-retirada">${codigo}</div>
                                        <button id="fechar-confirmacao">Fechar</button>
                                    `;
                                    document.getElementById("fechar-confirmacao").addEventListener("click", () => {
                                        modal.style.display = "none";
                                    });
                                }
                            } catch (erro) {
                                console.error(erro);
                                alert("Erro de conexão com a API. O terminal do VS Code está rodando?");
                            }
                        });
                    });
                });
    //validações que achei pertinente em 16/06/2026, caso ache o contrário, favor entrar em contato. Ass: Leonardo de Bortoli    
    } else if (dados.erro === "true") { //não acha cidade, único retorno do json é "erro": "true"
        alert("Cidade não encontrada!")
    } 
    else { //acha cidade, mas !loja[cidade]
        alert("Não possuímos estabelecimentos parceiros na cidade!")
    }
}
document
    .getElementById("buscar")
    .addEventListener("click", buscarCEP);

});

this.validarCamposForm = validarCamposForm;
function validarCamposForm(event)
{
    const nomeCampo = document.getElementById('nome');
    const emailCampo = document.getElementById('email');
    const enderecoCampo = document.getElementById('endereco');
    const cepCampo = document.getElementById('cep');
    const bairroCampo = document.getElementById('bairro');
    const numCampo = document.getElementById('num');
    const cidadeCampo = document.getElementById('cidade');
    const ufCampo = document.getElementById('uf');

    if (nomeCampo.value === null || nomeCampo.value === "")
    {
        nomeCampo.focus()
        nomeCampo.value = "";
        alert("Campo 'NOME' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (emailCampo.value === null || emailCampo.value === "")
    {
        emailCampo.focus()
        emailCampo.value = "";
        alert("Campo 'EMAIL' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (enderecoCampo.value === null || enderecoCampo.value === "")
    {
        enderecoCampo.focus()
        enderecoCampo.value = "";
        alert("Campo 'ENDEREÇO' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (cepCampo.value === null || cepCampo.value === "")
    {
        cepCampo.focus()
        cepCampo.value = "";
        alert("Campo 'CEP' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (bairroCampo.value === null || bairroCampo.value === "")
    {
        bairroCampo.focus()
        bairroCampo.value = "";
        alert("Campo 'BAIRRO' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (numCampo.value === null || numCampo.value === "")
    {
        numCampo.focus()
        numCampo.value = "";
        alert("Campo 'NÚMERO' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (cidadeCampo.value === null || cidadeCampo.value === "")
    {
        cidadeCampo.focus()
        cidadeCampo.value = "";
        alert("Campo 'CIDADE' não pode estar vazio.");
        event.preventDefault();
        return false;
    }

    if (ufCampo.value === null || ufCampo.value === "")
    {
        ufCampo.focus()
        alert("Campo 'UF' não pode estar vazio.");
        event.preventDefault();
        return false;
    }
    
    return true;
};

this.campoCheioCEP = campoCheioCEP; //verifica se o campo cep ta cheio, pra usar pra preencher os outros qdo estiver...
function campoCheioCEP()
{
    if (document.getElementById("cep").value.length === 9)
    {
        preencheCamposPorCEP();
    }
};

async function preencheCamposPorCEP(){
    //pega os dados
    if(!/^[0-9]{8}$/.test(document.getElementById("cep").value.replace(/\D/g, ''))){
        alert("CEP inválido.");
        return;
    }
    const resposta = await fetch(`https://viacep.com.br/ws/${document.getElementById("cep").value.replace(/\D/g, '')}/json/`);
    const dados = await resposta.json();
    //prenchimento dos campos
    if (dados.logradouro !== '' && dados.logradouro !== undefined) {
        document.getElementById('endereco').value = dados.logradouro;
    }
    if (dados.bairro !== '' && dados.bairro !== undefined) {
        document.getElementById('bairro').value = dados.bairro;
    }
    if (dados.complemento !== '' && /^[0-9]{8}$/.test(dados.complemento) && dados.complemento !== undefined) {
        document.getElementById('num').value = dados.complemento;
    }
    if (dados.localidade !== '' && dados.localidade !== undefined) {
        document.getElementById('cidade').value = dados.localidade;
    }
        if (dados.uf !== '' && dados.uf !== undefined) {
        document.getElementById('uf').value = dados.uf.toLowerCase();
    }
};

entrega.addEventListener("click",() => {
    entrega.classList.add("ativa");
    retirar.classList.remove("ativa");
    document.getElementById("resultado").innerHTML = "";
    info.innerHTML = `
    <div class="opcao2" id="formEntrega">
        <h2>Entrega no local</h2>
        <div id="fluxoBuscar">
            <div class="form-group"><label for="nome">Nome:</label> <input type="text" id="nome" placeholder="João da Silva"></div>
            <div class="form-group"><label for="email">E-mail:</label><input type="email" id="email" placeholder="email@exemplo.com"></div>
            <div class="form-group"><label for="endereco">Endereço:</label><input type="text" id="endereco" placeholder="Av. Presidente Vargas"></div>
            <div class="form-group"><label for="cep">CEP:</label><input type="text" id="cep" placeholder="91440567" maxlength="9" onkeydown="formataCampoCEP(event)" onkeyup="mascaraCampoCEP(event)" oninput="campoCheioCEP();"></div>
            <div class="form-group"><label for="bairro">Bairro:</label><input type="text" id="bairro" placeholder="Marechal Rondon"></div>
            <div class="form-group"><label for="num">Nº:</label><input type="text" id="num" placeholder="12"></div>
            <div class="form-group"><label for="cidade">Cidade:</label><input type="text" id="cidade" placeholder="Novo Hamburgo"></div>
                <div class="form-group"><label for="uf">UF:</label><select name="uf" id="uf">
                <option value="" selected>--Selecione uma UF--</option>
                <optgroup label="Sul">
                    <option value="pr">Paraná</option> 
                   <option value="rs">Rio Grande do Sul</option>
                   <option value="sc">Santa Catarina</option> 
                </optgroup>
                <optgroup label="Sudeste">
                   <option value="es">Espírito Santo</option>
                   <option value="mg">Minas Gerais</option> 
                   <option value="rj">Rio de Janeiro</option>  
                   <option value="sp">São Paulo</option>  
                </optgroup>
                <optgroup label="Centro-Oeste">
                   <option value="df">Distrito Federal</option>  
                   <option value="go">Goiás</option>
                   <option value="mt">Mato Grosso</option> 
                   <option value="ms">Mato Grosso do Sul</option>  
                </optgroup>
                <optgroup label="Nordeste">
                   <option value="al">Alagoas</option>  
                   <option value="ba">Bahia</option>
                   <option value="ce">Ceará</option> 
                   <option value="ma">Maranhão</option>  
                   <option value="pb">Paraíba</option>  
                   <option value="pe">Pernambuco</option>
                   <option value="pi">Piauí</option> 
                   <option value="rn">Rio Grande do Norte</option>  
                   <option value="se">Sergipe</option>  
                </optgroup>
                <optgroup label="Norte">
                   <option value="ac">Acre</option>  
                   <option value="ap">Amapá</option>
                   <option value="am">Amazonas</option> 
                   <option value="pa">Pará</option>  
                   <option value="ro">Rondônia</option>  
                   <option value="rr">Roraima</option>
                   <option value="to">Tocantins</option> 
                   <option value="rn">Rio Grande do Norte</option>  
                   <option value="se">Sergipe</option>  
                </optgroup>
                </select></div>
                <button id="btnEnviarEntrega" class="botaoSubmit">Finalizar Entrega</button>
            </div>
    </form>
    `;
});

//eventos de formatacao e mascara
this.formataCampoCEP = formataCampoCEP;
function formataCampoCEP(event) {
    if (!/^[0-9]$/.test(event.key) 
        && event.key !== "Backspace" && event.key !== "Escape" && event.key !== "Enter"
        && event.key !== "ArrowRight" && event.key !== "ArrowLeft"
        && event.key !== "ArrowUp" && event.key !== "ArrowDown"){
        event.preventDefault();
    } 
};

this.mascaraCampoCEP = mascaraCampoCEP;

function mascaraCampoCEP(event) {
    let valorCep = document.getElementById("cep").value;
    
    valorCep = valorCep.replace(/\D/g, "");

    if (valorCep.length > 8) {
        valorCep = valorCep.substring(0, 8);
    }
    if (valorCep.length > 5) {
        valorCep = valorCep.replace(/^(\d{5})(\d{1,3})/, "$1-$2");
    }
    document.getElementById("cep").value = valorCep;
}

document.addEventListener('click', async (event) => {
    if (event.target.id === 'btnEnviarEntrega') {
        const eventFake = { preventDefault: () => {} };
        const ehValido = validarCamposForm(eventFake);
        if (!ehValido) {
            return; 
        }

        const payload = {
            Nome: document.getElementById('nome').value,
            Email: document.getElementById('email').value,
            TipoEntrega: "Entrega no local"
        };

        try {
            const resposta = await fetch('http://localhost:5000/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (resposta.ok) {
                document.getElementById("formEntrega").style.display = "none";
                
                const modal = document.getElementById("modelo");
                const conteudoModal = document.getElementById("conteudomodelo");
                
                conteudoModal.innerHTML = `
                    <h2>Pedido Confirmado!</h2>
                    <p>Seus dados foram salvos com sucesso.</p>
                    <button id="fechar-confirmacao">Fechar</button>
                `;
                modal.style.display = "block";
                
                document.getElementById("fechar-confirmacao").addEventListener("click", () => {
                    modal.style.display = "none";
                });
            }
        } catch (e) {
            alert("Erro na API.");
        }
    }
});