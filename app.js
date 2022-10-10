const boxes = document.querySelectorAll('.expand__box')

function expandBox() {
  if (window.innerWidth <= 992) {
    event.preventDefault();

    if (this.classList.contains('expanded')) {
      this.classList.remove('expanded')
      this.removeAttribute('style', 'height')
    } else {
      const boxHeight = this.querySelector('.box__content').scrollHeight;
      this.classList.add('expanded')
      this.setAttribute('style', `height: ${boxHeight}px`)
    }
  }
}

function onResizeRemoveAttribute() {
  boxes.forEach(box => {
    box.classList.remove('expanded');
    box.removeAttribute('style', 'height');
  })
}

boxes.forEach(box => box.addEventListener('click', expandBox))
window.addEventListener('resize', onResizeRemoveAttribute);