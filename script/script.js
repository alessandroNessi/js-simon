var randomNumbers;
var userNumbers;
document.getElementById("play").addEventListener("mousedown",function(){
    let cards=document.getElementsByClassName("cardFrame");
    
    /*flipping cards frontally*/
    for(let i=0; i<cards.length;i++){
        cards[i].classList.add("flip");
    }

    
});