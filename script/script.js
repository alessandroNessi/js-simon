/*global var */
var aiNumbers=[];
var userNumbers=[];
var timeout=30000;
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

/*return a random number from min to max */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

/* check if a string is in array */
function checkArray(string, array, cut){
    for(let i=0;i<array.length;i++){
        if(string==array[i]){
            if(cut==true){
                array.splice(i,1);
            }
            return true;
        }
    }
    return false;
}
document.getElementById("play").addEventListener("mousedown",function(){
    let cards=document.getElementsByClassName("cardFrame");
    document.getElementById("play").classList.add("d-none");
    /*populate cards numbers */
    for(let i=0;i<cards.length;i++){
        let temp=randomNumber(1,100);    
        while(checkArray(temp,aiNumbers)){
            temp=randomNumber(1,100);    
        }
        cards[i].getElementsByClassName("number")[0].innerHTML=temp;
        aiNumbers.push(temp);
    }
    
    /*flipping cards frontally*/    
    flipCards(cards,"front");

    /*flip back cards and ask numbers */
    setTimeout(function(){
        flipCards(cards,"back");
    },timeout);

    setTimeout(function(){
        let result=1, num, i=0;
        document.getElementById("inpuNumber").classList.remove("d-none");
        document.getElementById("check").classList.remove("d-none");
        document.getElementById("check").addEventListener("mousedown", function(){
            num=parseInt(document.getElementById("inpuNumber").value);
            console.log(num);
            if(checkArray(num,aiNumbers,true)){
                userNumbers.push(num);
                i++;
            }else{
                result=0;
            }
            if(result==1 && aiNumbers.length==0){
                alert("Gj, you won! All the numbers are correct!");
                location.reload();
            }else if(result==0){
                let stringNumbers=userNumbers.join(" , ");
                alert(`You lost! The number ${num} was not in the cards!; ${userNumbers.length}/5 have been insered correctly: ${stringNumbers};`);
            location.reload();
            }else{
                document.getElementById("inpuNumber").value="";
            }
        });
    },timeout+600);
});