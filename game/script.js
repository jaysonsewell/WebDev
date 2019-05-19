
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
    //prize = heroObject(marader,3,2,night);
			alert("hero obtained!! quote");
		break;
		case 2:
    //  prize = heroObject(druid,1,4,day);
			alert("hero obtained");
		break;
		case 3:
    //  prize = heroObject(wizard,1,4,day);
			alert("hero obtained!! luck favors the prepared");
		break;
		case 4:
    //  prize = heroObject(paledin,3,3,day);
			alert("hero obtained");
		break;
    case 5:
    //  prize = heroObject(rogue,3,2,night);
			alert("hero obtained");
		break;
    case 6:
      //prize = heroObject(zombie,1,1,night);
			alert("hero obtained!!!  Aaarrgh");
		break;
    case 7:
      //prize = heroObject(elf,3,3,neutral);
			alert("hero obtained");
		break;
    case 8:
      //prize = heroObject(dragon,5,3,neutral);
			alert("hero obtained");
		break;
    case 9:
//      prize = heroObject(fred,2,2,neutral);
			alert("hero obtained");
		break;
		default:
			alert("error");
		break;
	}
  heroArray.push(prize);
}

function game(x,y){
  //today's prize fights if same bring next on stack
  if(x == y){
    //animation
    //x.heroArray[0] fights y.heroArray[0]
    //
    if(x.heroArray[0] == y.heroArray[0]){
      //x.heroArray[0].pop();
      //y.heroArray[0].pop();

    }
  }
}
function heroObject(n,a,h,p,bp){
  return {heroName: n,
          attack: a,
          health: h,
          power: p,
          boardPosition: bp
        }
}
function writeHeroList(){
  // check database write on to page
}
