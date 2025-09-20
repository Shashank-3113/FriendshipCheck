let yourname = document.getElementById("yourname");
let friendname = document.getElementById("friendname");
let submitbtn = document.getElementById("submitbtn");
let showscore = document.getElementById("showscore");

submitbtn.addEventListener("click", function(){
    if(yourname.value === "" || friendname.value === ""){
        alert("Please enter both names");
        return;
    }
    showscore.innerHTML = "";
    let randomval = Math.round(Math.random()*100);
    let score = document.createElement("h3");
    score.textContent = yourname.value  +  " AND "  +  friendname.value  +  " friendship score is:" + randomval + "% ❤️";
    showscore.appendChild(score);

  let category = document.createElement("p");
    category.style.fontSize = "18px";
    category.style.marginTop = "10px";

    
    if (randomval > 80) {
        category.textContent = "You are BEST FRIENDS! 🥳👯‍♀️";
        category.style.color = "#2ecc71"; 
    } else if (randomval > 50) {
        category.textContent = "You are GOOD FRIENDS! 😊👍";
        category.style.color = "#3498db"; 
    } else if (randomval > 30) {
        category.textContent = "You are FRIENDS. 🙂";
        category.style.color = "#f39c12"; 
    } else {
        category.textContent = "You are STRANGERS😡💔";
        category.style.color = "#e74c3c"; 
    }

    
    showscore.appendChild(score);
    showscore.appendChild(category);
    
    
});