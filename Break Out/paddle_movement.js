	$(document).ready(main);
	function main(){
		$('body').keydown(function(event){
			if (event.which == 37) left();
			if (event.which == 39) right(); 
		});
	}	
	function left(){
		console.log("left");
		var x = -14;
		var str_curr = $('.paddle').css('left');
		var len = str_curr.length;
		var curr = parseInt(str_curr.slice(-1*len, -2));
		console.log(curr);
		if (curr >= 0){
			$('.paddle').css('left',curr + x);
			$('.paddle').css('background-color','red');
		}
	}
	function right(){
		console.log("right");
		var x = 14;
		var str_curr = $('.paddle').css('left');
		var len = str_curr.length;
		var curr = parseInt(str_curr.slice(-1*len, -2)); 
		console.log(curr);
		if (curr <= 1202){
			$('.paddle').css('left',curr + x);
			$('.paddle').css('background-color','pink');
		}

	}
