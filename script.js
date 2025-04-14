function changeBgColor() { 
    document.body.style.background = "linear-gradient(to right, red, blue, orange, yellow, green, indigo, red)"; 

}

function showMessage() { 
    alert("Hello! Welcome to my website."); 
    }

 function displayText() {
    document.getElementById("welcome").innerHTML = "Welcome to my website!";
 }

 

 function showMessage() { 
    alert("Jaenigga"); 
}

function changeBgColor() { 
    document.body.style.background = "linear-gradient(to right, yellow, indigo, red, orange, green, blue, violet)"; 
}
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my website!";
}
function changeBgColorUser() {
    let colors = [];
    for (let i = 1; i <= 7; i++) {
        colors.push(document.getElementById("colorInput" + i).value.toLowerCase());
    }

    
    if (colors.includes("gay")) {
        document.body.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
    } else {
        document.body.style.background = "linear-gradient(to right, " + colors.join(", ") + ")";
    }
    if (colors.includes("nigga")) {
        document.body.style.background = "linear-gradient(to right, black, black, black, black, black, black, black)";
    } else {
        document.body.style.background = "linear-gradient(to right, " + colors.join(", ") + ")";
    }
    if (colors.includes("kai")) {
        document.body.style.background = "linear-gradient(to right, black, black, black, black, black, black, black)";
    } else {
        document.body.style.background = "linear-gradient(to right, " + colors.join(", ") + ")";
    }
    
    
}
function checkAge() {
    let age = document.getElementById("ageinput").value;  // 取得使用者輸入的年齡
    if (age) {
        alert("You entered: " + age);  // 顯示使用者輸入的年齡
    } else {
        alert("Please enter your age first!");  // 如果沒輸入年齡，顯示提示訊息
    }
}



function zoomIn(img)
    {img.style.transform="scale(1.2)";
        
    }

function zoomout(img)
    {img.style.transform="scale(1)";}

function toggleFavorite(img) {
    if (img.dataset.favorite === "true") {
        img.style.transform = "scale(1)"; // 回到原尺寸
        img.style.opacity = "0.5"; // 變透明
        img.dataset.favorite = "false"; // 設為未收藏
        setTimeout(() => alert("You unliked this picture"), 100); // 使用 setTimeout 避免阻塞
    } else {
        img.style.transform = "scale(1.5)"; // 放大
        img.style.opacity = "1"; // 完全顯示
        img.dataset.favorite = "true"; // 設為已收藏
        setTimeout(() => alert("You like this picture"), 100); // 使用 setTimeout 避免阻塞
    }
}
     
window.onload = function() {
    let name = prompt("please type your name：");
    if (name) {
        document.getElementById("greeting").innerText = "Hello, " + name + "!";
    } else {
        document.getElementById("greeting").innerText = "Hello, Guest!";
    }
};