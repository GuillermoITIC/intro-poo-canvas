document.addEventListener('DOMContentLoaded', function () {
    const squareCanvas = document.getElementById('squareCanvas');
    const triangleCanvas = document.getElementById('triangleCanvas');
    const happyFaceCanvas = document.getElementById('happyFaceCanvas');
    
    const ctx1 = squareCanvas.getContext('2d');
    const ctx2 = triangleCanvas.getContext('2d');
    const ctx3 = happyFaceCanvas.getContext('2d');
    
    const window_width = 300;
    const window_height = 300;
    
    squareCanvas.width = window_width;
    squareCanvas.height = window_height;
    triangleCanvas.width = window_width;
    triangleCanvas.height = window_height;
    happyFaceCanvas.width = window_width;
    happyFaceCanvas.height = window_height;

    class Circle {
        constructor(x, y, radius, color, text) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.text = text;
        }

        draw(context) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fillStyle = this.color;
            context.fill();
            context.stroke();
            context.fillStyle = "black";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "16px Arial";
            context.fillText(this.text, this.x, this.y);
        }
    }

    // Círculo 1 centrado
    const fixedCircle = new Circle(window_width / 2, window_height / 2, 50, 'red', 'Circle 1');
    fixedCircle.draw(ctx1);

    function animateCircle() {
        ctx2.clearRect(0, 0, window_width, window_height);
        let randomX = Math.random() * window_width;
        let randomY = Math.random() * window_height;
        let randomRadius = Math.floor(Math.random() * 70 + 30);
        const movingCircle = new Circle(randomX, randomY, randomRadius, 'green', 'Circle 2');
        movingCircle.draw(ctx2);
        requestAnimationFrame(animateCircle);
    }

    function drawMultipleCircles() {
        ctx3.clearRect(0, 0, window_width, window_height);
        for (let i = 0; i < 10; i++) {
            let randomRadius = Math.floor(Math.random() * 50 + 20);
            let randomX = Math.random() * (window_width - 2 * randomRadius) + randomRadius;
            let randomY = Math.random() * (window_height - 2 * randomRadius) + randomRadius;
            const circle = new Circle(randomX, randomY, randomRadius, 'blue', i + 1);
            circle.draw(ctx3);
        }
    }

    animateCircle();
    drawMultipleCircles();
    setInterval(drawMultipleCircles, 2000); // Redibuja cada 2 segundos para visualizar múltiples círculos
});
