
function main() {
    const phrases = [
        ["When", "things", "go", "completely", "unstable."],
        ["It's", "a", "matter", "of", "time."],
        ["Until", "then", "it", "remains", "to", "be", "seen."],
        ["If", "anything", "would", "allow", "it", "to", "happen."],
        ["Like", "finding", "yourself", "out", "of", "a", "dream", "again."],
        ["Should", "beautiful", "things", "fly", "out", "of", "control."],
        ["Maybe", "the", "dance", "was", "always", "all", "we", "had."],
    ]

    const addWordsRandomlyToDOM = (phrases) => {
        const container = document.getElementById("container");
        phrases.forEach((phrase) => {
            const p = document.createElement("p")
            phrase.forEach((word) => {
                const span = document.createElement("span")
                span.textContent = word + " "
                const blackOrWhite = Math.random() > 0.5 ? "black" : "white"
                span.style.color = blackOrWhite;
                p.appendChild(span)
            })
            container.appendChild(p)
        })
    }

    addWordsRandomlyToDOM(phrases)
}

main()

document.body.addEventListener("mousedown", () => {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
        span.style.color = span.style.color === "white" ? "black" : "white";
    })
});
document.body.addEventListener("mouseup", () => {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
        span.style.color = span.style.color === "black" ? "white" : "black";
    })
});