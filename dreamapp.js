// ---------------------------------------------------
// ✅ 1. Values, Data Types, and Operations
// ---------------------------------------------------

// Pseudocode:
// - Define a variable to hold a user's mood
// - Combine it with a string to form a message
// - Display it in the console

let currentMood = "anxious"; // Using a string primitive (Data Types)
let message = "You're feeling " + currentMood + " today."; // String concatenation (Operations)

console.log(message); // Output: You're feeling anxious today.

// ---------------------------------------------------
// ✅ 2. Stringing Characters Together
// ---------------------------------------------------

// Pseudocode:
// - Create a message with a variable
// - Use a template literal for cleaner formatting
// - Add special characters like newline

let userName = "Alex";
let moodMessage = `Hi ${userName},\nRemember to take care of yourself.`; // Using template literals and \n (Stringing Characters)

console.log(moodMessage); // Output: Hi Alex,
//                         Remember to take care of yourself.

// ---------------------------------------------------
// ✅ 3. Control Structures and Logic
// ---------------------------------------------------

// Pseudocode:
// - Check if mood is "sad"
// - If so, suggest an action

if (currentMood === "sad") {
  console.log("Try journaling or listening to music."); // Using conditional (Control Structures)
} else {
  console.log("Keep tracking how you feel!"); // Else condition
}

// ---------------------------------------------------
// ✅ 4. Building Arrays
// ---------------------------------------------------

// Pseudocode:
// - Create an array to hold mood logs
// - Add a new mood to the array

let moodLog = ["happy", "tired"]; // Array of mood strings (Building Arrays)
moodLog.push("anxious"); // Adding an element to the array

console.log(moodLog); // Output: ["happy", "tired", "anxious"]

// ---------------------------------------------------
// ✅ 5. Using Arrays
// ---------------------------------------------------

// Pseudocode:
// - Loop through moodLog
// - Print each mood with its index

for (let i = 0; i < moodLog.length; i++) { // Looping with .length (Using Arrays)
  console.log(`Mood #${i + 1}: ${moodLog[i]}`); // Accessing array elements
}

// ---------------------------------------------------
// ✅ 6. Creating and Using Objects
// ---------------------------------------------------

// Pseudocode:
// - Create an object to represent a detailed mood entry
// - Include date, mood, intensity, and note

let moodEntry = {
  date: "2025-09-08", // String value
  mood: "tired",      // String value
  intensity: 6,       // Number value
  note: "Didn’t sleep well last night." // String value
}; // Object literal (Creating and Using Objects)

console.log(`On ${moodEntry.date}, you felt ${moodEntry.mood} with intensity ${moodEntry.intensity}.`);
