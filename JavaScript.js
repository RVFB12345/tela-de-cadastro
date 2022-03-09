const inputs = document.getElementsByClassName("inputUser");
for(const input of inputs) {
    input.addEventListener("blur", function(){
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
}