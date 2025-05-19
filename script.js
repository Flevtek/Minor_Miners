let about = document.querySelector('.about_us')
let miners = document.querySelector('.miner_types')
let qna = document.querySelector('.QnA')
let support = document.querySelector('.support')

about.addEventListener('click', function(){
    window.location.href = "index.html"
})
miners.addEventListener("click", function(){
    window.location.href = "list.html"
})
support.addEventListener("click", function(){
    window.location.href = "support.html"
})
