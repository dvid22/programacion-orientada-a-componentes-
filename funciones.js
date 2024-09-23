// grupo 8: Funcionalidad para agregar tarea
document.getElementById('add-task').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    if (taskName !== '') {
        const table = document.getElementById('task-table-body');
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        
        cell1.textContent = taskName;
        cell2.innerHTML = '<button class="delete">Eliminar</button>';
        
        document.getElementById('task-name').value = '';  // Limpiar el campo
    }
});

// Estudiante 10: Funcionalidad para eliminar tarea
document.getElementById('task-table-body').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const row = event.target.closest('tr');
        row.remove();  // Eliminar la fila
    }
});
