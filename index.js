$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(".jumbotronAll").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $("jumbotronAll").css({ height: $(window).height() + "px" });
});
