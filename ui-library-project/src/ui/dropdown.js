import './styles/dropdown.css';

class Dropdown {
  constructor(element) {
    this.element = element;
    //dodana su još ova dva objekta
    this.trigger = element.querySelector('.trigger');
    this.content = element.querySelector('.content');
  }

  dropdown() {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      this.content.classList.toggle('active');
    });
  }

  // dropdown() {
  //   this.element.forEach((itterator) => {
  //     itterator.addEventListener('click', (e) => {
  //       let child = e.target.nextElementSibling;
  //       child.classList.add('active');
  //       child.style.display = 'block';

  //       this.hide(child);
  //     });
  //   });
  // }

  // hide(child) {
  //   this.element.forEach((itterator) => {
  //     itterator.addEventListener('click', () => {
  //       if (child.classList.contains('active')) {
  //         child.classList.remove('active');
  //         child.style.display = 'none';
  //         this.dropdown();
  //       }
  //     });
  //   });
  // }
}

export { Dropdown as default };
