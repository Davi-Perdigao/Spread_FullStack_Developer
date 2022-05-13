var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input");
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

  label.innerText = taskString;

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Editar";
  editButton.className = "editar";
  deleteButton.innerText = "Deletar";
  deleteButton.className = "deletar";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

//Adicionando nova tarefa
var addTask = function () {
  console.log("Adicionando tarefa...");
  var listItem = createNewTaskElement(taskInput.value);

  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
};

//Editando uma tarefa existente
var editTask = function () {
  console.log("Editando tarefa...");
  console.log("Mudar 'editar' para 'salvar'");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
};

//Deletando tarefa
var deleteTask = function () {
  console.log("Deletando tarefa...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

//Marcando tarefa como completa
var taskCompleted = function () {
  console.log("Tarefa Concluída...");

  //Adicionando a tarefa à lista de concluído
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

var taskIncomplete = function () {
  console.log("Tarefa incompleta...");
  //Marcando tarefa como incompleta quando a checkboc está desmarcada
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

var ajaxRequest = function () {
  console.log("AJAX Request");
};

//Setando click para função de adicionar tarefa
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("eventos lista de vinculação");
  //selecionando ListItems children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.editar");
  var deleteButton = taskListItem.querySelector("button.deletar");

  //Vincular editTask ao botão de edição
  editButton.onclick = editTask;
  //Vincular deleteTask ao botão delete
  deleteButton.onclick = deleteTask;
  //Tarefa de vinculação concluída 
  checkBox.onchange = checkBoxEventHandler;
};

//percorre os itens da lista ul incompleta
//para cada item da lista
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  //vincular eventos aos itens da lista children(tasksCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//percorre os itens da lista de ul de concluídas
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //vincular eventos aos itens da lista children(tasksIncompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}