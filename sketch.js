var canvas,backgroundImage;

var playercount = 0;
var gamestate = 0 ;
var allplayers;
var distance=0;

var form , game , player,hurdle;
var database;
var runner1,runner2,runner3;
var runner_img1,runner_img2,runner_img3;

var runners;
var hurdles=[];
var name,input ;

function preload(){
runner_img1=loadImage("person.png");
runner_img2=loadImage("person2.png");
runner_img3=loadImage("person3.png");


}


function setup(){

    createCanvas(displayWidth,displayHeight);


    database=firebase.database();

    runner1 = new Player();
    game=new Game();
    game.getGamestate();
    game.start();

  //input = createInput("name");
  // name = Input.val();
  //console.log(input);
   




}

function draw(){
if (playercount===3){
    game.updateGameState(1);
}
if (gamestate===1){
    clear();
    game.play();
}
//drawSprites();
    
}