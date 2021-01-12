window.onload = () => {
  const input = document.querySelector('#input');
  input.oninput = function () {
    const value = this.value.trim();
    const list = document.querySelectorAll('.ul li');

    if (value) {
      list.forEach(el => {
        console.log(el.innerText.search(value));
        if (el.innerText.search(value) === -1) {
          el.classList.add('hide');
        }
      });
    } else {
      list.forEach(el => {
        el.classList.remove('hide');
      });
    }
  };
};
