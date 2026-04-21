# Ski Tracker

## Project Description
My Ski Tracker is a multi-page website that allows users to log and track their skiing days throughout the season. Users can record details such as location, date, snow conditions, number of runs, ratings, and personal comments. The website then stores this data locally and displays it in a dynamic dashboard with seasonal statistics.

The project demonstrates full front-end development skills using HTML, CSS, and JavaScript, including responsive design, interactive forms, and persistent data storage.

---

## Features

### Navigation System
- Consistent navigation bar across all pages
- Multi-page structure including:
  - Home page
  - Log Ski Day form page
  - Dashboard (data overview)
  - Conditions guide page

---

### Ski Day Logging Form
- Functional form to input ski day data:
  - Location
  - Date
  - Snow conditions
  - Runs completed
  - Rating (1–5)
  - Optional comments
- JavaScript validation ensures required fields are completed
- Prevents invalid input (e.g., missing rating or negative values)

---

### Data Storage (localStorage + JSON)
- All ski entries are stored in `localStorage`
- Data persists between sessions
- Stored as JSON objects and retrieved dynamically
- Allows users to keep a running season log

---

### Dynamic Dashboard
- Displays all logged ski days
- Allows deletion of entries
- Shows real-time seasonal statistics including:
  - Total ski days
  - Total runs
  - Average rating
  - Most common snow condition
- Uses loops, arrays, and object manipulation in JavaScript

---

### Conditions Page
- Guide explaining snow conditions (Powder, Groomed, Icy, Slushy)
- Uses image grid layout with responsive design
- Dynamically calculates and displays most common conditions from user data

---

### Responsive Design & CSS
- External CSS stylesheet used across all pages
- Flexbox and CSS Grid used for layout design
- Media queries ensure mobile responsiveness
- Clean and consistent UI styling

---

### JavaScript Functionality
- Event handling (form submission, button clicks)
- DOM manipulation (dynamic content rendering)
- Functions, arrays, objects, loops, and conditionals
- Data persistence using localStorage
- Dynamic updates

---

### User Experience
- Clean and intuitive navigation
- Responsive layout for mobile and desktop
- Immediate feedback when logging ski days
- Organized dashboard for easy data tracking

---

## Deployment
This project is deployed using GitHub Pages and runs entirely in the browser.

---

## Course Concepts Demonstrated
- Semantic HTML structure
- Responsive CSS design using Flexbox and Grid
- JavaScript DOM manipulation
- Event-driven programming
- Data structures (arrays and objects)
- Local storage and JSON handling
- Multi-page web application design