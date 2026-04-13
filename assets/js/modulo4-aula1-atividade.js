// MÓDULO 1 QUESTÃO 1
var resposta = "D1"; // Resposta correta
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

    if (value !== "D1") {
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
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Parabéns! De fato, a diferenciação entre LCD e LD baseia-se principalmente nas manifestações clínicas e histopatológicas. Na LCD há infiltração difusa das lesões com grande número de parasitas e ausência de úlceras, enquanto na LD predominam pápulas, úlceras e menor número de parasitas.";
    } else if (value == "A1") {
      mensagem =
        " Incorreto. Na LCD, o comprometimento de mucosas é raro, ao contrário do que afirma a alternativa. Além disso, a grande quantidade de parasitas está presente na LCD, e não na LD.";
    } else if (value == "B1") {
      mensagem =
        " Incorreto. Os nódulos profundos e o grande número de parasitas são característicos da forma difusa, e não da disseminada.";
    } else if (value == "C1") {
      mensagem =
        "Incorreto. A anergia (ausência de resposta imune celular) está associada à LCD, mas essa forma não apresenta múltiplas úlceras. Já a LD apresenta ulcerações com resposta imune ativa e não está associada à anergia.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
