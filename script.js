var gtgt = 1;

function count_rabbits() {
	for(var i=gtgt; i<gtgt+3; i++) {
		var para = document.createElement("button");
		para.id = "b"+i;
		if (i == 1) {
			para.className = "start_horizontal_list_button";
		} 
		if((i >1) && (i < (gtgt+3))) {
			para.className = "center_horizontal_list_button";
		}
		if (i == (gtgt+2)) {
			para.className = "end_horizontal_list_button";
		}
		var node = document.createTextNode("b"+i +"");
		if (document.getElementById("b10") != null) {
			document.getElementById("label").innerHTML = "10";
		}
		para.appendChild(node);
		para.onclick = count_rabbits;//"count_rabbits()";

		var element = document.getElementById("p1");
		element.appendChild(para);
		//alert("Из шляпы достали "+i+" кролика!")
	}
	if(gtgt > 1) {
	document.getElementById("b"+(gtgt-1)).className = "center_horizontal_list_button";
}
	gtgt+=3;
}
