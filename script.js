const inc=document.querySelector("#inc"); //accesing the increase button
const res=document.querySelector("#res"); //accesing the reset button
const dec=document.querySelector("#dec"); //accesing the decrease button
let counts=document.querySelector("#count"); //accesing the count
let count=0; //initializing the count



inc.onclick=function(){ //a function to increase the count
    count++;
    counts.textContent=count;
}
res.onclick=function(){ //a function to reset the count
    count=0;
    counts.textContent=count; //displaying the count
}
dec.onclick=function(){ //a function to decrease the count
    count--;
    counts.textContent=count;
    
}