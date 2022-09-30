document.querySelector("form")
    .addEventListener("submit", (e) => {

        e.preventDefault();
        const input = document.querySelector("input");

        e.target.remove();
        
        const h1 = document.createElement("h1");
        h1.textContent = `hey nice to meet you ${input.value}!`;
        document.querySelector(".main").appendChild(h1);

    });
