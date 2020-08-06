class Game{
    
    constructor(){
    
    }

   getGamestate(){
        //gamestste refer 
        var ref = database.ref('gameState');
        ref.on("value",function(data){
            gamestate = data.val();
        })
    }

    updateGameState(state){
    var ref = database.ref('/');
    ref.update({
        gameState:state
    });
    }

   async start(){
        if (gamestate === 0){
            player=new Player()
            player.getPlayerCount();
            form=new Form();
            form.display();
        }
        runner1=createSprite(100,200,50,50);
        runner2=createSprite(200,200,50,50);
        runner3=createSprite(300,200,50,50);

        runner1.addImage(runner_img1);
        runner2.addImage(runner_img2);
        runner3.addImage(runner_img3);
        runners=[runner1,runner2,runner3];
    }
     
    play(){
        form.hide();
        text("PLAY NOW",120,100);
        Player.getAllPlayersInfo();
        if(allplayers!==undefined){
            var y ,x,index;
            index=0;
            x=100;
            for(var plr in allplayers){
              y=displayHeight-allplayers[plr].Distance;
              runners[index].y = y;
              runners[index].x = x;
              x=x+100;
              index=index+1;
              if(index===player.index){
                  runners[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=runners[index-1].y;
              }
            }
        }
           if (keyIsDown(UP_ARROW)&&player.index!==null){
               player.distance=player.distance+50;
               player.updatePlayerInfo();
           }

        drawSprites();

    }


}//class ends here 