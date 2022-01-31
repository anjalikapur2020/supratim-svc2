
var bgimg, title, titleimg, play, about, title2, titleimg2, inputbox1,input3value
var gameState = "wait"
var pop1,popimg

function preload() {
    bgimg = loadImage("bg2.PNG")
    titleimg = loadImage("title1.png")
    titleimg2 = loadImage("logo1.png")
    level1bg = loadImage("cave.png")
    popimg=loadImage("pop1.png")

}

function setup() {
    createCanvas(windowWidth - 50, windowHeight - 20)
    pop1=createSprite(width/2,height/2)
    pop1.addImage(popimg)
    pop1.visible=false
    pop1.scale=2

    title = createSprite(width / 2, height - 500)
    title.addImage(titleimg)
    title.visible=false

    title2 = createSprite(width / 2, title.height + 50)
    title2.addImage(titleimg2)
    title2.visible=false

    play = createImg("playnew.png")
    play.position(width / 2 - 35, height - 125)
    play.size(220, 220)
    play.hide()

    about = createImg("how.png")
    about.position(width / 2 - 170, height - 125)
    about.size(220, 220)
    about.hide()

    aboutl1 = createImg("how.png")
    aboutl1.position(width / 2 - 170, height - 125)
    aboutl1.size(220, 220)
    aboutl1.hide()

    head1 = createElement("h2","Riddle 1")
   // head1.html("Riddle 1")
   head1.style("color","yellow")
    head1.position(width / 6, height / 4)
    head1.size(200, 25)
    head1.hide()

    inputbox1 = createInput("Type here to solve Riddle 1 to enter the cave")
    inputbox1.position(width / 4, height / 4)
    inputbox1.size(200, 25)
    inputbox1.hide()


    head2 = createElement("h2","Riddle 2")
    //head2.html()
    head2.style("color","yellow")
    head2.position(width-width/4, height / 4)
    head2.size(200, 25)
    head2.hide()

    inputbox2 = createInput("Type here to solve Riddle 2 to enter the cave")
    inputbox2.position(width-(width / 6), height / 4)
    inputbox2.size(200, 25)
    inputbox2.hide()

    
    head3 = createElement("h2","Riddle 3")
   // head3.html("Riddle 2")
   head3.style("color","yellow")
    head3.position(width/2-100, height-(height/4))
    head3.style.backgroundColor=("#fff")
    head3.size(200, 25)
    head3.hide()

    inputbox3 = createInput("Type here to solve Riddle 2 to enter the cave")
    inputbox3.position(width/2, height-(height/4))
    inputbox3.style(color,"red")
    inputbox3.size(200, 25)
    inputbox3.hide()
    input3value=inputbox3.value()
    console.log(input3value)



    home=createImg("home.png")
    home.position(width / 2 - 170, height - 125)
    home.size(220,220)
    home.hide()
    
  /*  restart=createImg("restart1.png")
    restart.position(width/2-40,height-65)
    restart.size(110,110)*/

    title.visible = false
    title2.visible = false
    play.hide()
    about.hide()

}

function draw() {
    if (gameState === "wait") {
        background(bgimg)
        title.visible = true
        title2.visible = true
        play.show()
        about.show()
       
    }

    if (play.mousePressed(() => {
        gameState = "Level 1"
        background(0)
pop1.visible=false

    }))

    if (about.mousePressed(() => {
        gameState = "about"
        background(bgimg)
        pop1.visible=false
        title.visible=false
        title2.visible=false
        about.hide()
home.show()

    }))
    


        if (gameState === "Level 1") {
            background(level1bg)
            title.visible = false
            title2.visible = false
            play.hide()
            about.hide()
            inputbox1.show()
            head1.show()
            inputbox2.show()
            head2.show()
            head3.show()
            inputbox3.show()
            aboutl1.show()
        }

        if(aboutl1.mousePressed(()=>{
            gameState="aboutlevel1"
        }))
        if(gameState==="aboutlevel1"){
            pop1.visible=true

        }

    drawSprites()

}


function level1() {

}