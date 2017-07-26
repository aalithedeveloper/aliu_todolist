//To create a list item witn btn attached to it to indicate cancel

var aList = document.getElementsByTagName('li');
for(var i=0;i<aList.length;i++){
	var btn = document.createElement("span");
	var txt = document.createTextNode('\u00d7');
	btn.appendChild(txt);
	aList[i].appendChild(btn);
	btn.className ="closeBtn";
}

// when we click the closeBtn we want it to hide the list item

var hideBtn = document.getElementsByClassName("closeBtn");
for(var x=0;x<hideBtn.length;x++){
	hideBtn[x].onclick =function(){
		var parentDiv = this.parentElement;
		parentDiv.style.display ="none";/*note that alist is the parentElement*/
		
	}
}



//When we click on the Add to list button we want to creat add a new item
function newElement(){
	var newList = document.createElement('li');
	var myValue = document.getElementById('aValue').value;
	var atxt = document.createTextNode(myValue);
	newList.appendChild(atxt);
	if(myValue !== ''){
		document.getElementById('our-list').appendChild(newList);
	}else{
		window.alert("You cannot add empty value to my to-do list ");
	}
	document.getElementById('aValue').value ="";
	var btn = document.createElement("span");
	var txt = document.createTextNode('\u00d7');
	btn.appendChild(txt);
	newList.appendChild(btn);
	btn.className ="closeBtn";
	
	for(var x=0;x<hideBtn.length;x++){
	hideBtn[x].onclick =function(){
		var parentDiv = this.parentElement;
		parentDiv.style.display ="none";/*note that alist is the parentElement*/
		
	}
}
	
}


























