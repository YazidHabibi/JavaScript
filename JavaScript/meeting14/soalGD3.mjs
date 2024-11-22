function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Tugas 1");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Tugas 2");
      }, 2000);
    });
  }
  
  async function performTasks() {
    var task_1 = await task1();
  
    console.log(task_1);
  
    var task_2 = await task2();
  
    console.log(task_2);
  }
  
  performTasks();