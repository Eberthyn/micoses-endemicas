// MÓDULO 1 QUESTÃO 1
var resposta = "B1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps = $("input[name=questao1]:checked");
  if (resps.length) {
    $("#feedback1").removeClass("escondeFeedback");
    $("input[name=questao1]").removeClass("input-erro input-certo");
    resps.each(function () {
      // concatena os values
      value += $(this).val();
    });

    if (value !== "B1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Parabéns! A combinação de diferentes métodos diagnósticos — por exemplo, testes sorológicos e moleculares — pode aumentar a acurácia do diagnóstico, especialmente em contextos onde há limitações em sensibilidade e especificidade de testes individuais.";
    } else if (value == "A1") {
      mensagem =
        "Incorreto. A PCR em tempo real é uma técnica sensível, porém requer equipamentos sofisticados e profissionais especializados, o que a torna inviável em áreas com recursos limitados.";
    } else if (value == "C1") {
      mensagem =
        "Incorreto. Métodos moleculares, como a PCR seguida de RFLP, permitem sim a diferenciação entre espécies de <i>Leishmania</i>, sendo úteis tanto no diagnóstico quanto na escolha terapêutica.";
    } else if (value == "D1") {
      mensagem =
        "Incorreto. Inquéritos epidemiológicos geralmente priorizam testes de fácil aplicação, com boa sensibilidade e viáveis em larga escala, o que nem sempre envolve múltiplas etapas laboratoriais.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
