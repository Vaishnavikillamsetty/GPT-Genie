// Code.gs

// IMPORTANT: Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual Gemini API Key.
// Get your API key from Google AI Studio: https://aistudio.google.com/app/apikey 
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE'; 
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Handles GET requests to serve the HTML page.
 * This function is not strictly needed for the form submission, but good practice for web apps.
 * @returns {HtmlOutput} The HTML content.
 */
function doGet() {
  // In a real scenario, you would serve an HTML file from here.
  // For this example, our HTML is separate, but this function is required for web app deployment.
  return HtmlService.createHtmlOutput("This is the Apps Script backend for Gemini chat. Please use the HTML form to interact.");
}

/**
 * Handles POST requests from the HTML form.
 * Receives the prompt, calls the Gemini API, and returns the response.
 * @param {Object} e The event object containing request parameters.
 * @returns {ContentService.TextOutput} JSON response.
 */
function doPost(e) {
  // Set content type to JSON
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    // Get the prompt from the request parameters
    const prompt = e.parameter.prompt;

    if (!prompt) {
      return output.setContent(JSON.stringify({ error: "No prompt provided." }));
    }

    // Prepare the payload for the Gemini API
    const payload = {
      contents: [{
        role: "user",
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7, // Adjust creativity
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      },
    };

    // Options for the UrlFetchApp request
    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true // Prevents Apps Script from throwing an error on non-200 responses
    };

    // Make the API call to Gemini
    const response = UrlFetchApp.fetch(GEMINI_API_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    if (responseCode === 200) {
      const jsonResponse = JSON.parse(responseBody);
      const geminiText = jsonResponse.candidates && jsonResponse.candidates[0] &&
                         jsonResponse.candidates[0].content && jsonResponse.candidates[0].content.parts &&
                         jsonResponse.candidates[0].content.parts[0] && jsonResponse.candidates[0].content.parts[0].text;

      if (geminiText) {
        return output.setContent(JSON.stringify({ response: geminiText }));
      } else {
        return output.setContent(JSON.stringify({ error: "Unexpected Gemini API response structure.", rawResponse: jsonResponse }));
      }
    } else {
      return output.setContent(JSON.stringify({ error: `Gemini API error: ${responseCode} - ${responseBody}` }));
    }

  } catch (error) {
    // Log the error for debugging in Apps Script dashboard
    console.error("Error in doPost:", error);
    return output.setContent(JSON.stringify({ error: `An unexpected error occurred: ${error.message}` }));
  }
}
