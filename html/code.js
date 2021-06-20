function lw(x){
        var xhr = new XMLHttpRequest();
        var y = document.getElementById("o1").innerHTML;
	var out = "";
        if (y === "Enter the image name, tag and the command to run:"){
        	var out = "docker run ";
        }
        if (y === "Enter the name of the container to delete:"){
                var out = "docker rm -f ";
        }
	if (x === undefined){
		var i = out.concat(document.getElementById("in1").value);
	}
	else{
		var i = x;
	}
        xhr.open("GET","http://192.168.43.195/cgi-bin/my.py?x="+i,true);
        xhr.send();
        xhr.onload = function( ){
	var out = xhr.responseText;
	document.getElementById('p1').innerHTML = out;
                }
	document.getElementById('o1').innerHTML = "Write your code here:";
}

function lw1(x){
	document.getElementById('o1').innerHTML = x;
}

function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
}