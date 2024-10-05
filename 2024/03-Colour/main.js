function colorGrid() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    for (let i = 0; i < 2500; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = `rgb(255, 255, 255)`;
        div.style.height = "10px";
        div.style.width = "50px";
        div.style.display = "inline-block";
        let main = document.querySelector("main");
        main.appendChild(div);
        div.addEventListener("mousemove", function () {
            r = r >= 255 ? Math.random() * 255 : r;
            g = g >= 255 ? Math.random() * 255 : g;
            b = b >= 255 ? Math.random() * 255 : b;
            div.style.backgroundColor = `rgb(${r++}, ${g++}, ${b++})`;
        });
    }
}

colorGrid();