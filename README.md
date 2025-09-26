# GitHub-Profiles-Explorer
A React app to explore GitHub profiles 👨‍💻. Fetches random users using the GitHub API with useState and useEffect, and lets you search profiles by count input. Displays user avatar, username, and profile link. Future improvements: try/catch error handling, useCallback optimization, and name-based search.

# GitHub Profiles Explorer

A simple React application that fetches and displays GitHub user profiles using the GitHub API. Users can generate random profiles or search for multiple profiles by count input.



## 🚀 Features

* Fetches random GitHub profiles with avatar, username, and profile link.
* Uses **React Hooks**: `useState`, `useEffect` for state and lifecycle management.
* Dynamic profile fetching with user input.
* Responsive card-based layout for displaying profiles.

---

## 🛠️ Tech Stack

* **React** (Functional components & Hooks)
* **JavaScript (ES6+)**
* **GitHub REST API**
* **CSS** for styling

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-profiles-explorer.git
   ```

2. Navigate to the project folder:

   ```bash
   cd github-profiles-explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app locally:

   ```bash
   npm start
   ```

The app will start at `http://localhost:3000`

---

## 📖 Usage

* By default, 10 random profiles are displayed on load.
* Enter a number in the input field to fetch that many profiles.
* Click **Search Profile** to display them.
* Each profile card shows:

  * Avatar
  * Username
  * Direct profile link on GitHub

---

## 🔮 Future Improvements

* Add **try/catch** error handling for API calls.
* Implement **useCallback** for performance optimization.
* Add **search by username** functionality.
* Improve UI with better styling and pagination.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

💡 Built while learning React Hooks and working with APIs.
