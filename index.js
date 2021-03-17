
$(".nav-about").on({
    mouseenter: function () {
        $(".nav-about").css("font-size", "4rem").css("color", "#FF0000");;
    },
    mouseleave: function () {
        $(".nav-about").css("font-size", "1rem");
    }
});
$(".nav-work").on({
    mouseenter: function () {
        $(".nav-work").css("font-size", "4rem").css("color", "yellow");;
    },
    mouseleave: function () {
        $(".nav-work").css("font-size", "1rem");
    }
});
$(".nav-play").on({
    mouseenter: function () {
        $(".nav-play").css("font-size", "4rem").css("color", "yellow");
    },
    mouseleave: function () {
        $(".nav-play").css("font-size", "1rem");
    }
});
