(function(){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(nome || placa) {
            alert("Os campos nome e placa são obrigatórios!");
            return;
        }
    })
})();