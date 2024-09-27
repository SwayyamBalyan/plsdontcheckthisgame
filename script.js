let player = {
    health: 100,
    location: "Plantation"
};

const locationElement = document.getElementById("location");
const healthElement = document.getElementById("health");
const gameEventElement = document.getElementById("game-event");

document.addEventListener("DOMContentLoaded", () => {
    updateGameInfo();
});

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const direction = (link unavailable);
        movePlayer(direction);
    });
});

function movePlayer(direction) {
    switch (direction) {
        case "north":
            player.location = "Woods";
            break;
        case "south":
            player.location = "Plantation";
            break;
        case "east":
            player.location = "River";
            break;
        case "west":
            player.location = "Swamp";
            break;
        case "rest":
            player.health += 10;
            break;
    }

    const event = encounter();
    updateGameInfo();

    if (event) {
        gameEventElement.innerText = event;
        if (event.includes("Health reduced")) {
            player.health -= 10;
        } else if (event.includes("Health increased")) {
            player.health += 20;
        }
        updateGameInfo();
    }

    checkGameEnd();
}

function encounter() {
    const events = [
        "Slave Catcher! Health reduced.",
        "Friendly Abolitionist! Health increased.",
        "Wild Animal! Health reduced.",
        "Severe Weather! Health reduced."
    ];
    return events[Math.floor(Math.random() * events.length)];
}

function updateGameInfo() {
    locationElement.innerText = player.location;
    healthElement.innerText = player.health;
}

function checkGameEnd() {
    if (player.health <= 0) {
        gameEventElement.innerText = "Game Over. You did not escape.";
        document.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });
    } else if (player.location === "Freedom") {
        gameEventElement.innerText = "Congratulations! You escaped to freedom.";
        document.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });
    }
}
