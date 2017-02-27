var vid = document.getElementById("myAudio");
var source="";
function myFunction(id,cn) { 
   
    	
   	source="G:\\AUDIO SONGS\\"+id+".mp3";
	document.getElementById("p").innerHTML="Playing Track :"+id;
	 var randnum = Math.random();
        var inum = 6;
        var rand1 = Math.round(randnum * (inum-1)) + 1;
        var colors = new Array;
        colors[1] = "#385c78";
        colors[2] ="#9d302f";
		colors[3] ="#FCDFE6";colors[4] ="#c25975";colors[5] ="#f69a56";colors[6]="#1ee5c2";
        var color = colors[rand1];
	
	vid.src = source;vid.load();
	if(cn!=undefined&&cn!="")
	{
		vid.src=cn;
	}
    vid.controls=true;	
	document.getElementById("audioContainer").style.boxShadow="10px 10px 1.2em "+color;
	document.getElementById("audioContainer").style.border="9px solid "+color;
	document.getElementById("p").style.font="Times New Roman 1.5em";
	

} 