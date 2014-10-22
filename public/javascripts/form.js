var i = 0; /* Set Global Variable i */
function increment(){
	i += 1; /* Function for automatic increment of field's "Name" attribute. */
}



function nameFunction(){
	var r = document.createElement('span');
	var s = document.createElement('p');

	var y = document.createElement("INPUT");
	var z = document.createElement("INPUT");

	y.setAttribute("type", "text");
	y.setAttribute("placeholder", " ");
	z.setAttribute("type", "text");
	z.setAttribute("placeholder", " ");
	var g = document.createElement("IMG");
	g.setAttribute("src", "delete.png");
	increment();
	y.setAttribute("aa", "textelement_" + i);
	increment();
	z.setAttribute("aa", "textelement_" + i);
	r.appendChild(y);
	
	r.appendChild(z);
	g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
	r.appendChild(g);
	r.appendChild(s);

	r.setAttribute("id", "id_" + i);
	document.getElementById("myForm").appendChild(r);
}