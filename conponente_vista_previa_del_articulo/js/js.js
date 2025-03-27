const shareButton = document.getElementById ("share-button")
const facebbok  = document.getElementById("button-facebook")
const twitter = document.getElementById("button-titter")
const pinterest = document.getElementById ("button-pinterst")
const showToolTip = document.getElementById("share-box-js")

shareButton.addEventListener ("click", () => {
    showToolTip.classList.toggle("hidden");
})

document.addEventListener("click", (event) =>{
    if(!shareButton.contains(event.target) && !showToolTip.contains(event.target)){
        showToolTip.classList.add("hidden")
    }
})






/*const p = document.createElement('p')
p.innerText = " aca esta un textto de javaScript"

const body = document.querySelector('body')
body.append(p);
*/