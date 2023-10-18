const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".fa-regular")
const emoColor = ["Red", "Blue", "lightgreen", "green", "orange"]

updateRating(0)

starsEl.forEach((starEl, index)=>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
    });

});

function updateRating(index){

    starsEl.forEach((starEl, idx)=>{
        if(idx < index + 1){
            starEl.classList.add("active");
        }
        else{
            starEl.classList.remove("active")
        }
    })

    emojisEl.forEach((emo)=>{
        emo.style.transform = `translateX(-${index * 50}px)`;
        emo.style.color = emoColor[index]
    })
}
