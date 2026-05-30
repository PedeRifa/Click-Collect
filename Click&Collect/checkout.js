const retirar = document.getElementById("retirar");
const entrega = document.getElementById("entrega");
const info = document.getElementById("info");

retirar.addEventListener("click",() => {

    retirar.classList.add("ativa");
    entrega.classList.remove("ativa");

    info.innerHTML = `
    <link rel="stylesheet" href="style.css">
    <section>
        <div class="opcao2">
            <h2>Retirar na loja</h2>
            <label for="loja">Digite seu CEP:</label>
            <input type="text" id="loja" name="loja" placeholder="Ex.: 92000-000">
        </div>
    </section>
    `;
});

entrega.addEventListener("click",() => {
    entrega.classList.add("ativa");
    retirar.classList.remove("ativa");

    info.innerHTML = `
    <link rel="stylesheet" href="style.css">
    <form class="opcao2">
        <h2>Entrega no local</h2>
        <label for="endereco">Digite o endereço de entrega:</label>
        <input type="text" id="endereco" name="endereco" placeholder="Ex.: Rua sete, 123"> 
    </form>
    `;
})