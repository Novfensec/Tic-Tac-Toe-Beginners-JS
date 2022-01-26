let text = "O"
let text1 = "X"
let turn_text = "O Turn";
let count = 1;
let match_result = "";
let textarea = document.getElementById("textarea");
let a = document.querySelector("#div1");
let b = document.querySelector("#div2");
let c = document.querySelector("#div3");
let d = document.querySelector("#div4");
let e = document.querySelector("#div5");
let f = document.querySelector("#div6");
let g = document.querySelector("#div7");
let h = document.querySelector("#div8");
let i = document.querySelector("#div9");

const myfunc = (control) => {
    if (control.textContent == "") {
        if (count % 2 != 0) {
            document.getElementById(control.id).textContent = text1;
            textarea.textContent = turn_text;
            check_win();
        } else {
            document.getElementById(control.id).textContent = text;
            textarea.textContent = "X Turn";
            check_win();
        }
        count++;
    }
}

const reset = () => {
    for (let a = 1; a < 10; a++) {
        document.getElementById("div" + a).textContent = "";
    }
    count = 0;
    textarea.textContent = 'X Turn';
}


const check_win = () => {
    if (a.textContent == b.textContent && a.textContent == c.textContent && a.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (a.textContent == d.textContent && a.textContent == g.textContent && a.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (a.textContent == e.textContent && a.textContent == i.textContent && a.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (b.textContent == e.textContent && b.textContent == h.textContent && b.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (d.textContent == e.textContent && d.textContent == f.textContent && d.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (g.textContent == e.textContent && g.textContent == c.textContent && g.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (g.textContent == h.textContent && g.textContent == i.textContent && g.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (c.textContent == f.textContent && c.textContent == i.textContent && c.textContent == "X") {
        match_result = "X won";
        alert(match_result);
        reset();
    } else if (a.textContent == b.textContent && a.textContent == c.textContent && a.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (a.textContent == d.textContent && a.textContent == g.textContent && a.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (a.textContent == e.textContent && a.textContent == i.textContent && a.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (b.textContent == e.textContent && b.textContent == h.textContent && b.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (d.textContent == e.textContent && d.textContent == f.textContent && d.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (g.textContent == e.textContent && g.textContent == c.textContent && g.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (g.textContent == h.textContent && g.textContent == i.textContent && g.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (c.textContent == f.textContent && c.textContent == i.textContent && c.textContent == "O") {
        match_result = "O won";
        alert(match_result);
        reset();
    } else if (count >= 9 && a.textContent != "" && b.textContent != "" && c.textContent != "" && d.textContent != "" && e.textContent != "" && f.textContent != "" && g.textContent != "" && h.textContent != "" && i.textContent != "") {
        match_result = "MATCH DRAW";
        alert(match_result);
        reset();
    }
}
