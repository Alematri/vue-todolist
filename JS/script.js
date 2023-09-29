const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks:[
        'Fare la spesa',
        'Studiare Vue',
        'Comprare la pappa di Artù'
      ],
      newTask:'',
      isError: false
    }
  },

  methods:{
    addTask(){
      if(this.newTask.length < 5){
        this.isError = true
      }else{
      // aggiungo newTask all'array tasks
      this.tasks.unshift(this.newTask);
      this.newTask = '';
      this.isError = false;
      }
    },
    removeTask(index){
      this.tasks.splice(index, 1)
    }
  },

  computed:{
    tasksUpper(){
      const tasksUp = this.tasks.map(task => {
        return task.toUpperCase();
      });
      return tasksUp;
    }
  }

}).mount('#app');