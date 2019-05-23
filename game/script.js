
var coins;
var heroArray = [];
//create a map every month
//bot accounts mixed with players and winner gets prize.
//tile boards hexagon(masterofmonsters)
//night and day buffs.  longrange vs shortrange
//terrian buffs.
//monsters/heros can upgrade lvl
// function ad(){}
// ads for ig accounts
//   //show ad
$('#myAccountForm').hide();
$('#createAccount').on('click', createAccount);
$('#user').html(userName);

function login(){
  $('#myAccountForm').show();
  //check for auth.
  //if(){}
  //check server and display contents
  //homescreen
}

function createAccount(){
  $('#myAccountForm').show();
  //create account object{
  //   userName: 'x';
  //   password: 'x';
  //   heroArray: '[]';
  //   coins:  'x';
  //   gameFilterMode: 'x';
  //}
}

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

	switch(random){
		case 1:
    //prize = heroObject(marader,2,night,0);
			alert("hero obtained!! fire and blood as my guide");
		break;
		case 2:
    //  prize = heroObject(druid,2,day,0);
			alert("hero obtained!! i am the winds of change");
		break;
		case 3:
    //  prize = heroObject(wizard,2,day,0);
			alert("hero obtained!! luck favors the prepared");
		break;
		case 4:
    //  prize = heroObject(paledin,2,day,0);
			alert("hero obtained!! Darkness cannot drive out darkness: only my shiny pecks");
		break;
    case 5:
    //  prize = heroObject(rogue,2,night,0);
			alert("hero obtained!! i will die knowing i have lived today");
		break;
    case 6:
      //prize = heroObject(zombie,1,night,0);
			alert("hero obtained!!!  Aaarrgh");
		break;
    case 7:
      //prize = heroObject(elf,2,neutral,0);
			alert("hero obtained!! learn as if you were to live forever");
		break;
    case 8:
      //prize = heroObject(dragon,3,neutral,0);
			alert("hero obtained!! A legend is born");
		break;
    case 9:
//      prize = heroObject(fred,2,neutral,0);
			alert("hero obtained!! i am fred");
		break;
		default:
			alert("error");
		break;
	}
  heroArray.push(prize);
}

function game(x,y){
  //today's prize fights if same bring next on stack
  if(x > y){
    //y.pop();
    //x.lvl++;
    // if(x.lvl == 2){
    //   x.attack++;
    //   x.lvl = 0;
    //    evolve(x):
    // }
  }else if(x < y){
    //x.pop();
    //y.lvl++;
    // if(y.lvl == 2){
    //   y.attack++
    //   y.lvl = 0
    //    evolve(y):
    // }
  }else{
    if(x == y){
      //animation
      //x.heroArray[0] fights y.heroArray[0]
      //
      if(x.heroArray[0] == y.heroArray[0]){
        //x.heroArray[0].pop();
        //y.heroArray[0].pop();

      }else if(x.heroArray[0] > y.heroArray[0]){
        //y.heroArray[0].pop();
        //x.heroArray[0].lvl++
        // if(x.heroArray[0].lvl == 2){
        //   x.heroArray[0].attack++
        //   x.heroArray[0].lvl = 0
        //    evolve(y.heroArray[0]):
        // }
      }else{
        //x.heroArray[0].pop();
        //y.heroArray[0].lvl++
        // if(y.lvl == 2){
        //   y.heroArray[0].attack++
        //   y.heroArray[0].lvl = 0
        //    evolve(y.heroArray[0]):
        // }
      }
    }
  }
}
function heroObject(n,a,h,p,lvl){
  return {heroName: n,
          attack: a,
          power: p,
          heroLevel: lvl
        }
}
function writeHeroList(){
  // check database write on to page
}
function map(){

}
function evolve(eve){

  switch(eve.name){
    case "marader":
    //prize = heroObject(maraderHero,5,night,0);
      alert("hero obtained!! fire and blood as my guide");
    break;
    case "druid":
    //  prize = heroObject(druidHero,5,day,0);
      alert("hero obtained!! i am the winds of change");
    break;
    case "wizard":
    //  prize = heroObject(wizardHero,5,day,0);
      alert("hero obtained!! luck favors the prepared");
    break;
    case "paledin":
    //  prize = heroObject(paledinHero,5,day,0);
      alert("hero obtained!! Darkness cannot drive out darkness: only my shiny pecks");
    break;
    case "rogue":
    //  prize = heroObject(rogueChampion,5,night,0);
      alert("hero obtained!! i will die knowing i have lived today");
    break;
    case "zombie":
      //prize = heroObject(zombieHoard,3,night,0);
      alert("hero obtained!!!  Aaarrgh");
    break;
    case "elf":
      //prize = heroObject(elfWarrior,5,neutral,0);
      alert("hero obtained!! learn as if you were to live forever");
    break;
    case "dragon":
      //prize = heroObject(Frostdragon,6,neutral,0);
      alert("hero obtained!! A legend is born");
    break;
    case "fred":
//      prize = heroObject(Tom,5,neutral,0);
      alert("hero obtained!! i am fred");
    break;
    default:
      alert("error");
    break;
  }
  eve = prize;
}
