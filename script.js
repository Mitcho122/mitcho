// script.js
const events = {
  '2023-10-05': 'Training Session on HTML Basics',
  '2023-10-12': 'Workshop on CSS Flexbox',
  '2023-10-19': 'JavaScript Fundamentals Training',
  '2023-10-26': 'Advanced JavaScript Workshop',
};

function createCalendar() {
  const calendar = document.getElementById('calendar');
  const daysInMonth = new Date(2023, 9, 0).getDate(); // October has 31 days
  const firstDay = new Date(2023, 9, 1).getDay();

  // Create empty slots for the days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('div');
      calendar.appendChild(emptyDay);
  }

  // Create day cells for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.textContent = day;
      const date = `2023-10-${day < 10 ? '0' + day : day}`;

      dayCell.addEventListener('click', () => showEventDetails(date));
      calendar.appendChild(dayCell);
  }
}

function showEventDetails(date) {
  const eventInfo = document.getElementById('event-info');
  if (events[date]) {
      eventInfo.textContent = `${events[date]} on ${date}`;
  } else {
      eventInfo.textContent = `No events scheduled for ${date}.`;
  }
}

createCalendar();