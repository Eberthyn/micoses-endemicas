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
        "Parabéns! Para orientar as ações de vigilância e controle de forma efetiva, é necessário <b>considerar simultaneamente</b> a incidência (magnitude dos casos na população), a mortalidade (impacto sobre o total de habitantes) e a letalidade (gravidade entre os doentes). Esses indicadores, em conjunto, fornecem um panorama abrangente, norteando intervenções como busca ativa, melhorias na assistência e estratégias de prevenção.";
    } else if (value == "A1") {
      mensagem =
        "Incidência não mede a proporção de óbitos entre os doentes, mas sim quantos casos novos surgiram na população.";
    } else if (value == "B1") {
      mensagem =
        "A mortalidade e a letalidade são indicadores essenciais; ignorá-los pode levar a subestimar a gravidade do problema.";
    } else if (value == "D1") {
      mensagem =
        "Uma letalidade de 10% indica que 1 em cada 10 pacientes diagnosticados morre, o que é significativo e requer respostas urgentes de saúde pública.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
