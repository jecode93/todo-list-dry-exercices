let tasks = [];
tasks = JSON.parse(localStorage.getItem('datas')) ?? [];

export default tasks;