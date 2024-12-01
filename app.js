// Vocabulary data
const vocabData = {
    كتاب: {
        english: "Book",
        plural: "كتب",
        similar: [],
        opposite: [],
        examples: ["أقرأ كتابًا في المكتبة", "هذه كتب جديدة"]
    },
    قلم: {
        english: "Pen",
        plural: "أقلام",
        similar: [],
        opposite: [],
        examples: ["هذا قلم جميل", "أكتب بأقلام مختلفة"]
    },
    بيت: {
        english: "House",
        plural: "بيوت",
        similar: [],
        opposite: [],
        examples: ["أسكن في بيت كبير", "هذه بيوت مريحة"]
    },
    مدرسة: {
        english: "School",
        plural: "مدارس",
        similar: [],
        opposite: [],
        examples: ["أذهب إلى المدرسة كل يوم", "المدارس هنا ممتازة"]
    }
};

// Function to display word details from the dropdown
function selectWord() {
    const selectedWord = document.getElementById("wordSelect").value;
    displayDetails(selectedWord);
}

// Function to display word details from search input
function searchWord() {
    const input = document.getElementById("searchInput").value.trim();
    displayDetails(input);
}

// Function to display word details
function displayDetails(word) {
    const wordData = vocabData[word];
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous results

    if (wordData) {
        outputDiv.innerHTML = `
            <h3>${word} (${wordData.english})</h3>
            <p><strong>Plural:</strong> ${wordData.plural}</p>
            <p><strong>Similar Words:</strong> ${wordData.similar.join(", ")}</p>
            <p><strong>Opposite:</strong> ${wordData.opposite}</p>
            <p><strong>Examples:</strong></p>
            <ul>
                ${wordData.examples.map((example) => `<li>${example}</li>`).join("")}
            </ul>
        `;
    } else {
        outputDiv.innerHTML = "<p>No results found. Please select or enter a valid word.</p>";
    }
}
