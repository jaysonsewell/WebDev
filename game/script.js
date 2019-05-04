
var coins;
var hero[];

// function ad(){
//   //show ad
// }
function dailyPrize(){

  // ad();
  let random = Math.floor((Math.random() * 3) + 1);
  if(random == 1){
    coins++;
  }else if(random == 2){
    coins += 2;
  }else{
    coins += 3;
  }
}
function buyObject(){
  let random = Math.floor((Math.random() * 10) + 1);
  //var userScore = score.value;

	switch(random){
		case 1:
    //prize = heroObject(marader,3,2);
			alert("D for you!");
		break;
		case 2:
    //  prize = heroObject();
			alert("C for you!");
		break;
		case 3:
    //  prize = heroObject();
			alert("B for you!");
		break;
		case 4:
    //  prize = heroObject();
			alert("A for you!");
		break;
    case 5:
    //  prize = heroObject();
			alert("A for you!");
		break;
    case 6:
      //prize = heroObject();
			alert("A for you!");
		break;
    case 7:
      //prize = heroObject();
			alert("A for you!");
		break;
    case 8:
      //prize = heroObject();
			alert("A for you!");
		break;
    case 9:
			alert("A for you!");
		break;
		default:
			alert("Thats not a case!");
		break;
	}
  hero.push(prize);
}
function heroObject(n,a,h){
  return {heroName: n,
          attack: a,
          health: h
        }
}
function writeHeroList(){
  // check database write on to page
}
