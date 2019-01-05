    // 标题展示
	function show1(){
	document.getElementById("div").style.display="block";
	document.getElementById("div0").style.display="block";
	document.getElementById("div1").style.display="none";

	document.getElementById("button1").setAttribute("class", "active");
	document.getElementById("button2").setAttribute("class", "");

	};
	function show2()
	{
	document.getElementById("div").style.display="none";
	document.getElementById("div0").style.display="none";
	document.getElementById("div1").style.display="block";

	document.getElementById("button1").setAttribute("class", "");
	document.getElementById("button2").setAttribute("class", "active");
	}
		// 价格变化
		function changeprice1(){
		document.getElementById("price1").style.display="block";
		document.getElementById("price2").style.display="none";
		document.getElementById("price3").style.display="none";
		
		document.getElementById("but1").setAttribute("class", "active");
		document.getElementById("but2").setAttribute("class", "");
		document.getElementById("but3").setAttribute("class", "");
		}
		function changeprice2(){
		document.getElementById("price1").style.display="none";
		document.getElementById("price2").style.display="block";
		document.getElementById("price3").style.display="none";
		
		document.getElementById("but1").setAttribute("class", "");
		document.getElementById("but2").setAttribute("class", "active");
		document.getElementById("but3").setAttribute("class", "");
		}
		function changeprice3(){
		document.getElementById("price1").style.display="none";
		document.getElementById("price2").style.display="none";
		document.getElementById("price3").style.display="block";
		
		document.getElementById("but1").setAttribute("class", "");
		document.getElementById("but2").setAttribute("class", "");
		document.getElementById("but3").setAttribute("class", "active");
		}
		
		// 商品数量加减
		function add(){
			    var a=document.getElementById("amountcase").value;
				
				document.getElementById("amountcase").value=++a;			   				
		}
		function minus(){
			    var a=document.getElementById("amountcase").value;
				if(a>1)
					document.getElementById("amountcase").value=--a;		   				
		}