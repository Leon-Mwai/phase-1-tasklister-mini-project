document.addEventListener("DOMContentLoaded", () => {
  // Get form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing the page

      // Get task description
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();
      
      if (taskText === "") return; // Ignore empty tasks

      // Create new task item
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      
      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function() {
          taskList.removeChild(taskItem);
      });
      
      // Append delete button to task item
      taskItem.appendChild(deleteButton);
      
      // Add task to the list
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = "";
  });
});
