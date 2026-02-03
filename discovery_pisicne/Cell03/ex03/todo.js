function saveTodos() {
    var todos = [];
    var list = document.querySelectorAll("#ft_list .todo");

    list.forEach(function(item) {
        todos.push(item.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    var cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
    if (!cookie) return;

    var todos = JSON.parse(decodeURIComponent(cookie.split("=")[1]));

    todos.reverse().forEach(function(text) {
        createTodo(text);
    });
}

function createTodo(text) {
    var div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = function() {
        if (confirm("Remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    var list = document.getElementById("ft_list");
    list.prepend(div);

    saveTodos();
}

function newTodo() {
    var text = prompt("Enter a new TO DO");

    if (text && text.trim() !== "") {
        createTodo(text.trim());
    }
}

loadTodos();
