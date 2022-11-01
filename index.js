function task02() {
    let num = document.getElementById("in_num").value;
    let in_num = document.getElementById("num_in");
    let ex_num = document.getElementById("num_hs");
    let hsl;

    in_num.innerText = num;
    
    if (num >= 90) {
        hsl = "__A__";
    } else if (num >= 80 && num <= 89) {
        hsl = "__B__";
    } else if (num >= 70 && num <= 79) {
        hsl = "__C__"
    } else if (num >= 60 && num <= 69) {
        hsl = "__D__"
    } else if (num <= 59){
        hsl = "__E__";
    }

    ex_num.innerText = hsl;
}

function task03() {
    let num = document.getElementById("in_num").value;
    let in_num = document.getElementById("num_in");
    let ex_num = document.getElementById("num_hs");
    let hsl;

    in_num.innerText = num;

    if (num % 2 == 0) {
        hsl = "Genap";
    } else {
        hsl = "Ganjil";
    }

    ex_num.innerText = hsl;
}

function task04() {
    let num = document.getElementById("in_num").value;
    let in_num = document.getElementById("num_in");
    let ex_num = document.getElementById("num_hs");
    let hsl;

    in_num.innerText = num;    

    if (num % 400 == 0) {
        hsl = "Kabisat";
    } else if (num % 4 == 0 && num % 100 != 0) {
        hsl = "Kabisat";
    } else {
        hsl = "Bukan Kabisat";
    }

    ex_num.innerText = hsl;
}

function task05() {
    let num = document.getElementById("in_num").value;
    let in_num = document.getElementById("num_in");
    let ex_num = document.getElementById("num_hs");
    let rating;

    in_num.innerText = num;    

    if (num >= 21) {
        rating = "__Dewasa__";
    } else if (num >= 13 && num <= 20) {
        rating = "__Remaja__";
    } else if (num >= 9 && num <= 12) {
        rating = "__Bimbingan Orang Tua__";
    } else {
        rating = "__Semua Usia__";
    }

    ex_num.innerText = rating;
}