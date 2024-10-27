// Initialize counters
let radhaCount = 0;
let krishnaCount = 0;

// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();

    recognition.continuous = true; // Continue recognition until stopped
    recognition.interimResults = false; // Only capture final results
    recognition.lang = 'en-US'; // Set the recognition language

    // Start recognition on button click
    document.getElementById('startButton').addEventListener('click', () => {
        recognition.start();
        alert('Voice recognition started. Please speak "Radha" or "Krishna".');
    });

    // Event to handle the recognition result
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        console.log('Recognized:', transcript);

        // Check if the recognized text contains "radha" or "krishna"
        if (transcript.includes("radha")) {
            radhaCount++;
            document.getElementById('radhaCount').textContent = radhaCount;
        }
        if (transcript.includes("krishna")) {
            krishnaCount++;
            document.getElementById('krishnaCount').textContent = krishnaCount;
        }
    };

    // Error handling
    recognition.onerror = (event) => {
        console.error('Recognition Error:', event.error);
        alert(`Error: ${event.error}`);
    };

    // Stop recognition when the user stops speaking
    recognition.onend = () => {
        alert("Voice recognition stopped.");
    };

} else {
    alert("Your browser does not support voice recognition.");
}
