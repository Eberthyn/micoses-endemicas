// MÓDULO 1 QUESTÃO 1
var resposta = "A1"; // Resposta correta
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

    if (value !== "A1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Correta. As células T CD4+ Th1 produzem IFN-γ, que ativa macrófagos, potencializando sua capacidade microbicida contra Leishmania através da produção de óxido nítrico e espécies reativas de oxigênio.";
    } else if (value == "B1") {
      mensagem =
        "Incorreto. Contradiz o mecanismo de defesa. Macrófagos ativados por IFN-γ adquirem maior capacidade leishmanicida através da ativação da iNOS e produção de óxido nítrico.";
    } else if (value == "C1") {
      mensagem =
        "Incorreto. IL-4 e IL-13 são citocinas T CD4+ Th2 que favorecem a progressão da infecção por <i>Leishmania</i>, não sua destruição. Elas promovem resposta humoral inadequada para este patógeno intracelular.";
    } else if (value == "D1") {
      mensagem =
        "Incorreto. Está invertido. A iNOS (produção de óxido nítrico) é importante para destruição; a arginase compete com iNOS pelo substrato L-arginina, favorecendo a proliferação parasitária.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
