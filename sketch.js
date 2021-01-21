var ball,database, hball, pos

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    hball=database.ref("ball/position");
    hball.on("value",readPosition,showError);
}

function readPosition(data) {
    pos=data.val();
    console.log(pos);
    hball.x=pos.x;
    hball.y=pos.y;
    console.log(hball.x);
}

function writePosition(x,y) {
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}

function showError() {
    console.log("Error Recognised");
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    //console.log(database);
    drawSprites();
}

// function changePosition(x,y){
//     ball.x = ball.x + x;
//     ball.y = ball.y + y;
// }
