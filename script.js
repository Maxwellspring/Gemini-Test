// Access the GoogleGenerativeAI class from the global scope
// IMPORTANT: Replace "YOUR_API_KEY" with your actual Gemini API Key
// This is for prototyping only. For production, secure your API key on a backend.
    const paragraph = document.getElementById("fakeConsole");
alert(paragraph);
    paragraph.textContent = "New text content for the paragraph.";


const API_KEY = "AIzaSyBrAY69EZDE1aMCUQPB0wl02v4haO9XT4g";

async function main() {
    if (typeof window.GoogleGenerativeAI === 'undefined') {
        console.error("GoogleGenerativeAI is not loaded. Check your HTML import.");
        consoled.innerHTML = "GoogleGenerativeAI is not loaded. Check your HTML import."
        return;
    }

    const genAI = new window.GoogleGenerativeAI(API_KEY);

    // The Gemini 1.5 models are versatile and work with most use cases
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Using gemini-1.5-flash as per your original request

    try {
        const result = await model.generateContent("Explain how AI works in a few words");
        const response = await result.response;
        const text = response.text();
        document.getElementById("aiResponse").textContent = text;
        console.log(text);
    } catch (error) {
        consoled.innerHTML = "Error generating content: " + error

        console.error("Error generating content:", error);
        document.getElementById("aiResponse").textContent = "Error: " + error.message;
    }
}

// Call the main function when the script runs
main();