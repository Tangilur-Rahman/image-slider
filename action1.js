

let flag = 2;

let previous = document.getElementById("previous");
let next = document.getElementById("next");

previous.addEventListener("click",function(){

        flag -= 1;
        imageSlide(flag);
});
next.addEventListener("click",function(){

        flag +=1;
        imageSlide(flag);
});


imageSlide(flag);

function imageSlide(number){


    let array = document.getElementsByClassName("img-slider");

       if(number == array.length){
            number = 0;
            flag = 0;
       }else if( number <0){
           number = array.length -1;
           flag = array.length -1;
       }
       
      for (let key of array) {
          key.style.display = "none";
      }
    array[number].style.display = "flex";
}

