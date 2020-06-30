import './styles/tooltip.css';

class Tooltip {
  constructor(element) {
    this.element = element;
    this.mess = element.getAttribute('data-message');
  }
  tooltip() {
    const div = document.createElement('div');
    div.textContent = this.mess;
    div.classList.add('tip');
    this.element.appendChild(div);

    this.element.addEventListener('mouseenter', () => {
      div.classList.add('active');
    });

    this.element.addEventListener('mouseleave', () => {
      div.classList.remove('active');
    });
  }
}

export { Tooltip as default };
