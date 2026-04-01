window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const button = document.getElementById("MInfo");

    loader.classList.add("hidden");
    
    console.log("button:", button);

    button.onclick = function (){

        button.classList.toggle("active")

        console.log(button)

    }
}); 
