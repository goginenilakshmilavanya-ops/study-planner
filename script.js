
function addTask() {
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;

    if (task.trim() === "" || date === "") {
        alert("Please enter a task and select a date!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = task + " - " + date;

    checkbox.addEventListener("change", function() {
        span.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
}
