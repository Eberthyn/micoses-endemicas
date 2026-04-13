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
        "Parabéns! Diversos mamíferos, incluindo roedores, pacas, preguiças e tamanduás, desempenham papel essencial como reservatórios da <i>Leishmania</i>, mantendo o ciclo epidemiológico da doença em áreas silvestres. Além disso, o cão doméstico é o principal reservatório da leishmaniose visceral urbana, facilitando a transmissão para humanos.";
    } else if (value == "A1") {
      mensagem =
        "Os cães domésticos são reservatórios importantes, mas não são os únicos. Animais silvestres também mantêm o ciclo de transmissão, principalmente em áreas florestais.";
    } else if (value == "C1") {
      mensagem =
        "Os flebotomíneos não são reservatórios, mas vetores da <i>Leishmania</i>. Eles apenas transmitem o parasito, mas não o hospedam de forma permanente como os mamíferos.";
    } else if (value == "D1") {
      mensagem =
        "A transmissão da <i>Leishmania</i> não ocorre exclusivamente entre humanos. O ciclo da doença envolve mamíferos como cães e roedores, que servem de fonte de infecção para os flebotomíneos.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
