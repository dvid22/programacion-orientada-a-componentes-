// grupo 8: Funcionalidad para agregar y eliminar tarea
document.getElementById('add-task').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value.trim();  // Elimina espacios en blanco
    const table = document.getElementById('task-table-body');
    const taskExists = Array.from(table.rows).some(row => row.cells[0].textContent === taskName);
    
    if (taskName === '') {
        alert('Por favor, ingresa una tarea.');  // Validación de campo vacío
    } else if (taskExists) {
        alert('La tarea ya existe.');  // Validación para evitar duplicados
    } else {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        
        cell1.textContent = taskName;
        cell2.innerHTML = '<button class="delete">Eliminar</button>';
        
        document.getElementById('task-name').value = '';  // Limpiar el campo

        // Funcionalidad para eliminar tarea
        cell2.querySelector('.delete').addEventListener('click', function() {
            table.deleteRow(row.rowIndex - 1);  // Eliminarr la fila correspondiente
        });
    }
});

// Grupo 9: Funcionalidad para eliminar tarea
document.getElementById('task-table-body').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) { //Verificar si el elemento seleccionado se puede eliminar
        const row = event.target.closest('tr'); //Selección del elemento más cercano
        row.remove(); //Eliminar fila o tarea de la tabla
    }
});
