"use strict";
(function(){
    var _a;
    var $ = function (query) {
        return document.querySelector(query);
    };
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click",
    function (){
        var _a, _b;
        var nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        var placa = (_a = $("#placa")) === null || _a === void 0 ? void 0 : _b.value;
        if (nome || !placa) {
            alert("Os campos nome e placa são obrigatórios!");
            return;
        }
    });
})();