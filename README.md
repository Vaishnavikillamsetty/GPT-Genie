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
