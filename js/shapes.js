window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    this.document.getElementById("hello").onclick = sayHello;
    this.document.getElementById("rectangle").onclick = drawRectangle;
    this.document.getElementById("color").onclick = drawColoredRectangle;
    this.document.getElementById("triangle").onclick = drawTriangle;
    this.document.getElementById("smile").onclick = drawFace;
    this.document.getElementById("drawPyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    let validA = false
    while(validA == false){
        let helloResponse = prompt("Message:");
        if(helloResponse.length > 50){
            let confirmA = alert("Your message is too long. Keep it under 50 characters.")
        } else {
            if(helloResponse == null){
                validA = true;
            } else {
                let studentCanvasA = document.getElementById("student-canvas-1");
                let optimizeA = studentCanvasA.getContext("2d");
                optimizeA.clearRect(0,0, 1024, 128);
                if(helloResponse.length <= 50){
                    optimizeA.font = "48px sans-serif";
                    optimizeA.strokeText(helloResponse, 30, 70);
                }
                validA = true;
            }
        }
    }
};


/*
 * Exercise 2.
 */

const drawRectangle = function() {
    let validB = false;
    let nullZ = false;
    while(validB == false){
    let studentCanvasB = document.getElementById("student-canvas-2");
    let optimizeB = studentCanvasB.getContext("2d");
    optimizeB.clearRect(0, 0, 1024, 512);


    let widthNullCheck = prompt("Width");
    let width = Number(widthNullCheck)
    let heightNullCheck = prompt("Height");
    let height = Number(heightNullCheck);
    let xNC = prompt("X");
    let x = Number(xNC);
    let yNC = prompt("Y");
    let y = Number(yNC);
    if(widthNullCheck == null || heightNullCheck == null || xNC == null || yNC == null){
        validB = true;
        nullZ = true;
     }else if(Number.isNaN(width) == true || Number.isNaN(height) == true || Number.isNaN(x) == true ||
      Number.isNaN(y) == true ){
          alert("One of your values is not a number.");
     } else if (width < 1 && width > 1024){
          alert("Your width must be between 1 and 1024.");
     } else if(height < 1 && height > 512){
         alert("Your height must be between 1 and 512.");
     } else if(x < 1){
         alert("Your x-coordinate must be between 1 and 1024.");
     } else if(y < 1){
         alert("Your x-coordinate must be between 1 and 512.");
     } else if(width + x > 1024 || height + y > 1024){
         alert("Your rectangle won't fit on the canvas.");
     }else {
         validB = true;
     }
     if(validB == true && nullZ == false){
         optimizeB.rect(x, y, width, height);
         optimizeB.stroke();
     }
}
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    let validC = false;
    while(validC == false){
        let studentCanvasC = document.getElementById("student-canvas-3");
        let optimizeC = studentCanvasC.getContext("2d");
        optimizeC.clearRect(0, 0, 1024, 128);
        let color = prompt("Color");
        color = color.toLowerCase();
        if(color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" ||
          color == "red" || color ==  "yellow"){
            validC = true;
            optimizeC.rect(10, 10, 100, 50);
            optimizeC.fillStyle = color;
            optimizeC.fillRect(10,10, 100, 50);
        } else if(color == null){
            validC = true;
        } else {
            alert(color + "is not a supported color.");
        }
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
        let validD = false;
        while(validD == false){
            let studentCanvasD = document.getElementById("student-canvas-4");
            let optimizeD = studentCanvasD.getContext("2d");
            optimizeD.clearRect(0, 0, 1024, 512);
            let sidelD = prompt("Side 1"); //roman numerals
            let sidel = Number(sidelD);
            let sidellD = prompt("Side 2");
            let sidell = Number(sidellD);
            let sidelllD = prompt("Side 3");
            let sidelll = Number(sidelllD);
            let heightD;
            let hypoD;
            let baseD;
            if(sidel < sidell){
                holder = sidel;
                sidel = sidell;
                sidell = holder;
            }
            if(sidel < sidelll){
                holder = sidel;
                sidel = sidelll;
                sidelll = holder;
            }
            if(sidell < sidelll){
                holder = sidell;
                sidell = sidelll;
                sidelll = holder;
            }
            hypoD = sidel;
            heightD = sidelll;
            baseD = sidell;
            if(sidel == null || sidell == null || sidelll == null){
                validD = true;
            } else if(Number.isNaN(sidel) == true || Number.isNaN(sidell) == true || Number.isNaN(sidelll) == true){
                alert("One of your sides is not a number.");
            } else if(heightD ** 2 + baseD ** 2 != hypoD ** 2){
                alert("That's not a valid right triangle");
            } else if(sidel < 1 || sidel > 999 || sidell < 1 || sidell > 999 || sidelll < 1 || sidelll > 999){
                alert("Your triangle won't fit on the canvas");
            } else{
                if(heightD ** 2 + baseD ** 2 != hypoD ** 2){
                } else {
                    optimizeD.beginPath();
                    optimizeD.moveTo(25,25);
                    optimizeD.lineTo(25, 25 + heightD);
                    optimizeD.lineTo(25 + baseD, 25 + heightD);
                    optimizeD.lineTo(25,25);
                    optimizeD.stroke();
                    validD = true;
                    }
                }
        }
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
    let validE = false;
    while(validE == false){
        let studentCanvasE = document.getElementById("student-canvas-5");
        let optimizeE = studentCanvasE.getContext("2d");
        optimizeE.clearRect(0, 0, 1024, 512);
        let headRadiE = prompt("Radius");
        let headRadi = Number(headRadiE);
        if(headRadiE == null){
            validE = true;
        } else if(Number.isNaN(headRadi) == true ){
            alert("Your radius is not a number");
        } else if(headRadi < 32 ){
            alert("Your radius must be atleast 32.");
        } else if(headRadi > 256){
            alert("Your smiley face won't fit on the canvas.");
        } else {
            optimizeE.beginPath();
            //circle!!!!
            optimizeE.arc(512, 256, headRadi, 0, 2 * Math.PI, false);
            optimizeE.stroke();
            optimizeE.closePath();
            optimizeE.beginPath();
            //left EYEE!!!!s
            optimizeE.arc( 512 - (headRadi * .4) , 256 - (headRadi * .4) , headRadi * .15, 0,  2 * Math.PI, false);
            optimizeE.stroke();
            optimizeE.closePath();
            optimizeE.beginPath();
            //RIGhT EYE!!!!
            optimizeE.arc(512 + (headRadi * .4), 256 - (headRadi  * .4), headRadi * .15, 0, 2 * Math.PI, false);
            optimizeE.stroke();
            optimizeE.closePath();
            optimizeE.beginPath();
            //smile
            optimizeE.arc(512, 256, headRadi * .7, 0, 1 * Math.PI, false );
            optimizeE.stroke();
            optimizeE.closePath();

            validE = true;
        }




    }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
