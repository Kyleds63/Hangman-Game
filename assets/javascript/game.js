//--------Create Image array------------//
var createImage = function(src, title){
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img;
};

var images = [];

//--------12 Images for twelve words--------//
images.push(createImage("assets/images/quidditch.jpeg","quidditch"));
images.push(createImage("assets/images/centaur.jpg","centaur"));
images.push(createImage("assets/images/dumbledore.jpg","dumbledore"));
images.push(createImage("assets/images/fang.jpg","fang"));
images.push(createImage("assets/images/goblin.jpg","goblin"));
images.push(createImage("assets/images/harry.jpg","harry"));
images.push(createImage("assets/images/hermione.jpg","hermione"));
images.push(createImage("assets/images/hogwarts copy.jpg","hogwarts copy"));
images.push(createImage("assets/images/ron.jpg","ron"));
images.push(createImage("assets/images/voldermort.jpg","voldermort"));



//----------------Create Array for Words-------------------//

var words =["Quidditch","Centaur","Dumbledore","Fang","Goblin","Harry",
            "Hermione","Hogwarts","Ron","Voldermort"];

//----------------Create Intial Variables------------------//
var  x          = Math.floor(Math.random() * words.length);
var hangWord    = words[x];
var userGuess   = 15;
var wins        = 0;
var userWord    = 0;  //For keeping track of # of letters correctly guessed
var holders     = []; //Empty array for blank spaces
var usedLetters = [];


//-----------Create Variable with Corresponding Letter Pressed-----//
  var grabGuess = document.getElementById("guesses");
  var grabBlank = document.getElementById("blanks");
  var grabMiss  = document.getElementById("miss");
  var grabWins  = document.getElementById("wins");
  var grabPic   = document.getElementById("pic");

//-------------Write Intial Variables to Document------------------//


for(var j=0; j<hangWord.length; j++){
	 holders[j]=" ___ ";
}
grabBlank.innerHTML=holders.join("");

grabGuess.innerHTML = userGuess;
console.log(hangWord);


//---------------------Once Key Pressed----------------------------//
document.onkeyup = function(event) {
    
  var letter      = String.fromCharCode(event.keyCode).toLowerCase();
  var counter     =  0;// 1st for loop counter
  var count       =  0;// 2nd for loop counter
  var stop        =  false;

  for(var k=0;k<usedLetters.length;k++){
    if(letter===usedLetters[k]){
    	alert("Letter has already been guessed dum-dum");
    	stop=true;
    }
  }

  if(stop===false){
    for(var i=0; i<hangWord.length; i++){
  	  if(letter===hangWord.charAt(i)){
  	    userWord++;
  		  holders[i]         ="  "+ letter+"  ";
  		  grabBlank.innerHTML= holders.join("");
  		  count              = 0;
  	  }else{
  	  	count++;
  	  }
  	}
    //Wrong Letter Action
  	if(count==hangWord.length){
  	  userGuess--;
  	  count = 0;
  	  grabGuess.innerHTML = userGuess;
  	  grabMiss.append("  "+letter+"  ");
  	  usedLetters=usedLetters+letter;
  	}

    //--Word--Was--Guessed---------------------// 
    grabPic.innerHTML=images[x];
    if(userWord===hangWord.length){
      x         = Math.floor(Math.random() * words.length);
	    hangWord  = words[x];
	    holders = [];
	    for(var j=0; j<hangWord.length; j++){
	  	   holders[j]=" ___ ";
	    }
	    grabBlank.innerHTML=holders.join("");
	    grabMiss.innerHTML="";
	    userGuess = 15;
	    grabGuess.innerHTML = userGuess;
	    wins++;
	    grabWins.innerHTML=wins;   
	    userWord  = 0;
	    count     = 0;	
	    usedLetters =[];
      }
      //--No--More--Guesses-------------------------// 
      if(userGuess===0){
         x          = Math.floor(Math.random() * words.length);
	     hangWord   = words[x];
	     holders    =  [];
	     for(var j=0; j<hangWord.length; j++){
	  	 holders[j]=" ___ ";
	     }
	     grabBlank.innerHTML=holders.join("");
	     grabMiss.innerHTML="";
	     userGuess  = 15;
	     grabGuess.innerHTML = userGuess;
	     wins       = 0;
	     grabWins.innerHTML=wins;  
	     userWord   = 0;
	     count      = 0;
	     usedLetters =[];
       }
   }
    
  
};


