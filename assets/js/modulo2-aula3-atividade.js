// MÓDULO 1 QUESTÃO 1
var resposta = "C1"; // Resposta correta
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

    if (value !== "C1") {
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
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Parabéns! O ciclo de transmissão da leishmaniose envolve os flebotomíneos, que atuam como vetores biológicos, e mamíferos reservatórios, que mantêm a circulação do protozoário <i>Leishmania</i> na natureza. O ser humano é considerado hospedeiro acidental, pois não é essencial para a perpetuação do ciclo da doença.";
    } else if (value == "A1") {
      mensagem =
        "O ser humano não é um reservatório primário da <i>Leishmania</i>. O ciclo da doença depende principalmente de mamíferos silvestres e, no caso da leishmaniose visceral urbana, do cão doméstico.";
    } else if (value == "B1") {
      mensagem =
        "A transmissão pode ocorrer tanto em áreas rurais quanto em ambientes urbanos, especialmente com a adaptação dos vetores e reservatórios a esses locais.";
    } else if (value == "D1") {
      mensagem =
        "A infecção no homem ocorre exclusivamente pela picada do flebótomo infectado, não havendo transmissão direta entre humanos ou pelo contato com animais doentes.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
