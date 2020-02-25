$(".nav .nav-item").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

let f_calc = 0;

let t_text = ["Macrodrip per hour", "Microdrip per hour", "Macrodrip per minute", "Microdrip per minute"];
let l_tempo = ["hours", "hours", "minutes", "minutes"];
let formula = ["Macrodrip = Volume / (Time * 3)<br>Macrodrip: 20 gtts/mL", "Microdrip = Volume / Time<br>Microdrip: 60 gtts/mL", "Macrodrip = (Volume * 20) / Time<br>Macrodrip: 20 gtts/mL", "Microdrip = (Volume * 60) / Time<br>Microdrip: 60 gtts/mL"];
let d_text = ["Ex: Calculate drip rate for 500 mL of NS to be infused in 4 hours. Input 500 in volume (mL) and 4 in time (hours).",
    "Ex: Calculate drip rate for 500 mL of NS to be infused in 4 hours. Input 500 in volume (mL) and 4 in time (hours).",
    "Ex: Calculate drip rate for 500 mL of NS to be infused in 120 minutes. Input 500 in volume (mL) and 120 in time (minutes).",
    "Ex: Calculate drip rate for 500 mL of NS to be infused in 120 minutes. Input 500 in volume (mL) and 120 in time (minutes)."];

function set_calc(x) {
    f_calc = x;
    document.getElementById("ms_title").innerHTML = t_text[f_calc];
    document.getElementById("ms_form").innerHTML = formula[f_calc];
    document.getElementById("ms_text").innerHTML = d_text[f_calc];
    document.getElementById("lb_tempo").innerHTML = l_tempo[f_calc];
}

function got_calc() {
    let gots = 0;

    let vol = document.getElementById("g_volume").value;
    let tem = document.getElementById("g_tempo").value;

    switch (f_calc) {
        case 0:
            gots = Math.round(vol / (tem * 3));

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Macrodrip = " + vol + "mL / (" + tem + "hour * 3)";
            document.getElementById("t_result").innerHTML = gots + " Macrodrip per minute";

            $("#CalcFeed").modal()
            break;
        case 1:
            gots = Math.round(vol / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Microdrip = " + vol + "mL / " + tem + "hour";
            document.getElementById("t_result").innerHTML = gots + " Microdrip per minute";

            $("#CalcFeed").modal()

            break;
        case 2:
            gots = Math.round((vol * 20) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Macrodrip = (" + vol + "mL * 20) / " + tem + "minutes";
            document.getElementById("t_result").innerHTML = gots + " Macrodrip per minute";

            $("#CalcFeed").modal()

            break;
        case 3:
            gots = Math.round((vol * 60) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Microdrip = (" + vol + "mL * 60) / " + tem + "minutes";
            document.getElementById("t_result").innerHTML = gots + " Microdrip per minute";

            $("#CalcFeed").modal()

            break;
        default:
    }


}