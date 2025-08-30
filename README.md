# GPT-Genie  

A **modern web chat interface** using **HTML, Tailwind CSS, and JavaScript** to interact with the **Gemini API** via **Google Apps Script**.  

*GPT-Genie provides a sleek and responsive UI that allows users to chat with Gemini in real-time. It’s lightweight, customizable, and easy to deploy — perfect for experimenting with prompts, generating content, or integrating AI into projects.*  

---

## Features  

 **Prompt Input** — Type your custom message or question for Gemini.  
 **Live Response** — Fetches and displays answers instantly.  
 **Modern Design** — Built with Tailwind CSS for a clean and responsive UI.  
 **Loading Indicator** — Shows when Gemini is generating a response.  
 **Error Handling** — Clear error messages for missing/incorrect setup.  

---

## Setup Guide  

### 1️⃣ Get a Gemini API Key  
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).  
2. Sign in with your Google account.  
3. Click **Create API Key** and copy it.  
4. Save this key securely — you’ll need it in the next step.  

---

### 2️⃣ Upload `Code.gs` to Google Apps Script  
1. Open [Google Apps Script](https://script.google.com/).  
2. Click **New Project**.  
3. Delete the default `Code.gs` file content.  
4. Copy the contents of **this repo’s `Code.gs`** file into the editor.  
5. Replace:  
   const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

---

### 3️⃣ Deploy as a Web App  
1. In Apps Script, click **Deploy → New deployment**.  
2. Select **Web App**.  
3. Under *Execute as*, choose **Me**.  
4. Under *Who has access*, choose **Anyone**.  
5. Click **Deploy** and allow permissions.  
6. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`).  

---

### 4️⃣ Update `index.html`  
1. Open the `index.html` file from this repo.  
2. Find this line:  
   const APPS_SCRIPT_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE';.
3.Replace 'YOUR_WEB_APP_URL_HERE' with the Web App URL you copied in step 3.
4.Save the file.

---

### 5️⃣ Run the App
1.Open index.html in your browser.
2.Enter a prompt and click Send to Gemini.
3.See Gemini’s response in real-time.

---

### Live Demo
Demo Link**()**

---

### Built With
**HTML** – Page structure
**Tailwind CSS** – Styling & responsive layout
**JavaScript** – Interaction logic & API integration
**Google Apps Script** – Backend with Gemini API

---

### Team & Credits
Developed by **Team Innovators (Vaishnavi Killamsetty & Team)**
**Year**: 2025

---

### Future Improvements
Add **voice input/output** support
Support **multiple Gemini models** (creative, code, etc.)
Enable **conversation history & saving**
Improve **mobile-friendly responsiveness**

---

### License
This project is open for **educational or personal use.**
Please give credit to the original team if reused or modified.
