function Ekran330(x) {
    if (x.matches) {
        $("#flatb").addClass('d-flex flex-column');
    }
    else{
        $("#flatb").removeClass('d-flex flex-column');
    }
}

function Ekran465(x) {
    if (x.matches) {
        $("#hoov").addClass('d-flex flex-column');
    }
    else{
        $("#hoov").removeClass('d-flex flex-column');
    }
}
$(document).ready(function () {
    var x = window.matchMedia("(max-width: 330px)");
    Ekran330(x);
    x.addListener(Ekran330);

    var x = window.matchMedia("(max-width: 465px)");
    Ekran465(x);
    x.addListener(Ekran465);


    $('[data-toggle="tooltip"]').tooltip();

    $("#userb").click(function () {
        $("#guestb").collapse('hide');
    });
    $("#guestb").click(function () {
        $("#usertab").collapse('hide');
    });

    $("#studiob").click(function () {
        $("#FHbuttons").collapse('hide');
    });

    $("#flatb").click(function () {
        $('#FHbuttons').collapse('show');
    });

    $("#houseb").click(function () {
        $('#FHbuttons').collapse('show');

    });


});

function CarpetsHide() {
    $("#Cbuttons").collapse('hide');
}

function StageCrumbs1() {
    $("#nav-service-tab").css("background-color", "#3498db");
    $("#booking-form").addClass("madajj");
    $("#nav-contact-tab").css("background-color", "#3498db");
}

function StageCrumbs2() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#fa5ba5");
    $("#nav-service-tab").css("background-color", "#fa5ba5");
    $("#nav-contact-tab").css("background-color", "#3498db");
}


function StageCrumbs3() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#fa5ba5");
    $("#nav-service-tab").css("background-color", "#fa5ba5");
    $("#nav-contact-tab").css("background-color", "#fa5ba5");
}

function OpenService2() {
    $("#nav-service-tab").trigger("click");
    $("#next1").tooltip('dispose');
    $("#next1").tooltip('enable');

}

function OpenService3() {
    $("#nav-contact-tab").trigger("click");
}



