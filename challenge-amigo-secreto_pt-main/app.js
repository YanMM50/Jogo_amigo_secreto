//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    function adicionarAmigo() {
        let input = document.getElementById("amigo");
        let nome = input.value.trim();
        if (nome !== "" && !amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            input.value = "";
        } else {
            alert("Nome inválido ou já adicionado!");
        }
    }

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Adicione pelo menos dois amigos para sortear!");
            return;
        }
        let sorteio = [...amigos];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
            let amigo;
            do {
                amigo = sorteio[Math.floor(Math.random() * sorteio.length)];
            } while (amigo === amigos[i]);
            sorteio.splice(sorteio.indexOf(amigo), 1);
            
            let li = document.createElement("li");
            li.textContent = `${amigos[i]} tirou ${amigo}`;
            resultado.appendChild(li);
        }
    }

    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});