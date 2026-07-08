let generatebtn=document.getElementById("generateBtn");
let colorCode=document.getElementById("colorcode");
let letters="0123456789ABCDEF";
generatebtn.addEventListener("click",function(){
       let randomColor="#";
       for(let i=0;i<6;i++)
       {
            let randomIndex=Math.floor(Math.random()*16);
            randomColor+=letters[randomIndex];
       }
       colorCode.textContent=randomColor;
       document.body.style.backgroundColor=randomColor;
});
