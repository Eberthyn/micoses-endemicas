// Fixa rodapé
$(document).ready(function () {
  if (document.body.scrollHeight && (document.body.scrollHeight > window.innerHeight)) {
    $("#rodape").removeClass("fixaRodape");
    $("#row-main").css("padding-bottom", "0%");
  } else {
    $("#rodape").addClass("fixaRodape");
    $("#row-main").css("padding-bottom", ($('#rodape').css("height")));
  }
  if ($(window).scrollTop() === 0) {
    $("#row-main").css("padding-top", "0%");
    $("#menuLateral").css("padding-bottom", ($('header').css("height")));
  } else {
    $("#menuLateral").css("top", 0);
    $("#sidebarButton").css("top", 0);
    $("#sidebarButton2").css("top", 0);
  }
});

/* Fixa onScroll */
$(document).ready(function () {

// 1. Criamos a função que calcula tudo
  function ajustarLayout() {
    var $header = $('header');
    var $menu = $("#menuLateral");
    var $rodape = $("#rodape");
    var $rowMain = $("#row-main");
    var $sidebarCol = $("#sidebar"); // A coluna pai (col-md-2)

    var headerHeight = $header.outerHeight();
    var scrollTop = $(window).scrollTop();
    var windowHeight = window.innerHeight;
    var docHeight = document.body.scrollHeight;
    
    // Pega a largura exata da coluna pai para aplicar no menu quando ele for fixo
    var sidebarWidth = $sidebarCol.outerWidth();

    // --- LÓGICA DO RODAPÉ ---
    if (docHeight > windowHeight) {
      $rodape.removeClass("fixaRodape");
      $rowMain.css("padding-bottom", "0");
    } else {
      $rodape.addClass("fixaRodape");
      $rowMain.css("padding-bottom", $rodape.outerHeight() + "px");
    }

    // --- LÓGICA DO MENU ---
    if (scrollTop >= headerHeight) {
      // MODO FIXO: Rolou e passou do header
      var cssFixed = {
        "position": "fixed",
        "top": "0",
        "z-index": "1000",
        "transition": "none",
        // IMPORTANTE: Força a largura igual à da coluna pai para não esticar na tela toda
        "width": sidebarWidth + "px" 
      };
      $menu.css(cssFixed).addClass('is-fixed');
    } else {
      // MODO ABSOLUTO: Header visível
      var cssAbsolute = {
        "position": "absolute",
        "top": "0",
        "z-index": "10",
        "transition": "none",
        // Volta a preencher 100% da coluna pai
        "width": "100%" 
      };
      $menu.css(cssAbsolute).removeClass('is-fixed');
    }
  }

  // 2. Vinculamos a função aos eventos 'scroll' E 'resize'
  // O .on() permite ouvir múltiplos eventos de uma vez
  $(window).on('scroll resize', function () {
    ajustarLayout();
  });

  // 3. Chamamos uma vez ao carregar a página para garantir o estado inicial
  ajustarLayout();
});

// Garante o posicionamento correto ao carregar a página
$(document).ready(function () {
  $(window).trigger('scroll');
});

// Dispara uma vez ao carregar para o menu não começar errado
$(document).ready(function () {
  $(window).trigger('scroll');
});

// Chame o evento uma vez ao carregar para garantir a posição inicial correta
$(window).trigger('scroll');

/* Adiciona suavidade na rolagem da ancoragem */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});

/* Adiciona tooltip (Abas) */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// SIDEBAR
/* Abre com menu recolhido em Tablet e smartphone */
var tam = $(window).width();
if (tam <= 1100) {
  $('#sidebar').addClass('esconder');
  $("#sidebarButton").addClass("open");
  $("#content").addClass("col-md-12");
  $("#content").removeClass("col-md-10");
} else {
  $('#sidebar').removeClass('esconder');
  $("#sidebarButton").removeClass("open");
  $("#content").removeClass("col-md-12");
  $("#content").addClass("col-md-10");
}

// Recolhe menu ao reduzir tela no desktop //
$(window).on('resize', function () {
  if (document.body.scrollHeight >= window.innerHeight) {
    $("#rodape").removeClass("fixaRodape");
    $("#row-main").css("padding-bottom", "0%");
  } else {
    $("#rodape").addClass("fixaRodape");
    $("#row-main").css("padding-bottom", ($('#rodape').css("height")));
  }

  // if ($(window).scrollTop() > 0) {
  //   $("#row-main").css("padding-top", ($('header').css("height")));
  // }

  var win = $(this);
  if (win.width() < 1100) {

    $('#sidebar').addClass('esconder');
    $("#sidebarButton").addClass("open");
    $("#content").addClass("col-md-12");
    $("#content").removeClass("col-md-10");

  } else {
    $('#sidebar').removeClass('esconder');
    $("#sidebarButton").removeClass("open");
    $("#content").removeClass("col-md-12");
    $("#content").addClass("col-md-10");
  }

});

/*Collapse Sidebar*/
$(".toggle-sidebar").click(function () {
  $("#sidebar").toggleClass("esconder");
  $("#content").toggleClass("col-md-12 col-md-10");
  $("#sidebarButton").toggleClass("open");

  return false;
});

// CAROUSEL SWIPE
+function ($) {
  'use strict';

  if (!$.fn.carousel) {
    throw new Error("carousel-swipe required bootstrap carousel")
  }

  // CAROUSEL CLASS DEFINITION
  // =========================

  var CarouselSwipe = function (element) {
    this.$element = $(element)
    this.carousel = this.$element.data('bs.carousel')
    this.options = $.extend({}, CarouselSwipe.DEFAULTS, this.carousel.options)
    this.startX =
      this.startY =
      this.startTime =
      this.cycling =
      this.$active =
      this.$items =
      this.$next =
      this.$prev =
      this.dx = null

    this.$element
      .on('touchstart', $.proxy(this.touchstart, this))
      .on('touchmove', $.proxy(this.touchmove, this))
      .on('touchend', $.proxy(this.touchend, this))
  }

  CarouselSwipe.DEFAULTS = {
    swipe: 50 // percent per second
  }

  CarouselSwipe.prototype.touchstart = function (e) {
    if (!this.options.swipe) return;
    var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
    this.dx = 0
    this.startX = touch.pageX
    this.startY = touch.pageY
    this.cycling = null
    this.width = this.$element.width()
    this.startTime = e.timeStamp
  }

  CarouselSwipe.prototype.touchmove = function (e) {
    if (!this.options.swipe) return;
    var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
    var dx = touch.pageX - this.startX
    var dy = touch.pageY - this.startY
    if (Math.abs(dx) < Math.abs(dy)) return; // vertical scroll

    if (this.cycling === null) {
      this.cycling = !!this.carousel.interval
      this.cycling && this.carousel.pause()
    }
    e.preventDefault()
    this.dx = dx / (this.width || 1) * 100
    this.swipe(this.dx)
  }

  CarouselSwipe.prototype.touchend = function (e) {
    if (!this.options.swipe) return;
    if (!this.$active) return; // nothing moved
    var all = $()
      .add(this.$active).add(this.$prev).add(this.$next)
      .carousel_transition(true)

    var dt = (e.timeStamp - this.startTime) / 1000
    var speed = Math.abs(this.dx / dt) // percent-per-second
    if (this.dx > 40 || (this.dx > 0 && speed > this.options.swipe)) {
      this.carousel.prev()
    } else if (this.dx < -40 || (this.dx < 0 && speed > this.options.swipe)) {
      this.carousel.next();
    } else {
      this.$active
        .one($.support.transition.end, function () {
          all.removeClass('prev next')
        })
        .emulateTransitionEnd(this.$active.css('transition-duration').slice(0, -1) * 1000)
    }

    all.css('left', '')
    this.cycling && this.carousel.cycle()
    this.$active = null // reset the active element
  }

  CarouselSwipe.prototype.swipe = function (percent) {
    var $active = this.$active || this.getActive()
    if (percent < 0) {
      this.$prev
        .css('left', '')
        .removeClass('prev')
        .carousel_transition(true)
      if (!this.$next.length || this.$next.hasClass('active')) return
      this.$next
        .carousel_transition(false)
        .addClass('next')
        .css('left', (percent + 100) + '%')
    } else {
      this.$next
        .css('left', '')
        .removeClass('next')
        .carousel_transition(true)
      if (!this.$prev.length || this.$prev.hasClass('active')) return
      this.$prev
        .carousel_transition(false)
        .addClass('prev')
        .css('left', (percent - 100) + '%')
    }

    $active
      .carousel_transition(false)
      .css('left', percent + '%')
  }

  CarouselSwipe.prototype.getActive = function () {
    this.$active = this.$element.find('.item.active')
    this.$items = this.$active.parent().children()

    this.$next = this.$active.next()
    if (!this.$next.length && this.options.wrap) {
      this.$next = this.$items.first();
    }

    this.$prev = this.$active.prev()
    if (!this.$prev.length && this.options.wrap) {
      this.$prev = this.$items.last();
    }

    return this.$active;
  }

  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel
  $.fn.carousel = function () {
    old.apply(this, arguments);
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.carousel.swipe')
      if (!data) $this.data('bs.carousel.swipe', new CarouselSwipe(this))
    })
  }

  $.extend($.fn.carousel, old);

  $.fn.carousel_transition = function (enable) {
    enable = enable ? '' : 'none';
    return this.each(function () {
      $(this)
        .css('-webkit-transition', enable)
        .css('transition', enable)
    })
  };

  /* Navegação Carousel card com touch*/
  $(".carousel").carousel({
    interval: false,
    pause: true
  });


  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    return false;
  });


  /*Flip Card */
  $(".flipCard").on("click", function () {
    $(this).toggleClass('flipped');
  });

}(jQuery);