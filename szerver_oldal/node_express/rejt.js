let gombok = document.querySelectorAll('button');
let kepek = document.querySelectorAll('.kep');
let igaz = [];

gombok.forEach((elem) => {
    igaz.push(false);
});

console.log(igaz);

for (let i = 0; i < gombok.length; i++) {
    gombok[i].addEventListener('click', () => {
        console.log(igaz[i]);
        if (!igaz[i]) {
            for (let j = 0; j < kepek.length; j++) {
                if (i === j) {
                    kepek[j].style.height = 'initial';
                    kepek[j].style.width = 'initial';
                } else {
                    kepek[j].style.display = 'none';
                    gombok[j].setAttribute('disabled', true);
                    gombok[j].style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                    gombok[j].style.cursor = 'auto';
                }
            }
        } else {
            for (let k = 0; k < kepek.length; k++) {
                kepek[k].style.display = 'block';
                kepek[k].style.height = '80px';
                kepek[k].style.width = '100px';
                gombok[k].removeAttribute('disabled');
                gombok[k].style.backgroundColor = 'rgb(0, 0, 255)';
                gombok[k].style.cursor = 'pointer';
            }
        }
        igaz[i] = !igaz[i];
    });
}

for (let i = 0; i < kepek.length; i++) {
    kepek[i].addEventListener('click', () => {
        console.log(igaz[i]);
        if (!igaz[i]) {
            for (let j = 0; j < kepek.length; j++) {
                if (i === j) {
                    kepek[j].style.height = 'initial';
                    kepek[j].style.width = 'initial';
                } else {
                    kepek[j].style.display = 'none';
                    gombok[j].setAttribute('disabled', true);
                    gombok[j].style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                    gombok[j].style.cursor = 'auto';
                }
            }
        } else {
            for (let k = 0; k < kepek.length; k++) {
                kepek[k].style.display = 'block';
                kepek[k].style.height = '80px';
                kepek[k].style.width = '100px';
                gombok[k].removeAttribute('disabled');
                gombok[k].style.backgroundColor = 'rgb(0, 0, 255)';
                gombok[k].style.cursor = 'pointer';
            }
        }
        igaz[i] = !igaz[i];
    });
}
