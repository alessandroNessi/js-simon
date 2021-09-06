/*global var */
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

/*return a random number from min to max */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

/* check if a string is in array */
function checkArray(string, array){
    for(let i=0;i<array.length;i++){
        if(string==array[i]){
            array.splice(i,1);
            return true;
        }
    }
    return false;
}
document.getElementById("play").addEventListener("mousedown",function(){
    let cards=document.getElementsByClassName("cardFrame");
    
    /*populate cards numbers */
    for(let i=0;i<cards.length;i++){
        let temp=randomNumber(1,100);    
        while(aiNumbers.includes(temp)){
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
    },2000);

    setTimeout(function(){
        let result=1, num, i=0;
        // alert (userNumbers.length);
        while(result==1 && aiNumbers.length>0){
            num=parseInt(prompt(`inserisci il ${i+1} numero: `));
            if(checkArray(num,aiNumbers)){
                userNumbers.push(num);
                i++;
            }else{
                result=0;
            }
        }
        if(result==1){
            alert("Gj, you won! All the numbers are correct!");
        }else{
            let stringNumbers=userNumbers.join(" , ");
            alert(`You lost! The number ${num} was not in the cards!; ${userNumbers.length}/5 have been insered correctly: ${stringNumbers};`);
        }
        location.reload();
    },2600);
});