document.addEventListener("DOMContentLoaded", function(){
    const counterElement = document.getElementById("counter")
    const minus = document.querySelector('#minus')
    const plus = document.querySelector('#plus')
    const heart = document.querySelector('#heart')

    let counterInterval = setInterval(counterAction, 1000)
    let resumeCounter = 

    function counterAction() {
        counterElement.innerHTML = parseInt(counterElement.innerHTML, 10) + 1 
    }

    document.addEventListener("click", function(e){
        console.log(e.target.id)
        if (e.target.id === "minus") {
            counterElement.innerHTML = parseInt(counterElement.innerHTML, 10) - 1
        }
        if (e.target.id === "plus") {
            counterElement.innerHTML = parseInt(counterElement.innerHTML, 10) + 1 
        }
        // if (e.target.idName === "heart") {
        //     const likeList = document.querySelector(".likes")
        //     const likeEl = document.createElement("li")

        //     likeEl.innerText = 
        // }
        if (e.target.id === "pause") {
            clearInterval(counterInterval)
            e.target.innerHTML = "resume"
            let currentCount = counterElement.innerHTML
            console.log(currentCount)

            if (e.target.innerHTML === "resume") {
                minus.setAttribute("disabled", false);
                plus.setAttribute("disabled", false);
                heart.setAttribute("disabled", false);

                
                
            }
        }
        
    })
    
})