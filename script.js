main = document.querySelector(".table")

let names = ["MEGA MINER", "Winlocker", "My talking destroyer"]
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

    let btn = document.createElement("button")
    text.innerText = "Перейти к продукту"

    temp.appendChild(title)
    temp.appendChild(text)
    temp.appendChild(btn)
    main.appendChild(temp)
}