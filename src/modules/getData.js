import tasks from "./tasks";

/* eslint-disable no-undef */
export const main = document.querySelector('.container');

const getData = () => {
  tasks;
  main.innerHTML = '';
  /* eslint-disable */
  document.body.appendChild(main);
  /* eslint-enable */
};

export default getData;
