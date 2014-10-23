var i = 0; /* Set Global Variable i */
function increment(){
	i += 1; /* Function for automatic increment of field's "Name" attribute. */
}


window.onload= function(){
	nameFunction();

}
function nameFunction(){
	var r = document.createElement('span');
	var s = document.createElement('p');

	var y = document.createElement("select");
	var month = new Array("Child", "Your Annual Income", "Spousal Annual Income", "Matrimonial Home", "Marriage Length");

	for (var i=0; i < month.length;++i){
		addOption(y, month[i], month[i]);
 	}

	var z = document.createElement("INPUT");

	y.setAttribute("type", "text");
	y.setAttribute("placeholder", " ");
	z.setAttribute("type", "text");
	z.setAttribute("placeholder", " ");
	var g = document.createElement("IMG");
	g.setAttribute("src", "delete.png");
	// g.setAttribute("height", "20px");
	g.setAttribute("width", "20px");
	increment();
	y.setAttribute("name", "fields");
	increment();
	z.setAttribute("name", "values");
	r.appendChild(y);
	
	r.appendChild(z);
	g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
	r.appendChild(g);
	r.appendChild(s);

	r.setAttribute("id", "id_" + i);
	document.getElementById("myForm").appendChild(r);
}

function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function removeElement(parentDiv, childDiv){
 

     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}



