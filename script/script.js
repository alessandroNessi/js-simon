/*global var */
var aiNumbers=[];
var userNumbers=[];
var timeout=3000;
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
    aiNumbers.length=0;
    userNumbers.length=0;
    let cards=document.getElementsByClassName("cardFrame");
    document.getElementById("play").classList.add("d-none");
    document.getElementById("results").classList.add("d-none");
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
        document.getElementById("inpuNumber").classList.remove("d-none");
        document.getElementById("check").classList.remove("d-none");
    },timeout+600);
});

/* checks the numbers */
document.getElementById("check").addEventListener("click", function(){
    var result=1, num, i=0;
    num = parseInt(document.getElementById("inpuNumber").value);
    console.log("num "+num);
    console.log("num "+ document.getElementById("inpuNumber").value);
    console.log("result "+result);
    console.log("aiNumbers.length "+aiNumbers.length);
    document.getElementById("inpuNumber").value="";
    if(checkArray(num,aiNumbers,true)){
        userNumbers.push(num);
        i++;
    }else{
        result=0;
    }
    if(result==1 && aiNumbers.length==0){
        resumeClass();
        document.getElementById("results").innerHTML="Gj, you win!";
    }else if(result==0){
        let stringNumbers=userNumbers.join(" , ");
        resumeClass();
        document.getElementById("results").innerHTML=`You lost! Number "${num}" isn't in the cards! ${userNumbers.length}/5 have been insered correctly: ${stringNumbers};`;
        result=1;
    }
    console.log("num "+num);
    console.log("result "+result);
    console.log("aiNumbers.length "+aiNumbers.length);
});
function resumeClass(){
    document.getElementById("play").classList.remove("d-none");
    document.getElementById("results").classList.remove("d-none");
    document.getElementById("inpuNumber").classList.add("d-none");
    document.getElementById("check").classList.add("d-none");
}