const retirar = document.getElementById("retirar");
const entrega = document.getElementById("entrega");
const info = document.getElementById("info");

retirar.addEventListener("change", function () {

    if (retirar.checked) {

        entrega.checked = false;

        info.innerHTML = `
            <h2>Retirar na loja</h2>
            <form>
                <div>
                    <label for="loja">Escolha a cidade para retirar o produto:</label>
                    <select id="loja" name="loja" required>
                        <option value="">Selecionar cidade</option>
                        <option value="nova-santa-rita">Nova Santa Rita</option>
                        <option value="gravatai">Gravataí</option>
                        <option value="canoas">Canoas</option>
                        <option value="porto-alegre">Porto Alegre</option>
                    </select>
                </div>
            </form>
            <div id ="resultado"></div>
        `;
        const loja = document.getElementById("loja");
        loja.addEventListener("change", mostrarInfo);
    }

    else {
        info.innerHTML = "";
    }
});

entrega.addEventListener("change", function () {

    if (entrega.checked) {

        retirar.checked = false;

        info.innerHTML = `
            <h2>Entrega no local</h2>
            <form>
                <div>
                    <label for="endereco">Digite o endereço da entrega:</label>
                    <input type="text" id="endereco" name="endereco" required>
                </div>
                <div>
                    <label for="cidade">Escolha sua cidade:</label>
                    <select id="cidade" name="cidade" required>
                        <option value="">Selecionar cidade</option>
                        <option value="canoas">Canoas</option>
                        <option value="porto-alegre">Porto Alegre</option>
                        <option value="gravatai">Gravataí</option>
                        <option value="nova-santa-rita">Nova Santa Rita</option>
                    </select>
                </div>
                <button type="submit">Confirmar</button>
            </form>
        `;
    }

    else {
        info.innerHTML = "";
    }
});

function mostrarInfo() {

    const loja=document.getElementById("loja");

    const resultado=document.getElementById("resultado");

    const valor = loja.value;
    

    if (valor === "canoas"){
        resultado.innerHTML = `
            <h3>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</h3>
            <h1> Lojas em Canoas: </h1>
            <ul>
                <li> Colect point Canoas, Av. Getulio Vargas, 1323</li>
                <li> Colect point Canoas, Rua Tiradentes, 534 </li>
                <li> Colect point Canoas, Av. Boqueirão, 789 </li>
            </ul>
        `;
    }
    else if (valor === "porto-alegre"){
        resultado.innerHTML =`
            <h3>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</h3>
            <h1> Lojas em Porto Alegre: </h1>
            <ul>
                <li> Colect point Porto Alegre, Av. Ipiranga, 3098</li>
                <li> Colect point Porto Alegre, Rua Castelo Branco, 243</li>
                <li> Colect Point Porto Alegre, Av. Farrapos, 987</li>
            </ul>
        `;
    }
    else if (valor === "gravatai"){
        resultado.innerHTML = `
            <h3>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</h3>
            <h1> Lojas em Gravataí: </h1>
            <ul>
                <li> Colect point Gravataí, Av. Dorival Cândido Luz de Oliveira, 9807</li>
                <li> Colect point Gravataí, Rua São Vicente, 935</li>
                <li> Colect point Gravataí, Av. João de Oliveira Remião, 456</li>
            </ul>
        `;
    }
    else if (valor === "nova-santa-rita"){
        
        resultado.innerHTML = `
            <h3>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</h3>
            <h1> Lojas em Nova Santa Rita: </h1>
            <ul>
                <li> Colect point Nova Santa Rita, Av. Nova Santa Rita, 456</li>
            </ul>
        `;
    }
        else {
            resultado.innerHTML = "";
        }
}

document
    .getElementById("loja")
    .addEventListener("change", mostrarInfo);