const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let i = 0;

btn.addEventListener('click', (e) => {
    if (input.value === "") return;
    createDeleteElements(input.value);
    input.value = "";
})

function createDeleteElements(value) {
    i++;
    console.log(value)

    const btn = document.createElement("button");
    const li = document.createElement("li");

    li.className = "li";
    li.textContent = value;

    btn.className = "btn";
    btn.textContent = "Delete";
    li.appendChild(btn);

    btn.addEventListener("click", (e) => {
        result.removeChild(li);
        i--;
        total.textContent = i;
    })

    li.addEventListener("click", (e) => {
        li.classList.toggle("li-dead");
    })

    total.textContent = i;
    result.appendChild(li)
}