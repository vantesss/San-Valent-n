document.getElementById("si").addEventListener("click", function() {
    document.getElementById("lluvia").style.display = "block";
    startConfetti();
    startEmojiRain();
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// 🎉 Explosión de confeti en forma de corazón
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: Math.random() * 8 + 2,
            speedX: (Math.random() - 0.5) * 10,
            speedY: (Math.random() - 0.5) * 10,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// 🌸 Lluvia de emojis 🎀💘🌹
function startEmojiRain() {
    const emojis = ["🎀", "💘", "🌹"];
    const emojiContainer = document.getElementById("emojiLluvia");

    for (let i = 0; i < 30; i++) {  
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 2 + 1) + "s";  

        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
}