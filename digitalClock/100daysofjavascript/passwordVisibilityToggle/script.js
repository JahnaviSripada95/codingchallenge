const password = document.querySelector(".password");
const icon = document.querySelector(".icon");
icon.addEventListener("click", ()=>{
    if(icon.classList.contains("fa-eye")){
       password.setAttribute("type" , "text");
    //    icon.classList.remove("fa-eye");
    //    icon.classList.add("fa-eye-slash");
       icon.classList.replace("fa-eye", "fa-eye-slash");
    }else{
        password.setAttribute("type" , "password");
        icon.classList.replace("fa-eye-slash" , "fa-eye");
    }
});