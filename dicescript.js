let image1=document.querySelectorAll("img")[0];
let image2=document.querySelectorAll("img")[1];
let playthegame=document.querySelector("#play");
let resetthegame=document.querySelector("#reset");
let change=document.getElementsByClassName("result")[0];
playthegame.addEventListener('click',()=>{
  let randomNumber1=Math.floor(Math.random()*6) + 1;
  let randomNumber2=Math.floor(Math.random()*6) + 1;
  if(randomNumber1===1){
    image1.setAttribute("src","https://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-hi.png");
  }else if(randomNumber1===2){
    image1.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337_960_720.png");
  }else if(randomNumber1===3){
    image1.setAttribute("src","https://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png");
  }else if(randomNumber1===4){
    image1.setAttribute("src","https://th.bing.com/th/id/R.8c13fe34d5f5f71dfc4849bae986f91e?rik=xFm0mcIsXdG5Jg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fr%2fz%2fd%2fa%2fL%2fV%2fdice-4-hi.png&ehk=%2fmmQ4xC3smiagTdmfldmfqpdyHV55cJxp3dut2Kd3Mw%3d&risl=&pid=ImgRaw&r=0");
  }else if(randomNumber1===5){
    image1.setAttribute("src","https://th.bing.com/th/id/R.1ff8b8638ed6f9033d81328ea011521f?rik=8NQQ4JLxJJZleQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fdice-images-1-6-3.png&ehk=w%2fYlRPJtyRPUxiP5dQqRM9EPOYNuxBKTeJ1Unx7hL68%3d&risl=&pid=ImgRaw&r=0");
  }else if(randomNumber1===6){
    image1.setAttribute("src","https://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-hi.png");
  }
  if(randomNumber2===1){
    image2.setAttribute("src","https://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-hi.png");
  }else if(randomNumber2===2){
    image2.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337_960_720.png");
  }else if(randomNumber2===3){
    image2.setAttribute("src","https://www.clker.com/cliparts/M/e/P/O/L/b/dice-3-md.png");
  }else if(randomNumber2===4){
    image2.setAttribute("src","https://th.bing.com/th/id/R.8c13fe34d5f5f71dfc4849bae986f91e?rik=xFm0mcIsXdG5Jg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fr%2fz%2fd%2fa%2fL%2fV%2fdice-4-hi.png&ehk=%2fmmQ4xC3smiagTdmfldmfqpdyHV55cJxp3dut2Kd3Mw%3d&risl=&pid=ImgRaw&r=0");
  }else if(randomNumber2===5){
    image2.setAttribute("src","https://th.bing.com/th/id/R.1ff8b8638ed6f9033d81328ea011521f?rik=8NQQ4JLxJJZleQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fdice-images-1-6-3.png&ehk=w%2fYlRPJtyRPUxiP5dQqRM9EPOYNuxBKTeJ1Unx7hL68%3d&risl=&pid=ImgRaw&r=0");
  }else if(randomNumber2===6){
    image2.setAttribute("src","https://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-hi.png");
  }
  if(randomNumber1>randomNumber2){
    change.innerHTML="Player 1 Wins!";
    change.style.display="flex"
  }
  else if(randomNumber2>randomNumber1){
    change.innerHTML="Player 2 Wins!";
    change.style.display="flex"
  }else{
    change.innerHTML="Tied!";
    change.style.display="flex";
  }
})
resetthegame.addEventListener('click',()=>{
  change.style.display="none";
  image1.setAttribute("src","https://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-hi.png");
  image2.setAttribute("src","https://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-hi.png");
})
