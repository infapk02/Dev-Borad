# 🗂️ DevBoard - Task Management Dashboard

DevBoard is a simple and interactive task management dashboard built with **HTML, Tailwind CSS (DaisyUI)** and **Vanilla JavaScript**.  
It allows users to track assigned tasks, mark them as completed, view completion history, and change the theme background color.

---

## 🚀 Live Features

- ✅ Display assigned & completed task counts
- 🎯 Mark tasks as completed
- 🔒 Disable completed buttons automatically
- 📝 Activity log with timestamp
- 🧹 Clear activity history
- 🎨 Random background color generator
- 📅 Show current date & day
- 📱 Fully responsive layout

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- DaisyUI
- Vanilla JavaScript

---

## 📂 Project Structure

`DevBoard/
│
├── index.html
├── index.js
├── assets/
│ ├── logo.png
│ ├── checkbox.png
│ ├── board.png
│ ├── calender.png
│ └── theme-btn.png
`

---

## ⚙️ How It Works

### 1️⃣ Background Color Changer

- Clicking the color picker icon generates a random RGBA color and applies it to the main container.

- mainContainer.style.backgroundColor = rgbaColor;

### 2️⃣ Show Date & Day

- Automatically displays today’s day and full date.

- Example Output:

- Monday, 27 Jan 2026

### 3️⃣ Task Completion System

- When clicking Complete:

- Assigned tasks decrease by 1

- Completed tasks increase by 1

- Button becomes disabled

- Button text changes to completed

- Activity is added to history

### 4️⃣ Activity Log

- Each completed task adds a log entry with time:

- You have completed Fix Mobile Button Issue at 10:45:32 AM

### 5️⃣ Clear History

- Clicking Clear History removes all activity logs.

## 🧠 JavaScript Concepts Used

- DOM Selection

- Event Delegation

- Event Listeners

- Date Object

- Template Literals

- ClassList

- Closest Element Selection

- Dynamic HTML Rendering

## 👨‍💻 Author

**Infa Ahmed**
Web Designer & Frontend Learner

## ⭐ Support

If you like this project, please give it a star ⭐ on GitHub!
