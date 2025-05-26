main = document.querySelector(".index-content").querySelector(".table")

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

let names = ["MEGA MINER", "Win locker", "My talking destroyer"]
let descriptions =
    ["Лучший и самый незаметный майнер, чтобы зарабатывать на своих знакомых и врагах",
    "Классический винлокер, вымогай деньги с тех, кто должен тебе за булочку в столовой",
        "Превращает компьютер в атомный коллайдер"]

for (let i=0; i<names.length; ++i) {
    let temp = document.createElement("div")
    temp.classList.add("card")

    let title = document.createElement("h3")
    title.innerText = names[i]

    let text = document.createElement("p")
    text.innerText = descriptions[i]

    let btn = document.createElement("form")
    btn.action = `product${i}.html`

    let input = document.createElement("input")
    input.classList.add("go-into")
    input.type="submit"
    input.value="Перейти к продукту"

    btn.appendChild(input)
    temp.appendChild(title)
    temp.appendChild(text)
    temp.appendChild(btn)
    main.appendChild(temp)
}
