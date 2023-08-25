const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
        
        const completeButton = li.querySelector(".completeButton");
        const deleteButton = li.querySelector(".deleteButton");
        
        completeButton.addEventListener("click", completeTask);
        deleteButton.addEventListener("click", deleteTask);
        
        pendingList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask() {
    const taskItem = this.parentElement;
    taskItem.querySelector("span").classList.add("completed");
    completedList.appendChild(taskItem);
    taskItem.removeChild(taskItem.querySelector(".completeButton"));
}

function deleteTask() {
    this.parentElement.remove();
}