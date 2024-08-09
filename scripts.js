function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 3 + 2}s`;
    leaf.style.opacity = Math.random();

    document.getElementById('leaf-container').appendChild(leaf);

    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

setInterval(createLeaf, 300);
