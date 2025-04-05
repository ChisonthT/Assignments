function imageChange(){
    /*steps 
    add a transition between them
    */
   
   let container = document.getElementById("carousel1");
   container.style.width = "100vw";
   container.style.height = "40vh";
   container.style.border = "black solid 1px";

   let img1 = document.createElement("img");
   img1.src = "./Assets/Winter.jpg";
   img1.classList.add("seasons");
   let img2 = document.createElement("img");
   img2.classList.add("seasons");
   img2.src = "./Assets/Summer.jpg";
   let img3 = document.createElement("img");
   img3.src = "./Assets/Fall.jpg";
   img3.classList.add("seasons");
   let img4 = document.createElement("img");
   img4.src = "./Assets/Spring.jpg";
   img4.classList.add("seasons");
   
   container.appendChild(img1);
   container.appendChild(img2);
   container.appendChild(img3);
   container.appendChild(img4);
   document.body.appendChild(container);

   let images = document.querySelectorAll("img.seasons");
   
   images.forEach(image => {
    image.style.width = "100vw";
    image.style.height = "40vh";
    image.style.position = "absolute";
    image.style.display = "none";
   });

   let currentImg = 0;
   setInterval(() => {
    images[currentImg].style.display = "block";
    images[currentImg].style.transition = "all 10s ease-in-out";
    
    for(let i = 0; i < images.length; i++){
        if(i !== currentImg){
            images[i].style.display = "none";
        }
    }
    currentImg++;
    if(currentImg >= images.length){
        currentImg = 0;
    }
   }, 3000);
}
function imageChange2(){
    /* load the image */
    let container = document.getElementById("carousel2");
    container.style.width = "100vw";
    container.style.height = "40vh";
    container.style.overflow = "hidden";

    let img = document.createElement("img");
    img.src = "./Assets/Carousel.jpg";
    
    
    container.appendChild(img);
    document.body.appendChild(container);
}


function dropDown(){
    let btn = document.getElementById("dropDown");
    let menu = document.getElementById("dropDownMenu");
    menu.style.listStyleType = "none";
    menu.style.display = "none";
    menu.style.position = "absolute";
    menu.style.backgroundColor = "lightgrey";
    menu.style.margin = "0";
    menu.style.padding = "0";
   
    menu.style.transition = "all 3s ease-in-out";
    menu.style.transitionDuration = "5s";

    let elements = document.querySelectorAll(".btns");
    elements.forEach(element => {
    element.style.background = "none";
    element.style.border = "none";
    element.style.transition = "background-color 0.3s ease";
    });

    btn.addEventListener("click", function(){
        menu.hidden = !menu.hidden;
        if(menu.hidden){
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    })
}

document.body.style.maxWidth = "100vw";
document.body.style.margin = "0";
document.body.style.padding = "0";
dropDown();
imageChange();
imageChange2();