# AI Safety Incident Dashboard

An interactive web-based dashboard that allows users to view, filter, sort, and submit AI safety incident reports. Built with HTML, CSS, and JavaScript.

---

## 🚀 Features
- View a list of AI safety incidents with severity and report date.
- Filter incidents by severity: Low, Medium, High.
- Sort incidents by newest or oldest report date.
- Expand to view full descriptions.
- Submit new incident reports via a form.
- Visual severity tags with styled colors (Red, Yellow, Green).
- Responsive design with hover effects.

---

## 🔧 Installation & Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-safety-dashboard.git
cd ai-safety-dashboard
```

2. **Open the project**
You can open the `index.html` file directly in a browser.

Alternatively, if you are using VS Code:
- Install the Live Server extension.
- Right-click `index.html` → "Open with Live Server".

---

## 📁 Project Structure
```
ai-dashboard/
├── index.html
├── styles.css
├── script.ts
├── script.js 
├── incidents.json 
├── tsconfig.json
└── README.md          # This README file
```

---

## 🛠 Technologies Used
- **HTML5** - Structure
- **CSS3** - Styling (with background image, Flexbox/Grid layout)
- **JavaScript (Vanilla)** - UI interactivity (toggle, filter, sort, submit)

---

## 💡 Design Decisions
- Severity tags are styled to match urgency: Red (High), Yellow (Medium), Green (Low).
- Responsive card layout ensures clean UI on all screen sizes.
- Kept dependencies minimal to ease setup and learning.

---

## 🧠 Challenges
- Ensuring immediate visual update of severity styles after form submission.
- Balancing simplicity of vanilla JS with interactivity and responsiveness.

---

Made with ❤️ by Manish
