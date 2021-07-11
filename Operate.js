let text="O"
let text1="X"
let turn_text="O Turn";
let count=1;
let match_result="";
let textarea=document.getElementById("textarea");
let a=document.querySelector("#div1");
let b=document.querySelector("#div2");
let c=document.querySelector("#div3");
let d=document.querySelector("#div4");
let e=document.querySelector("#div5");
let f=document.querySelector("#div6");
let g=document.querySelector("#div7");
let h=document.querySelector("#div8");
let i=document.querySelector("#div9");

const myfunc=(control)=>{	
if(control.innerHTML==""){
				if(count%2!=0){				document.getElementById(control.id).innerHTML=text1;
textarea.innerHTML=turn_text;
check_win();
}
else{				document.getElementById(control.id).innerHTML=text;
				textarea.innerHTML="X Turn";
				check_win();
}
count++;
}}

const reset=()=>{
			for(let a=1;a<10;a++){
			document.getElementById("div"+a).innerHTML="";
				}
				
}


const check_win=()=>{
if(a.innerHTML==b.innerHTML && a.innerHTML==c.innerHTML && a.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(a.innerHTML==d.innerHTML && a.innerHTML==g.innerHTML && a.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(a.innerHTML==e.innerHTML && a.innerHTML==i.innerHTML && a.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(b.innerHTML==e.innerHTML && b.innerHTML==h.innerHTML && b.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}	
else if(d.innerHTML==e.innerHTML && d.innerHTML==f.innerHTML && d.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(g.innerHTML==e.innerHTML && g.innerHTML==c.innerHTML && g.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(g.innerHTML==h.innerHTML && g.innerHTML==i.innerHTML && g.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(c.innerHTML==f.innerHTML && c.innerHTML==i.innerHTML && c.innerHTML=="X"){
				match_result="X won";
				alert(match_result);
				reset();
}
else if(a.innerHTML==b.innerHTML && a.innerHTML==c.innerHTML && a.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(a.innerHTML==d.innerHTML && a.innerHTML==g.innerHTML && a.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(a.innerHTML==e.innerHTML && a.innerHTML==i.innerHTML && a.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(b.innerHTML==e.innerHTML && b.innerHTML==h.innerHTML && b.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(d.innerHTML==e.innerHTML && d.innerHTML==f.innerHTML && d.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(g.innerHTML==e.innerHTML && g.innerHTML==c.innerHTML && g.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(g.innerHTML==h.innerHTML && g.innerHTML==i.innerHTML && g.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(c.innerHTML==f.innerHTML && c.innerHTML==i.innerHTML && c.innerHTML=="O"){
				match_result="O won";
				alert(match_result);
				reset();
}
else if(count>=9 && a.innerHTML!="" && b.innerHTML!="" && c.innerHTML!="" && d.innerHTML!="" && e.innerHTML!="" && f.innerHTML!="" && g.innerHTML!="" && h.innerHTML!="" && i.innerHTML!=""){
				match_result="MATCH DRAW";
				alert(match_result);
				reset();
				}
}
