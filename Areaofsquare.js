<html>
 <head>
 <Title>Area of a Square</Title>
 </head>
<body>
Base :
 <input type="text" id="Base"/>
 <BR>
 Height: :
 <input type="text" id="Height"/>
 <BR>
   
 <input 
type="button" 
id="btnArea"
onclick="Area();"
value = "Compute"/>
 <div id = "divresult"></div>
 </body>
 
 <script>
function Area(){
var Base = document.getElementById("Base"); 
 var Height = document.getElementById("Height");
var basevalue = Base.value;
var heightvalue = Height.value;
var result = (basevalue*heightvalue)/2;
var divresult=document.getElementById("divresult");
divresult.innerHTML=result;
}
 </script>
 
</html>