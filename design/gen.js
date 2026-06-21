// эта функция запускается сразу после загрузки
// привязывание прослушивания события - в конце файла
function initJS(){
	initMenu();
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MENU FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function initMenu(){
	var doors=new Array();
	var outs=new Array();
	var uls=document.getElementsByTagName("ul");
	for(var i=0; i<uls.length; i++){
		if (uls[i] && uls[i].className=='inside'){
			outs[outs.length]=uls[i];
			doors[doors.length]=uls[i].parentNode;
		}
	}
	function showOut(x) {return function(){x.style.display='block'}}
	function hideOut(x) {return function(){x.style.display='none'}}
	for(var i=0; i<doors.length; i++){
		if (document.body.addEventListener){
			doors[i].addEventListener("mouseover", showOut(outs[i]), true);
			doors[i].addEventListener("mouseout", hideOut(outs[i]), true);
		}
		else
		{
			doors[i].onmouseover=showOut(outs[i]);
			doors[i].onmouseout=hideOut(outs[i]);
		}
	}
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! POPUP FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - временно отключено



window.onload=initJS;
