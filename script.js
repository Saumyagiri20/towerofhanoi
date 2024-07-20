const towers = [[], [], []];
const towerElements = [document.getElementById('tower1'), document.getElementById('tower2'), document.getElementById('tower3')];

function init() {
    towers[0] = [{ size: 3, element: createDisc(3) }, { size: 2, element: createDisc(2) }, { size: 1, element: createDisc(1) }];
    towers[1] = [];
    towers[2] = [];

    render();
}

function createDisc(size) {
    const disc = document.createElement('div');
    disc.classList.add('disc');
    disc.dataset.size = size;
    disc.innerText = size;
    return disc;
}

function render() {
    towers.forEach((tower, index) => {
        const towerElement = towerElements[index];
        towerElement.innerHTML = '';
        tower.forEach(disc => towerElement.appendChild(disc.element));
    });
}

towerElements.forEach((towerElement, towerIndex) => {
    towerElement.addEventListener('click', () => {
        handleTowerClick(towerIndex);
    });
});

let selectedDisc = null;

function handleTowerClick(towerIndex) {
    const tower = towers[towerIndex];
    if (selectedDisc) {
        if (tower.length === 0 || tower[tower.length - 1].size > selectedDisc.size) {
            tower.push(selectedDisc);
            render();
            selectedDisc = null;
        }
    } else {
        if (tower.length > 0) {
            selectedDisc = tower.pop();
        }
    }
    render();
}

function resetGame() {
    init();
}

init();
