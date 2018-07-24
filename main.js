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
        $("#Fbuttons .reset").trigger( "click" );
        // $('#Fbuttons').collapse('show');
    });

    $("#houseb").click(function () {
        $("#Fbuttons").collapse('hide');
        $("#Hbuttons .reset").trigger( "click" );
        // $('#Hbuttons').collapse('show');

    });
});

function CarpetsHide() {
    $("#Cbuttons").collapse('hide');
}

function StageCrumbs1() {
    $("#nav-service-tab").css("background-color", "#7ecdae");
    $("#booking-form").addClass("madajj");
    $("#nav-contact-tab").css("background-color", "#7ecdae");
}

function StageCrumbs2() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#F57F5B");
    $("#nav-service-tab").css("background-color", "#F57F5B");
    $("#nav-contact-tab").css("background-color", "#7ecdae");
}


function StageCrumbs3() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#F57F5B");
    $("#nav-service-tab").css("background-color", "#F57F5B");
    $("#nav-contact-tab").css("background-color", "#F57F5B");
}

function OpenService2() {
    $("#nav-service-tab").trigger("click");
    $("#next1").tooltip('dispose');
    $("#next1").tooltip('enable');

}

function OpenService3() {
    $("#nav-contact-tab").trigger("click");
}


function promo() {
    var val = $("#redeem").val();
    if(val === "FIVECLEANOFF"){
        $("#promo_li").removeClass("d-none").addClass("d-flex");
    }
    else {
        $("#promo_li").removeClass("d-flex").addClass("d-none");
    }
    console.log("Value of reedem input is " + val);
}


// Active mainb
$("#studiob, #flatb, #houseb, #noc, #hoov, #steamc").on("click", function () {
    var btnklik = $(this);
    btnklik.addClass('bactive');
    btnklik.siblings().removeClass('bactive');
    var t = btnklik.text().trim();

     if(t==="Studio" || t==="Flat" || t==="House" ){
         if(t==="Flat" || t==="House"){
             $("#sproperty").parent().siblings().eq(0).removeClass("d-none").addClass("d-flex");
             $("#sproperty").parent().siblings().eq(1).removeClass("d-none").addClass("d-flex");
             $("#sproperty").parent().siblings().eq(2).removeClass("d-none").addClass("d-flex");

         }
         if(t==="Studio"){
             $("#Fbuttons .reset").trigger( "click" );
             $("#sproperty").parent().siblings().eq(0).removeClass("d-flex").addClass("d-none");
             $("#sproperty").parent().siblings().eq(1).removeClass("d-flex").addClass("d-none");
             $("#sproperty").parent().siblings().eq(2).removeClass("d-flex").addClass("d-none");

         }
             t = t + " Property";
             $("#sproperty").text(t);
     }

     else if(t==="No Carpets" || t==="Hoovered" || t==="Steam Cleaned"){
         if(t==="No Carpets" || t==="Hoovered"){
            $("#Cbuttons .reset").trigger( "click" );
         }
         console.log("Usao je u carpets");
            $("#scarpets").text(t);
     }
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
    if((br==0) && (prop==="Bedroom" || prop ==="Bathroom" || prop === "Floor")){ //Bed, Bath and Floor cant be less then 1
        br=1
    }
    t.innerText = br + " " + prop;
    console.log("Oduzeta soba " + br);
});



// Booking Summary filled when choosing filters
$(".btn-group").on("click", function () {
    var mainb = $(this);
    var id = mainb.attr("id");
    var t = mainb.children().eq(1).text();
    var kids;
    var br;
    if(id[1]==="p"){                                  // is property?
        if(id[0]==="f"){
            t = mainb.children().eq(1).text();
        }
        if(id[0]==="h"){
            t = mainb.children().eq(1).text();
            console.log("T je " + t);
        }
        kids = $("#sproperty").parent().siblings().eq(id[2]-1);// summary element
        br = t.substr(0,t.indexOf(' '));              // num of el. choosen

        // if 0 dont show it and opossite
        if(br == 0){
            kids.removeClass("d-flex").addClass('d-none');
            console.log("Br je jednako 0");
        }
        else if(br != 0){
            kids.children().eq(0).text(t);            // summary element property name
            kids.children().eq(1).text("£" + br * 15);// summary element property price
            kids.removeClass("d-none").addClass("d-flex");
            console.log("Brojac je razlicit od nula" + br )
        }
    }
    else if(id[0]==="c"){                             // is carpets?
        kids = $("#scarpets").parent().siblings().eq(id[1]-1);
        br = t.substr(0,t.indexOf(' '));              // num of el. choosen

        // if 0 dont show it and opossite
        if(br == 0){
            kids.removeClass("d-flex").addClass('d-none');
            console.log("Br je jednako 0");
        }
        else if(br != 0){
            kids.children().eq(0).text(t);            // summary element property name
            kids.children().eq(1).text("£" + br * 15);// summary element property price
            kids.removeClass("d-none").addClass("d-flex");
            console.log("Brojac je razlicit od nula" + br )
        }
    }

    else if(id[0]==="u"){                             // is upholstery?
        kids = $("#supholstery").parent().siblings().eq(id[1]-1);
        br = t.substr(0,t.indexOf(' '));              // num of el. choosen

        // if 0 dont show it and opossite
        if(br == 0){
            kids.removeClass("d-flex").addClass('d-none');
            console.log("Br je jednako 0");
        }
        else if(br != 0){
            kids.children().eq(0).text(t);            // summary element property name
            kids.children().eq(1).text("£" + br * 15);// summary element property price
            kids.removeClass("d-none").addClass("d-flex");
            console.log("Brojac je razlicit od nula" + br )
        }
    }

    else if(id[0]==="e"){                             // is extra?
        kids = $("#sextra").parent().siblings().eq(id[1]-1);
        br = t.substr(0,t.indexOf(' '));              // num of el. choosen

        // if 0 dont show it and opossite
        if(br == 0){
            kids.removeClass("d-flex").addClass('d-none');
            console.log("Br je jednako 0");
        }
        else if(br != 0){
            kids.children().eq(0).text(t);            // summary element property name
            kids.children().eq(1).text("£" + br * 15);// summary element property price
            kids.removeClass("d-none").addClass("d-flex");
            console.log("Brojac je razlicit od nula" + br )
        }
    }
   console.log("Odrajena f-ja");
});

//Reset subButtons to default values
$(".reset").on("click", function () {
    var btngroup = $(this).parent().parent();
    var id = btngroup.attr("id");
    var x = $("#" + id + " .btn-group");
    var i;

    for( i=0; i <= x.length; i++ ){

        var text = x.eq(i).children().eq(1).text();
        var prop  = text.substring(text.indexOf(' ')+1);
        if(prop === "Bedroom" || prop === "Bathroom" || prop === "Floor"){
            prop = "1 "+ prop;
        }
        else{
            prop = "0 "+ prop;
        }
        x.eq(i).children().eq(1).text(prop);        // reseting the value of the button to defaults
        x.eq(i).children().eq(0).trigger( "click" );// trigering click so booking summary is updated indirectly(trig. on sub(-)button)
    }

    console.log("U resetu smo a id je " + id);
});

$("#Ubuttons .btn-group").on("click", function () {
     showBtngroup($(this));
});

$("#Ebuttons .btn-group").on("click", function () {
    showBtngroup($(this));
});


function showBtngroup(obj) {
    btnID = obj.attr("id");
    var btn;
    var sumlist;
    var df;
    var list;
    if(btnID[0]=== "u"){
        list = $("#supholstery").parent().siblings();
        sumlist = $("#upholstery_li");
        df = btngroupVisible(list);
        btn = $("#upholsteryb");
    }
    else if(btnID[0]=== "e"){
        list = $("#sextra").parent().siblings();
        sumlist = $("#extra_li");
        df = btngroupVisible(list);
        btn = $("#extrab");
    }

    if (df!=0){
        sumlist.removeClass("d-none").addClass("d-flex");
        btn.addClass("bactive");
    }
    else if(df==0){
        sumlist.removeClass("d-flex").addClass("d-none");
        btn.removeClass("bactive");
    }
    console.log("Uradjena f-ja df = "+ df);
}

function btngroupVisible(list) {
    var df=0;
    var i;
    for(i=0; i<=5 ; i++){
        if(list.eq(i).hasClass("d-flex")){
            df++;
        }
    }
    return df;
}


