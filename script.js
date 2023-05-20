function Selecionar(idSlide){
    if (idSlide==1){
        document.querySelector(".slides").setAttribute("style", "margin-left:0;");
        document.querySelector("#pointer_1").setAttribute("style", "background-color:#fff;");
        document.querySelector("#pointer_2").removeAttribute("style");
        document.querySelector("#pointer_3").removeAttribute("style");
    }else if (idSlide==2){
        document.querySelector(".slides").setAttribute("style", "margin-left:-100vw;");
        document.querySelector("#pointer_1").removeAttribute("style");
        document.querySelector("#pointer_2").setAttribute("style", "background-color:#fff;");
        document.querySelector("#pointer_3").removeAttribute("style");
    }else if (idSlide==3){
        document.querySelector(".slides").setAttribute("style", "margin-left:-200vw;");
        document.querySelector("#pointer_1").removeAttribute("style");
        document.querySelector("#pointer_2").removeAttribute("style");
        document.querySelector("#pointer_3").setAttribute("style", "background-color:#fff;");
    }
}