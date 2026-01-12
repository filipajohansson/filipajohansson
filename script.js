
document.getElementById('year').textContent = new Date().getFullYear();

function toggleCode() {
    var codepic = document.querySelector('.codepic');
    var coding = document.querySelector('.coding');
    if (coding.style.opacity === '0' || coding.style.opacity === '') {
        codepic.style.opacity = '0';
        coding.style.opacity = '1';
    } else {
        codepic.style.opacity = '1';
        coding.style.opacity = '0';
    }
}

    
        (function(){
            const buttons = document.querySelectorAll('.year-btn');
            const panels = document.querySelectorAll('.year-panel');

            function activate(index){
                buttons.forEach((btn, i) => {
                    const selected = i === index;
                    btn.classList.toggle('active', selected);
                    btn.setAttribute('aria-selected', selected ? 'true' : 'false');
                    panels[i].hidden = !selected;
                });
            }

            buttons.forEach((btn, i) => {
                btn.addEventListener('click', () => activate(i));
                btn.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight') {
                        activate((i + 1) % buttons.length);
                        buttons[(i + 1) % buttons.length].focus();
                    } else if (e.key === 'ArrowLeft') {
                        activate((i - 1 + buttons.length) % buttons.length);
                        buttons[(i - 1 + buttons.length) % buttons.length].focus();
                    }
                });
            });
        })();