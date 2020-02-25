$(".nav .nav-item").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

let f_calc = 0;

let t_text = ["大人用滴下数計算/時", "小児用滴下数計算/時", "大人用滴下数計算/分", "小児用滴下数計算/分"];
let l_tempo = ["時", "時", "分", "分"];
let formula = ["マクロドリップ = 全体の輸液量 ml ÷ (時 × 3)<br>1mlあたり20滴", "マイクロドリップ = 全体の輸液量 ÷ 時<br>1mlあたり60滴", "マクロドリップ = (全体の輸液量 ml × 20) ÷ 分<br>1mlあたり20滴", "マイクロドリップ = (全体の輸液量 ml × 60) ÷ 分<br>1mlあたり60滴"];
let d_text = ["例: 500mlの輸液を4時間かけて投与した場合。量(ml)に500、時間(時)に4を代入して下さい。",
    "例: 500mlの輸液を4時間かけて投与した場合。量(ml)に500、時間(時)に4を代入して下さい。",
    "例: 500mlの輸液を120分かけて投与した場合。量(ml)に500、時間(分)に120を代入して下さい。",
    "例: 500mlの輸液を120分かけて投与した場合。量(ml)に500、時間(分)に120を代入して下さい。"];

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
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> マクロドリップ = " + vol + "ml ÷ (" + tem + "時 × 3)";
            document.getElementById("t_result").innerHTML = gots + " マクロドリップ/分";

            $("#CalcFeed").modal()
            break;
        case 1:
            gots = Math.round(vol / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> マイクロドリップ = " + vol + "ml ÷ " + tem + "時";
            document.getElementById("t_result").innerHTML = gots + " マイクロドリップ/分";

            $("#CalcFeed").modal()

            break;
        case 2:
            gots = Math.round((vol * 20) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> マクロドリップ = (" + vol + "ml * 20) ÷ " + tem + "分";
            document.getElementById("t_result").innerHTML = gots + " マクロドリップ/分";

            $("#CalcFeed").modal()

            break;
        case 3:
            gots = Math.round((vol * 60) / tem);

            document.getElementById("t_message").innerHTML = t_text[f_calc];
            document.getElementById("f_message").innerHTML = formula[f_calc] + "<br> マイクロドリップ = (" + vol + "ml * 60) ÷ " + tem + "分";
            document.getElementById("t_result").innerHTML = gots + " マイクロドリップ/分";

            $("#CalcFeed").modal()

            break;
        default:
    }


}