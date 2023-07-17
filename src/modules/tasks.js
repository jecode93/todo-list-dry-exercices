  /* eslint-disable import/no-mutable-exports */
let tasks = [];
tasks = JSON.parse(localStorage.getItem('datas')) ?? [];

export default tasks;