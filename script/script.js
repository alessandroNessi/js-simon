var aiNumbers=[];
var userNumbers=[];
/**function that flip cards */
function flipCards(cards,type){
    if(type=="front"){
        for(let i=0; i<cards.length;i++){
            cards[i].classList.add("flip");
        }
    }else if(type=="back"){
        for(let i=0; i<cards.length;i++){
            cards[i].classList.remove("flip");
        }
    }
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
document.getElementById("play").addEventListener("mousedown",function(){
    let cards=document.getElementsByClassName("cardFrame");
    
    /*populate cards numbers */
    for(let i=0;i<cards.length;i++){
        let temp=randomNumber(1,100);
        cards[i].getElementsByClassName("number")[0].innerHTML=temp;
        aiNumbers.push(temp);
    }
    
    /*flipping cards frontally*/    
    flipCards(cards,"front");

    /*flip back cards and ask numbers */
    setTimeout(function(){
        flipCards(cards,"back");

    },2000);
});