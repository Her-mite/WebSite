
	function turn1(){
	document.getElementById("page1").style.display="block";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("page4").style.display="none";
	document.getElementById("page5").style.display="none";

	document.getElementById("change1").setAttribute("class", "active");
	document.getElementById("change2").setAttribute("class", "");
	document.getElementById("change3").setAttribute("class", "");
	document.getElementById("change4").setAttribute("class", "");
	document.getElementById("change5").setAttribute("class", "");
	};
	function turn2()
	{
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="block";
	document.getElementById("page3").style.display="none";
	document.getElementById("page4").style.display="none";
	document.getElementById("page5").style.display="none";

	document.getElementById("change1").setAttribute("class", "");
	document.getElementById("change2").setAttribute("class", "active");
	document.getElementById("change3").setAttribute("class", "");
	document.getElementById("change4").setAttribute("class", "");
	document.getElementById("change5").setAttribute("class", "");
	}
	function turn3()
	{
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="block";
	document.getElementById("page4").style.display="none";
	document.getElementById("page5").style.display="none";

	document.getElementById("change1").setAttribute("class", "");
	document.getElementById("change2").setAttribute("class", "");
	document.getElementById("change3").setAttribute("class", "active");
	document.getElementById("change4").setAttribute("class", "");
	document.getElementById("change5").setAttribute("class", "");
	}
	function turn4()
	{
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("page4").style.display="block";
	document.getElementById("page5").style.display="none";

	document.getElementById("change1").setAttribute("class", "");
	document.getElementById("change2").setAttribute("class", "");
	document.getElementById("change3").setAttribute("class", "");
	document.getElementById("change4").setAttribute("class", "active");
	document.getElementById("change5").setAttribute("class", "");
	}
	function turn5()
	{
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("page4").style.display="none";
	document.getElementById("page5").style.display="block";

	document.getElementById("change1").setAttribute("class", "");
	document.getElementById("change2").setAttribute("class", "");
	document.getElementById("change3").setAttribute("class", "");
	document.getElementById("change4").setAttribute("class", "");
	document.getElementById("change5").setAttribute("class", "active");
	}

function up(){
	var page01 = document.getElementById("page1");
	var page02 = document.getElementById("page2");
	var page03 = document.getElementById("page3");
	var page04 = document.getElementById("page4");
	var page05 = document.getElementById("page5");

	if(page02.style.display =="block"){
		document.getElementById("page1").style.display="block";
		document.getElementById("page2").style.display="none";
		document.getElementById("change1").setAttribute("class", "active");
		document.getElementById("change2").setAttribute("class", "");
	}
	else if(page03.style.display =="block"){
		document.getElementById("page2").style.display="block";
		document.getElementById("page3").style.display="none";
		document.getElementById("change2").setAttribute("class", "active");
		document.getElementById("change3").setAttribute("class", "");		
	}
	else if(page04.style.display =="block"){
		document.getElementById("page3").style.display="block";
		document.getElementById("page4").style.display="none";
		document.getElementById("change3").setAttribute("class", "active");
		document.getElementById("change4").setAttribute("class", "");		
	}
	else if(page05.style.display =="block"){
		document.getElementById("page4").style.display="block";
		document.getElementById("page5").style.display="none";
		document.getElementById("change4").setAttribute("class", "active");
		document.getElementById("change5").setAttribute("class", "");
	}
}
function down(){
	var page01 = document.getElementById("page1");
	var page02 = document.getElementById("page2");
	var page03 = document.getElementById("page3");
	var page04 = document.getElementById("page4");
	var page05 = document.getElementById("page5");

	if(page01.style.display =="block"){
		document.getElementById("page2").style.display="block";
		document.getElementById("page1").style.display="none";
		document.getElementById("change1").setAttribute("class", "");
		document.getElementById("change2").setAttribute("class", "active");
	}
	else if(page02.style.display =="block"){
		document.getElementById("page3").style.display="block";
		document.getElementById("page2").style.display="none";
		document.getElementById("change2").setAttribute("class", "");
		document.getElementById("change3").setAttribute("class", "active");
	}
	else if(page03.style.display =="block"){
		document.getElementById("page4").style.display="block";
		document.getElementById("page3").style.display="none";
		document.getElementById("change3").setAttribute("class", "");
		document.getElementById("change4").setAttribute("class", "active");
	}
	else if(page04.style.display =="block"){
		document.getElementById("page5").style.display="block";
		document.getElementById("page4").style.display="none";
		document.getElementById("change4").setAttribute("class", "");
		document.getElementById("change5").setAttribute("class", "active");
	}
	
}
