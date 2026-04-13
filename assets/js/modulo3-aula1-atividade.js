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
        "Parabéns! A realização do diagnóstico da leishmaniose visceral canina (LVC) é essencial para monitorar áreas de risco e implementar medidas de controle eficazes. O diagnóstico da LVC permite identificar áreas endêmicas e tomar medidas preventivas para reduzir a transmissão da doença.";
    } else if (value == "A1") {
      mensagem =
        "Incorreto. Os cães são os principais reservatórios de <i>Leishmania infantum</i>, causadora da leishmaniose visceral, e não da <i>Leishmania braziliensis</i>, que está associada à leishmaniose tegumentar.";
    } else if (value == "C1") {
      mensagem =
        "Incorreto. O exame parasitológico direto tem alta especificidade, sendo considerado um método de confirmação. Entretanto, sua sensibilidade é variável, o que limita seu uso em larga escala.";
    } else if (value == "D1") {
      mensagem =
        "Incorreto. Embora não haja recomendação para vigilância ativa de reservatórios silvestres no Brasil, raposas e marsupiais desempenham um papel importante na manutenção do ciclo silvestre da Leishmania, sendo relevantes para a epidemiologia da doença.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
