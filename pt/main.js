$(".nav .nav-item").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

let f_calc = 0;

let t_text = ["Gotas por hora", "Microgotas por hora", "Gotas por minuto", "Microgotas por minuto"];
let l_tempo = ["horas", "horas", "minutos", "minutos"];
let formula = ["Gotas = Volume / (Tempo * 3)", "Microgotas = Volume / Tempo", "Gotas = (Volume * 20) / Tempo", "Microgotas = (Volume * 60) / Tempo"];
let d_text = ["Ex: Uma infusão de soro fisiológico a 0,9%, 500 ml a ser infundida em 4 horas. Insira o valor de 500 ml e o tempo de 4 horas.",
    "Ex: Uma infusão de soro fisiológico a 0,9%, 500 ml a ser infundida em 4 horas. Insira o valor de 500 ml e o tempo de 4 horas.",
    "Ex: Uma infusão de soro fisiológico a 0,9%, 500 ml a ser infundida em 120 minutos. Insira o valor de 500 ml e o tempo de 120 minutos.",
    "Ex: Uma infusão de soro fisiológico a 0,9%, 500 ml a ser infundida em 120 minutos. Insira o valor de 500 ml e o tempo de 120 minutos."];

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
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Gotas = " + vol + "ml / (" + tem + "horas * 3)";
            document.getElementById("t_result").innerHTML = gots + " Gotas por minuto";

            $("#CalcFeed").modal()
            break;
        case 1:
            gots = Math.round(vol / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Microgotas = " + vol + "ml / " + tem + "horas";
            document.getElementById("t_result").innerHTML = gots + " Microgotas por minuto";

            $("#CalcFeed").modal()

            break;
        case 2:
            gots = Math.round((vol * 20) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Gotas = (" + vol + "ml * 20) / " + tem + "minutos";
            document.getElementById("t_result").innerHTML = gots + " Gotas por minuto";

            $("#CalcFeed").modal()

            break;
        case 3:
            gots = Math.round((vol * 60) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> Microgotas = (" + vol + "ml * 60) / " + tem + "minutos";
            document.getElementById("t_result").innerHTML = gots + " Microgotas por minuto";

            $("#CalcFeed").modal()

            break;
        default:
    }


}