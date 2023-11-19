console.log('Hello Mony')

        var lastId = 0;

        function loadStudents() {
            let data = [
                { 'id': 1, 'name': 'mony', 'phone': '1232' },
                { 'id': 2, 'name': 'mony', 'phone': '1232' },
                { 'id': 3, 'name': 'mony', 'phone': '1232' },
                { 'id': 4, 'name': 'mony', 'phone': '1232' }
            ];
            return data;
        }

        function loadStudentToTable() {
            const students = loadStudents();
            const tableStudent = document.getElementById('tableStudent');
            
            for (const student of students) {
                const rowCount = tableStudent.rows.length;
                const row = tableStudent.insertRow(rowCount);
                
                const cell1 = row.insertCell(0);
                cell1.innerHTML = student.id;
                
                const cell2 = row.insertCell(1);
                cell2.innerHTML = student.name;

                const cell3 = row.insertCell(2);
                cell3.innerHTML = student.phone;
                
                lastId = parseInt(student.id);
            }
        }

        const btnEdit = document.createElement('button');
        btnEdit.setAttribute('button')
        // Initialize by loading students to the table
        loadStudentToTable();
    
loadStudentToView();

