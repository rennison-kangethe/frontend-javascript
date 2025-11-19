// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Rennison',
  lastName: 'Kangethe',
  age: 20,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Lexy',
  lastName: 'Wangari',
  age: 22,
  location: 'Mombasa',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '50%';
  table.style.margin = '20px auto';

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.padding = '8px';
  firstNameHeader.style.backgroundColor = '#f2f2f2';
  firstNameHeader.style.textAlign = 'center';

  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.padding = '8px';
  locationHeader.style.backgroundColor = '#f2f2f2';
  locationHeader.style.textAlign = 'center';

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');

  // Add rows for each student
  studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid #ddd';
    firstNameCell.style.padding = '8px';
    firstNameCell.style.textAlign = 'center';

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid #ddd';
    locationCell.style.padding = '8px';
    locationCell.style.textAlign = 'center';

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Append table to body
  document.body.appendChild(table);
}

// Render table when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
});
