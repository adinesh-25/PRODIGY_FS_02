const API_URL = 'http://localhost:8080/api/employees';

function fetchEmployees() {
  fetch(API_URL)
    .then(res => res.json())
    .then(employees => {
      const list = document.getElementById('employeeList');
      list.innerHTML = '';
      employees.forEach(emp => {
        const div = document.createElement('div');
        div.className = 'employee-card';
        div.innerHTML = `
          <h4>${emp.name} (${emp.department || 'No Dept'})</h4>
          <p>Email: ${emp.email} | Salary: $${emp.salary || 0}</p>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        `;
        list.appendChild(div);
      });
    });
}

function addEmployee(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const department = document.getElementById('department').value;
  const salary = document.getElementById('salary').value;

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, department, salary })
  })
  .then(() => {
    document.getElementById('employeeForm').reset();
    fetchEmployees();
  });
}

function deleteEmployee(id) {
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then(() => fetchEmployees());
}

document.getElementById('employeeForm').addEventListener('submit', addEmployee);
window.onload = fetchEmployees;