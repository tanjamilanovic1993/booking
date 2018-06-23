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

    $("#studiob").click(function () {
        $("#Fbuttons").collapse('hide');
        $("#Hbuttons").collapse('hide');
    });

    $("#flatb").click(function () {
        $("#Hbuttons").collapse('hide');
        // $('#Fbuttons').collapse('show');
    });

    $("#houseb").click(function () {
        $("#Fbuttons").collapse('hide');
        // $('#Hbuttons').collapse('show');

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

// Active mainb
$("#studiob, #flatb, #houseb, #noc, #hoov, #steamc").on("click", function () {
    var btnklik = $(this);
    btnklik.addClass('bactive');
    btnklik.siblings().removeClass('bactive');
});

//Add counter
$(".add").on("click", function () {
    var  t = $(this);
    t = t.siblings();
    t = t[1];
    var br = t.innerText;
    var prop = br.substr(br.indexOf(' ')+1);//property name
    br = br.substr(0,br.indexOf(' '));//counter
    br++;
    t.innerText = br + " " + prop;
    console.log("Dodata soba " + br);
});

//Substract counter
$(".sub").on("click", function () {
    var  t = $(this);
    t = t.siblings();
    t = t[0];
    var br = t.innerText;
    var prop = br.substr(br.indexOf(' ')+1);//property name
    br = br.substr(0,br.indexOf(' '));//counter
    if( br == 0){
        console.log("Cant go under 0!");
    }
    else{
        br--;
    }
    if((br==0) && (prop=="Bedroom" || prop =="Bathroom" || prop == "Floor")){ //Bed, Bath and Floor cant be less then 1
        br=1
    }
    t.innerText = br + " " + prop;
    console.log("Oduzeta soba " + br);
});





