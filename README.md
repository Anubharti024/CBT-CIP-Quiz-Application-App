# 🧠 Quiz Application (React Native)

A fully interactive and dynamic **Quiz Application** built with **React Native & TypeScript**, designed to deliver a smooth, engaging, and responsive quiz experience across multiple categories.

---

## 📌 Overview

This application allows users to:

* Select quiz categories
* Choose the number of questions
* Answer timed questions
* Track real-time progress
* View final score with feedback

The app is optimized for performance and user experience, featuring a **clean UI, timed interactions, and dynamic question rendering**.

---

## 🚀 Features

### 🎯 Core Functionality

* 📚 Multiple Categories:

  * Programming
  * General Knowledge
  * Sports
  * Entertainment

* ⏱️ **Timer-Based Questions**

  * 10 seconds per question
  * Auto-lock answer when time ends

* 🔀 **Random Question Selection**

  * Prevents repetition using history tracking

* 📊 **Progress Tracking**

  * Visual progress bar
  * Question counter (e.g., 3/10)

* ✅ **Instant Feedback**

  * Correct answer highlighting
  * Wrong answer indication

* 🏁 **Final Result Screen**

  * Score summary
  * Restart option

---

## 🛠️ Tech Stack

* **React Native**
* **TypeScript**
* **React Hooks (useState, useEffect)**
* **Custom Styling (StyleSheet)**
* **Component-Based Architecture**

---

## 📂 Project Structure

```bash
QuizApp/
│── src/
│   ├── screens/
│   │   └── HomeScreen.tsx
│   ├── data/
│   │   └── questionBank.ts
│   ├── styles/
│   │   └── styles.ts
│
│── assets/
│   └── images/
│       └── congratulation.png
│
│── App.tsx
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Application

```bash
npx expo start
```

---

## 🧠 Application Flow

### 1. Configuration Screen

* Select category
* Select number of questions
* Start quiz

### 2. Quiz Screen

* Timer starts (10s)
* User selects answer
* Feedback displayed
* Move to next question

### 3. Result Screen

* Final score displayed
* Option to restart quiz

---

## ⚡ Key Logic Explained

### 🔁 Random Question Selection

* Maintains a **history array** to avoid repeating questions
* Filters unused questions dynamically

```ts
const available = allQuestions.filter((_, i) => !history.includes(i));
```

---

### ⏱️ Timer Mechanism

* Uses `useEffect` with `setInterval`
* Auto-triggers next step when time reaches zero

```ts
useEffect(() => {
  if (time === 0) {
    setShowNext(true);
  }
}, [time]);
```

---

### ✅ Answer Validation

* Compares selected index with correct answer
* Updates score accordingly

---

## 🎨 UI Highlights

* Minimal and modern card-based layout
* Dynamic button states
* Color-coded answer feedback:

  * 🟢 Correct
  * 🔴 Incorrect
* Responsive design for multiple screen sizes

---

## 🔮 Future Enhancements

* 🔊 Sound Effects & Haptics
* 📈 Leaderboard / High Scores
* 🌐 API-based dynamic questions
* 🧑‍🤝‍🧑 Multiplayer Mode
* 💾 Persistent Score Storage

---

## 🧪 Testing Scenarios

* ✔️ Timer expiration without answer
* ✔️ Random question uniqueness
* ✔️ Score accuracy
* ✔️ UI state transitions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Anu Bharti**

* 💼 React Native Developer || Software Engineer
* 🚀 Passionate about building high-performance mobile apps

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share with others

---

## 💡 Note

This project is built for both **learning and production-level understanding** of React Native app architecture, including state management, UI handling, and performance optimization.

---
