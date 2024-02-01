let transition = document.querySelector(".transition");
let pages = document.querySelectorAll(".pages")


//moving from page 1 to page 2
transition.addEventListener("click", function(){
     pages[1].style.transform = "translateY(-100%)"
})

//to select the individual elements out of the four

let char = document.querySelectorAll(".character");

char.forEach(function(elem){                            //we used for each because we used querySelectorAll returns a node list which is not an array 
    let image = elem.querySelector("img");                  //selected the image tag inside the div element
     console.log(image)                                     //gives out all the 4 image tags stored in the four parent divs
    //transiton to page 3
    elem.addEventListener("click", ()=>{
        pages[2].style.transform = "translateY(-200%)"
                                                                    // console.log(val.target)
                                                                    // let imageId = valu.target;

        let val = image.getAttribute("src")             //after selecting the image the attribute src of the image tag is selected here that means path of the image used
                                                        // console.log(imageId)
    
        //selecting the image then showing it in the third page
            //creating a new div element
            let random = document.querySelector("#random-game")
            let newElem = document.createElement("img");

            random.appendChild(newElem);
            newElem.setAttribute("src", val);

            //getting to appear the div randomly within the page 3

            let positionX = Math.random() * 1000;       //for the positioning of image in x axis
            let positionY = Math.random() * 1000;       //for the postioning of image in the y axis
            console.log(positionX, positionY)
                random.style.top = positionX + "px"
                random.style.left = positionY + "px"
    })
    })
            //creating the functionality of the game
    let gameStart = document.querySelector(".gamebtn");

    gameStart.addEventListener("click", () => {
        console.log("hello");
    });


    //image ke pas jab cursor jaye to wo randomly apni jgh badal de issei game ki difficulty bdhegi