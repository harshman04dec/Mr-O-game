let randomVariable1=Math.floor((Math.random() * 14) + 1);
let randomVariable2=Math.floor((Math.random() * 14) + 1);
document.querySelector("img").setAttribute("src","images/dice"+randomVariable1+".jpg")
document.querySelector(".img2").setAttribute("src","images/dice"+randomVariable2+".jpg")
let winner=["Random","Chris Dickerson","Samir Bannout","Dexter Jackson ","Brandon Curry","Franko Columbu","Frank Zane","Shawn Rhoden","Jay Cutler","Segio Olivia","Arnold Subhashnagar","Phil Heath","Dorian Yates","Lee Haney","Ronnie Coleman"];




if(randomVariable1>randomVariable2){
  document.querySelector("h1").innerHTML =winner[randomVariable1]+" wins";
}
else if(randomVariable1<randomVariable2){
  document.querySelector("h1").innerHTML = winner[randomVariable2]+" wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
document.querySelector(".plr1").innerHTML =winner[randomVariable1];
document.querySelector(".plr2").innerHTML =winner[randomVariable2];
