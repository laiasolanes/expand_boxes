const boxes = document.querySelectorAll('.expand__box')

console.table(boxes)

function expandBox() {
  event.preventDefault();

  if (this.classList.contains('expanded')) {
    this.classList.remove('expanded')
    this.setAttribute('style', 'height: 7rem')
  } else {
    const boxHeight = this.querySelector('.box__content').scrollHeight;
    this.classList.add('expanded')
    this.setAttribute('style', `height: ${boxHeight}px`)

  }

  // this.classList.toggle('expanded');
  console.log(this.scrollHeight)
}

boxes.forEach(box => box.addEventListener('click', expandBox))