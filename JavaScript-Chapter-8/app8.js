// ==========================================
// CHAPTER 8: CONCATENATING TEXT STRINGS
// ==========================================

function runBasicConcatenation() {
    // Combining text strings and a variable using plus operator
    var userName = "Susan";
    alert("Thanks, " + userName + "!");
}

function runVariablesConcatenation() {
    // Combining multiple variables into a custom message
    var message = "Thanks, ";
    var userName = "Susan";
    var banger = "!";
    var customMess = message + userName + banger;
    
    alert(customMess);
}

function runStringNumberConcatenation() {
    // Demonstrating how JavaScript treats mixed strings and numbers
    var resultText = "2 plus 2 equals " + 2 + 2;
    
    alert(resultText); // Displays "2 plus 2 equals 22" because numbers after a string are concatenated
}