import './styles/snackbar.css';

class Snackbar {
  constructor() {
    //stvaramo element jer ga nemamo u html-u
    this.snackbar = document.createElement('div');
  }

  init() {
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }

  show(mess) {
    this.snackbar.textContent = mess;
    this.snackbar.classList.add('active');
    setTimeout(() => {
      this.snackbar.classList.remove('active');
    }, 4000);
  }
}

export { Snackbar as default };
