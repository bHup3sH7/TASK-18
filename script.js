const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const boxes = document.querySelectorAll(".box");

// greet user using if-else statement
function getName() {

    const name = nameInput.value.trim();
    if (name !== "") {
        greeting.innerText = `Hello, ${name}!`;
        message.style.color = "green";
        message.innerText = "Name accepted! You can now interact with the boxes.";
    } else {
        message.style.color = "red";
        message.innerText = "Please enter a name.";
    }

}

// update the greeting header
function updateGreeting(name) {
    greeting.textContent = `Hello, ${name}! Welcome to the interactive boxes.`;
    message.style.color = "green";
    message.innerText = "Name accepted! You can now interact with the boxes.";
}

// show error message
function showError(error) {
    message.style.color = "red";
    message.innerText = error;
}

// greet button click event
greetBtn.addEventListener("click", () => {
    getName()
        .then(name => {
            updateGreeting(name);
        })
        .catch(error => {
            showError(error);
        });
});

// box click event
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.id; // id of the box is the color
        box.style.backgroundColor = color; // change the box color to its id
    });
});