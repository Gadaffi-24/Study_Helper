# 📚 StudyHelper App

## 👋 Welcome!
**StudyHelper** is a mobile application designed to help students stay on top of their game. It allows users to track study hours, get real-time feedback, and view a summary of their hard work—all wrapped in a friendly, animated interface.

This app was built with **React Native** & **TypeScript**, featuring custom animations and persistent state management.

## ✨ Features

### 🎨 UI & UX
* **Bouncing Loading Screen:** A custom, playful animation to welcome users.
* **Personalized Greeting:** The Home Screen greets you by name (e.g., *"Hello, Mokete!"*).
* **Smooth Navigation:** Stack navigation with custom transitions.

### 🧠 Smart Logic
* **Study Tracker:** Input your module and hours.
* **Motivational Feedback:** The app praises you based on how long you studied (e.g., *"Wow! You are a hard worker! 🌟"*).
* **Data Validation:** Prevents empty or invalid inputs to keep data clean.

### 📊 Data & Summary
* **Summary Dashboard:** Uses iteration to display a history of all study sessions.
* **Total Calculation:** Automatically sums up your total study hours.
* **Persistent Profile:** Save your Name and Student Number, and the app remembers you!

---

## 📱 Screenshots


## 🛠️ Tech Stack

* **Core:** React Native, TypeScript
* **Navigation:** React Navigation (Native Stack)
* **State Management:** React Context API
* **Animation:** React Native Reanimated & Animated API
* **Styling:** StyleSheet

---

## 🚀 How to Run

1.  **Clone the repository**
    ```bash
    git clone: 
    ```

2.  **Install dependencies**
    Navigate to the folder and run:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install Required Libraries**
    Ensure these specific packages are installed:
    ```bash
    npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-reanimated
    ```

4.  **Run the App**
    ```bash
    npx expo start
    # or
    npx react-native run-android
    ```

---

## 📂 Project Structure

```text
/StudyHelperApp
 ├── /assets             # Images (Logo)
 ├── /screens            # Application Screens
 │    ├── HomeScreen.tsx
 │    ├── StudyTrackerScreen.tsx
 │    ├── SummaryScreen.tsx
 │    ├── ProfileScreen.tsx
 │    └── LoadingScreen.tsx
 ├── /utils              # Logic & Validators
 │    └── logic.ts
 ├── App.tsx             # Main Entry & Context
 └── navigation.ts       # Type Definitions
