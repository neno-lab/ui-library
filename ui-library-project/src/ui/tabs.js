import './styles/tabs.css';

class Tabs {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelectorAll('.trigger');
    this.content = element.querySelectorAll('.content');
  }

  tabs() {
    this.trigger.forEach((selectTabs) => {
      selectTabs.addEventListener('click', (e) => {
        this.trigger.forEach((tab) => {
          tab.classList.remove('active');
          e.target.classList.add('active');
        });

        this.content.forEach((item) => {
          item.classList.remove('active');
        });
        const selector = e.target.getAttribute('data-target');
        const content = this.element.querySelector(selector);
        content.classList.add('active');
      });
    });
  }
}

export { Tabs as default };
