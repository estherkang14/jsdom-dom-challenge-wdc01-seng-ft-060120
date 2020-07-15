document.addEventListener("DOMContentLoaded", function(){
    const counterElement = document.getElementById("counter")
    const minus = document.querySelector('#minus')
    const plus = document.querySelector('#plus')
    const heart = document.querySelector('#heart')
    let numOfLikes = 0 

    const form = document.querySelector("#comment-form")

    let counterInterval = setInterval(counterAction, 1000)

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
        if (e.target.id === "heart") {
            const likeList = document.querySelector(".likes")
            const likeEl = document.createElement("li")
            let currentCount = counterElement.innerHTML
            likeEl.setAttribute(`'data-num = ${currentCount}'`)

            likeList.appendChild(likeEl)

            console.log(likeList);
            
            // likeEl.innerText = `${currentCount} has been liked ${numOfLikes} time(s)`
        }

        if (e.target.id === "pause" && e.target.innerText === "pause") {
            clearInterval(counterInterval)
            e.target.innerText = "resume"
            let currentCount = counterElement.innerText
            minus.setAttribute("disabled", false);
            plus.setAttribute("disabled", false);
            heart.setAttribute("disabled", false);
            
            
        } 

        if (e.target.id === "remove")

        // if (e.target.id === "pause" && e.target.innerText === "resume") {
        //     e.target.innerText = "pause"
        //     let currentCount = counterElement.innerText
        //     minus.removeAttribute("disabled", false);
        //     plus.removeAttribute("disabled", false);
        //     heart.removeAttribute("disabled", false);

        // }
       
        
    })
  
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const commentDiv = document.querySelector('div.comments');
        const commentList = document.createElement('p');
        const comment = document.querySelector('#comment-input')

        commentList.innerHTML = `"${comment.value}" <button id="remove"> X </button>`
        commentDiv.appendChild(commentList);
    })


})