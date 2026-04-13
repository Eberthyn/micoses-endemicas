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
        "Correta. Mantém alta eficácia com menor frequência/intensidade de reações adversas e é a droga de escolha para <1 ano e >50 anos. O esquema (5 dias + dias 14 e 21; total 10–30 mg/kg) coincide com o recomendado no material.";
    } else if (value == "A1") {
      mensagem =
        "Incorreta. Embora eficaz, apresenta toxicidade elevada (cardíaca, musculoesquelética, pancreática etc.) e não é recomendada para maiores de 50 anos, desfavorecendo segurança neste caso. O material destaca esse perfil de risco em extremos de idade.";
    } else if (value == "B1") {
      mensagem =
        "Incorreta. É efetiva, porém com maior toxicidade (nefrotoxicidade, distúrbios eletrolíticos, anemia, arritmias), o que pesa contra em idosos quando existe alternativa mais segura.";
    } else if (value == "D1") {
      mensagem =
        "Incorreta. Apesar de ser a única via oral, não se mostrou eficaz para leishmaniose visceral americana em humanos (embora útil para leishmaniose visceral canina e leishmaniose tegumentar), portanto não é opção preferencial aqui.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
