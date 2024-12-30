let content = document.getElementById('content');
let changeBtn = document.getElementById('changeBtn');

fetch('./colors.json')
 .then(response => response.json())
 .then(data => {
    let colors = data.colors;
    changeBtn.addEventListener('click', function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        content.style.backgroundColor = randomColor;
    });
 });

