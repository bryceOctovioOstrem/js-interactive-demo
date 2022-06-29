console.log("javascript file has been connected");

// sTep 1 grab html elemrnt 

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");
const counterText = document.getElementById("counter");



// change theme
const buttons = document.querySelectorAll(".theme-buttons");
console.log(buttons);

// step 2: write out your function
let count =0;
function increase(){
    count++;
    console.log(count);
    counterText.textContent= count;
}
function decrease(){
    count--;
    console.log(count);
    counterText.textContent= count;
}
function reset(event){
    console.log(event.target.id);
    count=0;
    console.log(count);
    counterText.textContent= count;
}
function selectTheme(event){
    console.log(event.target.textContent);
    let theme = event.target.textContent;
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;
    const buttons2 = document.querySelectorAll("button");
    for(let i=0; i < buttons2.length; i++){
        buttons2[i].className = theme;
    }

}
// step 3 combine step 1 and step 2 with event //listener
plusBtn.addEventListener("click",increase);
minusBtn.addEventListener("click",decrease);
resetBtn.addEventListener("click",reset);

for(let i=0; i < buttons.length; i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click", selectTheme);
}
// facebookBtn.addEventListener("click",selectTheme);