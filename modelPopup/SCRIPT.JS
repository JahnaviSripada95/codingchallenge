const model = document.querySelector(".model"),
    btn = document.querySelector(".button"),
    close = document.querySelector(".close");


 btn.addEventListener("click" , openModel);
 close.addEventListener("click" , closeModel);
 model.addEventListener("click" , closeModel);



  //open model function

  function openModel(e){
    e.preventDefault();
    model.style.display = "block";
  }

  // close model function 

  function closeModel(){
    model.style.display = "none"; 
  }