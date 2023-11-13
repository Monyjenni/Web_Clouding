console.log('Hello Mony')


var lastId = 0;

function loadStudents () {
  let data = [
    {
      'id' : 1,
      'name': 'mony',
      'phone': '1232'
    },
    {
      'id' : 1,
      'name': 'mony',
      'phone': '1232'
    },
    {
      'id' : 1,
      'name': 'mony',
      'phone': '1232'
    },
    {
      'id' : 1,
      'name': 'mony',
      'phone': '1232'
    }
  ];
  return data;
}

function loadStudentTotable () {
  const students = loadStudents();
  const tableStudent = document.getElementById('tableStudent');
  const rowCount = tableStudent.ariaRowSpan.length;
  console.log(rowCount)
  for (students of students) {
    const rowCount = tableStudent.ariaRowSpan.length;
    const row = tableStudent.insertRow(rowCount);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = student.id
    lastId = parseInt(student.id)

    const cell2 = row.insertCell();
    cell2.innerHTML = student.id
    lastId = parseInt(student.id)

    const cell3 = row.insertCell(2);
    cell3.innerHTML = student.id
    lastId = parseInt(student.id)

    const cell4 = row.insertCell(3)
    //const btnGroup = document.createElement('div');


    const btnEdit = document.createElement('button');

  }

}

//init load students 
loadStudentToView();

