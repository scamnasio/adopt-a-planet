var x, y, A, B, a, A1, a1, B1;
var r1, r2;
var m;
var R;
var dim;


function setup() {
    x = displayWidth; //adjustable
    y = displayHeight; //adjustable
    m =32; //Earth mass ratio of planet
	 createCanvas(x,y); //size of window
    img = loadImage("earth.png");
	
    noStroke();
	background(0);
	frameRate( 15 );
}

function draw() {
    r1 = 5; //radius of earth on screen //fixed
    //R = 3959 * m ; // getting the radius of the exo out of ratio
    r2 = m; //getting pixel radius of exo
    
    if (m > 30) {
      A = x/8;
      B = y/2 ;
      a = 3*x/4;
	    A1 = A + 5*sin(2+ frameCount / 4 );
	    a1 = a + ((10/m)+4)*sin( frameCount / 4 );
	  //B1 = B + 10*sin( frameCount / 4 );
      stroke(0);
      fill(255);
	    background(0);
      imageMode(CENTER);
      image(img, A1, B, r1, r1); 
      //ellipseMode(RADIUS);
      //ellipse(A1, B, r1, r1);
      ellipseMode(RADIUS);
      ellipse(a1, B, r2, r2);
      textSize(30);
      fill(20, 100, 220);
      text("EARTH", A-50, y/20);
      fill(20, 100, 220);
      text("EXOPLANET", a-80, y/20);
    } else if (m <= 1) {
      A = x/4;
      B = y/2 ;
      a = 3*x/4;
	  A1 = A + 5*sin(2+ frameCount / 4 );
	  a1 = a + ((10/m)+4)*sin( frameCount / 4 );
	  //B1 = B + 10*sin( frameCount / 4 );
      stroke(0);
      fill(255);
	  background(0);
      ellipseMode(RADIUS);
      ellipse(A1, B, r1*10, r1*10);
      ellipseMode(RADIUS);
      ellipse(a1, B, r2*10, r2*10);
      textSize(30);
      fill(20, 100, 220);
      text("EARTH", A-50, y/20);
      fill(20, 100, 220);
      text("EXOPLANET", a-80, y/20);
    } else {
      A = x/4;
      B = y/2 ;
      a = 3*x/4;
	  A1 = A + 5*sin(2+ frameCount / 4 );
	  a1 = a + ((10/m)+4)*sin( frameCount / 4 );
	  //B1 = B + 10*sin( frameCount / 4 );
      stroke(0);
      fill(255);
	  background(0);
      ellipseMode(RADIUS);
      ellipse(A1, B, r1, r1);
      ellipseMode(RADIUS);
      ellipse(a1, B, r2, r2);
      textSize(30);
      fill(20, 100, 220);
      text("EARTH", A-50, y/20);
      fill(20, 100, 220);
      text("EXOPLANET", a-80, y/20);
    }
}
