# COSC Hackathons Repository

Welcome to the **COSC Hackathons** repository! This repository serves as a collection of projects developed during various COSC Hackathon events. Each project is contained within its own dedicated folder.

---

## 📌 Featured Project: Amazon CPU Product Item (Hackathon Submission)

This is a specific project from the COSC Hackathon, focused on designing a **product item layout** for an **Amazon CPU listing**. The goal was to create a fully responsive, clean, and visually appealing component using only **HTML** and **CSS**.

## ✅ Features of this Project

- Amazon-style CPU product display
- Fully responsive across desktop, tablet, and mobile
- Built using pure HTML and CSS — no JavaScript
- Clean UI with focus on layout and responsiveness

## 📁 Technologies Used

- HTML5
- CSS3 (Flexbox and Media Queries for responsiveness)

 
## 💻 How to Run (for Amazon CPU Product Item)

To view the "Amazon CPU Product Item" project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/itsmepraksh/COSC-HACATHONS.git]  
    ```
2.  **Navigate into the repository:**
    ```bash
    cd COSC-HACATHONS
    ```
3.  **Open the project in your browser:**
    If you've moved the `Project-1` contents to the root of this repository for GitHub Pages:
    ```bash
    open index.html # For macOS/Linux
    start index.html # For Windows
    ```
    *(If `Project-1` is still in a subfolder and you want to run it from there, the path would be `open Project-1/index.html`)*

## 🌐 Live Demo
  
> **Live URL:** [https://challengeone-six.vercel.app/] 

## ✅ Status

**Amazon CPU Product Item:** Task Completed

---


## ☁️ Weather Watch Dashboard

This project is a dynamic **Weather Dashboard** that fetches and displays real-time weather data for any specified city. Users can simply enter a city name to get current temperature, humidity, and a short weather forecast.

### ✨ Features of this Project

-   Real-time weather data fetching
-   Displays current temperature (in °C)
-   Shows humidity percentage
-   Provides a short weather forecast (e.g., "clear sky", "scattered clouds")
-   Responsive UI for various screen sizes
-   **Dark theme** for a sleek user experience

### 🛠️ Technologies Used

-   **HTML5** (Structure)
-   **Tailwind CSS** (Modern Styling & Responsiveness)
-   **Vanilla JavaScript** (Logic, API Calls, DOM Manipulation)
-   **OpenWeatherMap API** (For Weather Data)

### 💻 How to Run (for Weather Watch Dashboard)

To view the "Weather Watch Dashboard" project locally, follow these steps:

1.  **Clone the repository:**  
    ```bash
    git clone [https://github.com/itsmepraksh/COSC-HACATHONS.git] 
    ```
2.  **Navigate into your project folder:**
    ```bash
    cd COSC-HACATHONS/Project-2/ # Assuming you placed it in a 'Project-2' folder
    ``` 

3.  **Get your OpenWeatherMap API Key:**
    * If you don't have a key, so visit OpenWeatherMap official website ([https://openweathermap.org/api]) for free account and obtain key.

4.  **Update the API Key in the code:**
    * `index.html` open this file in your code editor.
    * In JavaScript file search this line `const API_KEY = 'YOUR_API_KEY';` 
    * Replace this `'YOUR_API_KEY'` with the actual OpenWeatherMap API key .

5.  **Open the project in your browser:**
    ```bash
    open index.html # For macOS/Linux
    start index.html # For Windows
    ```

 

## ✅ Status

**Weather Watch Dashboard:** Task Completed

---



## 🐶 Dog Image Gallery

This project is a dynamic web application that allows users to explore various dog images. Users can either view a collection of 5 random dog images or search for images of a specific dog breed. It provides a quick and engaging way to see different dog breeds.

### ✨ Features of this Project

-   View 5 random dog images.
-   Search for 5 images of a specific dog breed.
-   Real-time fetching and display of images.
-   Basic error handling for invalid breeds or API issues.
-   Clear loading indicators.

### 🛠️ Technologies Used

-   **HTML5** (Structure)
-   **Tailwind CSS** (Modern Styling & Responsiveness)  
-   **Vanilla JavaScript** (Logic, API Calls, DOM Manipulation)
-   **Dog API** (For Dog Image Data)

### API Workflow

1. Get the free API, API that I used in the project is from [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/). I set up the API in the form so it gives me an array of 5 items as data.

2. Used `fetch` for retrieving the data from the backend of the API, and used Promises to fetch the data.

3. Used fetched data which is nothing but JSON format data, so used `map` to convert array data into single elements and put them inside the HTML content.

4. Used event listeners to get the user instruction and give them their desired output.

5. Also tried handling the errors using `try-catch`, `setTimeout`, etc.


### 💻 How to Run (for Dog Image Gallery)

To view the "Dog Image Gallery" project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/itsmepraksh/COSC-HACATHONS.git](https://github.com/itsmepraksh/COSC-HACATHONS.git)
    ```
2.  **Navigate to the Project-3 directory:**
    ```bash
    cd COSC-HACATHONS/Project-3
    ```
3.  **Open the project in your browser:**
    ```bash
    open index.html # For macOS/Linux
    start index.html # For Windows
    ```

### 🌐 Live Demo

> **Live URL:** [**https://cosc-hacathons-b6sh.vercel.app/**]

## ✅ Status

**Dog Image Gallery:** Task Completed

---

 
# 🚀 COSC Commit Counter

**COSC Commit Counter** is a simple tool designed to simulate tracking community progress during HackWeek by counting commits. It provides a live, real-time update of the commit count on the website.

---

## ✨ Features of this Project

- Displays commit count starting from `0`.
- **Increment**: Simulates a new commit being made, increasing the count.
- **Decrement**: Allows for reverting a commit, ensuring the count does not go below 0.
- **Reset**: Resets the commit count to 0, simulating the end of a HackWeek day.
- Clean and responsive user interface.

---

## 🛠️ Technologies Used

- **HTML5** (Structure)
- **CSS** (Styling)
- **Vanilla JavaScript** (Logic & DOM Manipulation)

---

## 💻 How to Run (for COSC Commit Counter)

To view the **COSC Commit Counter** project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/itsmepraksh/COSC-HACATHONS.git
   ````

2. **Navigate to the Project-4 directory**:

   ```bash
   cd COSC-HACATHONS/Project-4
   ```

3. **Open the project in your browser**:

   * On macOS/Linux:

     ```bash
     open index.html
     ```

   * On Windows:

     ```bash
     start index.html
     ```

---

## ✅ Status

**COSC Commit Counter**: Task Completed ✅
 

## 🙌 Acknowledgements

Thanks to the COSC Hackathon team for the opportunity to participate and build something exciting with pure frontend tech.

---