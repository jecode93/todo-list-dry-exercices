import tasks from './tasks.js';

/* eslint-disable no-undef */
export const main = document.querySelector('.container');

const getData = () => {
  /* eslint-disable no-unused-expressions */
  tasks;
  main.innerHTML = '';
  /* eslint-disable */
  document.body.appendChild(main);
  /* eslint-enable */
};

export default getData;
