$(document).ready(function() {
	console.log($("prlx1").height())
	for (i = 0; i < 700; i++) {
    	var selector = Math.random()
    	if (selector <.01 ){
    		var number = 1 + Math.floor(Math.random() * 100);
    	    var number1 = 1 + Math.floor(Math.random() * 3);
    	}
    	if (.01>=selector <.9){
    		var number = 1 + Math.floor(Math.random() * 2000);
    	    var number1 = 1 + Math.floor(Math.random() * 3);
    	}
    	if (selector >=.99){
    		var number = 1 + Math.floor(Math.random() * 10);
    	    var number1 = 1 + Math.floor(Math.random() * 3);
    	}
    	
        $('<img />', {
          id: 'prlx',
          src: 'img/demo/star_tiny.png',
          css: {
            marginLeft: number,
            marginTop: number1
          }
        }).appendTo('#prlx1');
      }
  
  
	  for (i = 0; i < 500; i++) {
		var selector = Math.random()
		if (selector <.01 ){
			var number = 1 + Math.floor(Math.random() * 100);
		    var number1 = 1 + Math.floor(Math.random() * 50);
		}
	  
		
		if (.01>=selector <.9){
			var number = 1 + Math.floor(Math.random() * 5000);
		    var number1 = 1 + Math.floor(Math.random() * 50);
		}
		if (selector >=.99){
			var number = 1 + Math.floor(Math.random() * 10);
		    var number1 = 1 + Math.floor(Math.random() * 50);
		}
		
	    $('<img />', {
	      id: 'prlx2', 
	      src:"img/demo/star_big.png",
	      css: {
	        marginLeft: number,
	        marginTop: number1
	      }
	    }).appendTo('#prlx2');
	  }  
	  for (i = 0; i < 500; i++) {
			var selector = Math.random()
			if (selector <.01 ){
				var number = 1 + Math.floor(Math.random() * 100);
			    var number1 = 1 + Math.floor(Math.random() * 25);
			}
		  
			
			if (.1>=selector <.9){
				var number = 1 + Math.floor(Math.random() * 2000);
			    var number1 = 1 + Math.floor(Math.random() * 25);
			}
			if (selector >=.99){
				var number = 1 + Math.floor(Math.random() * 10);
			    var number1 = 1 + Math.floor(Math.random() * 25);
			}
			
		    $('<img />', {
		      id: 'prlx3',
		      src: 'img/demo/star_mid.png',
		      css: {
		        marginLeft: number,
		        marginTop: number1
		      }
		    }).appendTo('#prlx3');
		  }
});
	

$('body').live('mousemove', function(e){
    var xPos = e.pageX;
    var yPos = e.pageY;

    $('#prlxmouse').html("x: "+xPos+"<br>y: "+yPos);
    
    $('#prlx1').css({
        marginLeft: -xPos/30,
        marginTop: -yPos/30
    });
    $('#prlx3').css({
        marginLeft: -xPos/8,
        marginTop: -yPos/8
    });
    $('#prlx2').css({
        marginLeft: -xPos/1,
        marginTop: -yPos/1
    });
});

//$(document).ready(function(){
	// makes the div be a specific amount of pixels larger then another
	//<div id = "outsider">
    //<div id = "outside">
	//<div id = "inner">
	//var width = $('#outside').width();
	//var height = $('#outside').height();
	//var changeamount = 20;
	//$('#outsider').css({'width': width + changeamount});
	//$('#outsider').css({'height': height+ changeamount});
	
	//changes inner div to fit the screen size and fit within the outside div
	//$('#inner').css({'width': width - changeamount});
	//$('#inner').css({'height': height - changeamount});
	
	//changes margin top so that the divs are centered within eachother
	//var margintop = changeamount/2;
	//$('#outsider').css({'paddingTop': margintop});
	//$('#outside').css({'paddingTop': margintop});
	//$('#outsider').css({'paddingLeft': margintop});
	//$('#outside').css({'paddingLeft': margintop});
	//$('#inner').css({'marginLeft': margintop/2});
	//$('#inner').css({'marginTop': margintop/2});
//});
