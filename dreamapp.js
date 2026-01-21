// ---------------------------------------------------
// ✅ 1. Values, Data Types, and Operations
// ---------------------------------------------------

const readline = require("readline-sync");

// Ask the user for input
let userName = readline.question("Enter your name: ");
let currentMood = readline.question("How are you feeling today? ");

// String concatenation
let message = "You're feeling " + currentMood + " today.";
console.log(message);

// ---------------------------------------------------
// ✅ 2. Stringing Characters Together
// ---------------------------------------------------

let moodMessage = `Hi ${userName},\nRemember to take care of yourself.`;
console.log(moodMessage);

// ---------------------------------------------------
// ✅ 3. Control Structures and Logic
// ---------------------------------------------------

// Normalize mood ONCE
let mood = currentMood.toLowerCase();

// Respond based on mood
if (mood === "sad") {
  console.log("Try journaling or listening to music.");
} else if (mood === "happy") {
  console.log("That's great to hear! Keep doing what you're doing.");
} else if (mood === "anxious") {
  console.log("Take a few deep breaths or try a short walk.");
} else if (mood === "angry") {
  console.log("It might help to pause and step away for a moment.");
} else if (mood === "tired") {
  console.log("Consider resting or getting some sleep.");
} else if (mood === "stressed") {
  console.log("Try breaking tasks into smaller steps.");
} else if (mood === "excited") {
  console.log("Channel that energy into something creative!");
} else if (mood === "bored") {
  console.log("Maybe try a new activity or hobby.");
} else {
  console.log("Thanks for sharing how you feel. Keep tracking your moods!");
}

// ---------------------------------------------------
// ✅ 4. Building Arrays
// ---------------------------------------------------

// Create an array to store mood history
let moodLog = [];

// Add mood only if it does not already exist
if (!moodLog.includes(mood)) {
  moodLog.push(mood);
}

console.log("Mood Log:", moodLog);

// ---------------------------------------------------
// ✅ 5. Using Arrays
// ---------------------------------------------------

for (let i = 0; i < moodLog.length; i++) {
  console.log(`Mood #${i + 1}: ${moodLog[i]}`);
}

// ---------------------------------------------------
// ✅ 6. Creating and Using Objects
// ---------------------------------------------------

let moodEntry = {
  date: new Date().toLocaleDateString(),
  mood: mood,
  intensity: readline.questionInt("Rate your mood from 1 to 10: "),
  note: readline.question("Add a short note about your day: ")
};

console.log(
  `On ${moodEntry.date}, you felt ${moodEntry.mood} with intensity ${moodEntry.intensity}.`
);
