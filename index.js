document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById('text')
    text.textContent = 'This is really cool!'
})

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is trigered")

