let tasks = [
  {
    taskImage: "task1.jpg",
    taskName: "Feed the dog",
    taskDesc:
      "Feed the dog on time at 9 pm and call the vet for an appointment<br>Important!",
    perLevel: 0,
    deadLine: "27.02.2024",
  },
  {
    taskImage: "task2.jpg",
    taskName: "Grocery Shopping",
    taskDesc:
      "Buy groceries for the week, including fruits, vegetables, and dairy.",
    perLevel: 0,
    deadLine: "2.08.2024",
  },
  {
    taskImage: "task3.jpg",
    taskName: "Doctor's Appointment",
    taskDesc: "Attend the scheduled doctor's appointment at 4 pm.",
    perLevel: 0,
    deadLine: "27.02.2024",
  },
  {
    taskImage: "task4.jpg",
    taskName: "Workout",
    taskDesc:
      "Complete a 90-minute workout session at the gym and make a healthy food",
    perLevel: 0,
    deadLine: "28.05.2024",
  },
  {
    taskImage: "task5.jpg",
    taskName: "Laundry",
    taskDesc: "Complete the laundry and fold clothes !!!!!!!!",
    perLevel: 0,
    deadLine: "27.02.2024",
  },
  {
    taskImage: "task6.jpg",
    taskName: "Read a Book",
    taskDesc: "Read a chapter of 'The Great Gatsby' before bed.",
    perLevel: 0,
    deadLine: "26.09.2024",
  },
  {
    taskImage: "task7.jpg",
    taskName: "Dance Like No One's Watching",
    taskDesc:
      "Have a 15-minute solo dance party in the living room to my favorite songs.",
    perLevel: 0,
    deadLine: "21.06.2024",
  },
  {
    taskImage: "task8.jpg",
    taskName: "Learn JavaScript",
    taskDesc: "complete the Advanced Excercises and practice more",
    perLevel: 0,
    deadLine: "29.02.2024",
  },
  {
    taskImage: "task9.jpg",
    taskName: "Paint a Room",
    taskDesc:
      "Choose a new color and paint the living room walls and the toilete!",
    perLevel: 0,
    deadLine: "29.09.2024",
  },
];
for (let val of tasks) {
  document.getElementById("result").innerHTML += `
   
    <div style="margin-bottom: 10px; ">
      <div class="card" style="width: 22rem;  box-shadow: 5px 10px 18px gray;">
      <div class="card-header bg-transparent border-success d-flex justify-content-between align-items-center">
    <button type="button" class="btn btn-success">Task</button>
    <div>
        <i class="fas fa-bookmark text-secondary me-2" style="cursor: pointer;"></i>
        <i class="fas fa-ellipsis-v text-secondary" style="cursor: pointer;"></i>
    </div>
</div>
        <div class="frame" style="border: 15px solid white; padding: 5px;"> 
          <img src="Pictures/${val.taskImage}" class="card-img-top" alt="blank" style="cursor: pointer;">
        </div>
        <div class="card-body">
          <h5 class="card-title">${val.taskName}</h5>
          <p class="card-text">${val.taskDesc}</p>
          <hr>
          <p class="d-flex align-items-center">
            <i class="fas fa-exclamation-triangle text-danger me-2"></i> 
            Periority level: 
            <span class="num-of-per background bg-success">${val.perLevel}</span>
          </p>
          <p class="d-flex align-items-center">
            <i class="fas fa-calendar-alt text-primary me-2"></i> 
            Deadline: ${val.deadLine}
          </p>
          <hr>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-secondary me-2 priorityBtn">
              <i class="fas fa-flag"></i> Priority
            </button>
            <button type="button" class="btn btn-danger">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button type="button" class="btn btn-success ms-2">
              <i class="fas fa-check"></i> Done
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

let btns = document.querySelectorAll(".priorityBtn");
btns.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (tasks[index].perLevel < 5) {
      tasks[index].perLevel++;
      document.querySelectorAll(".num-of-per")[index].innerText =
        tasks[index].perLevel;
      if (tasks[index].perLevel <= 1) {
        document
          .getElementsByClassName("background")
          [index].classList.add("bg-success");
        document
          .getElementsByClassName("background")
          .classList.remove("bg-danger, bg-warning");
      } else if (tasks[index].perLevel <= 3) {
        document
          .getElementsByClassName("background")
          [index].classList.add("bg-warning");
        document
          .getElementsByClassName("background")
          .classList.remove("bg-danger, bg-success");
      } else {
        document
          .getElementsByClassName("background")
          [index].classList.add("bg-danger");
        document
          .getElementsByClassName("background")
          .classList.remove("bg-success, bg-warning");
      }
    }
  });
});
