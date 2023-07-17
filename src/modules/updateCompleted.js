/* eslint-disable import/no-cycle */
import getData from '..';

const updateCompletedTask = (data, descript, checking, i) => {
  if (data[i].completed === false) {
    checking.removeAttribute('checked');
  } else {
    checking.setAttribute('checked', 'checked');
    descript.style.textDecoration = 'line-through';
  }
  checking.addEventListener('change', () => {
    if (checking.checked) {
      descript.classList.add('extra');
    }
    data[i].completed = checking.checked;
    localStorage.setItem('datas', JSON.stringify(data));
    getData();
  });
};

export default updateCompletedTask;