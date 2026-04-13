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
        "Parabéns! A vigilância epidemiológica tem como um de seus principais objetivos fornecer informações para o planejamento e a execução de políticas públicas de saúde. Com base nesses dados, é possível implementar estratégias de prevenção e controle das doenças, como a leishmaniose.";
    } else if (value == "A1") {
      mensagem =
        "A vigilância epidemiológica monitora doenças e fatores de risco, enquanto a vigilância sanitária atua na fiscalização de produtos, serviços e ambientes para garantir a segurança da população.";
    } else if (value == "B1") {
      mensagem =
        "A vigilância epidemiológica é essencial em nível local, pois permite ações direcionadas conforme a realidade de cada região. Municípios e estados desempenham papel central na detecção e no controle das leishmanioses.";
    } else if (value == "D1") {
      mensagem =
        "Embora a detecção de surtos seja uma função importante da vigilância epidemiológica, seu papel principal é coletar, analisar e interpretar dados para subsidiar políticas de saúde pública de forma contínua e não apenas em situações de surto.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
