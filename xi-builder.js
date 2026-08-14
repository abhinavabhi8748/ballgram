let players = 0;

function addPlayer(position) {

    if (position.dataset.filled === "true") {

        let choice = prompt(
`Player already exists.
Type:
edit - Change player
remove - Delete player`
        );

        if (choice === "edit") {

            let newName = prompt("Enter new player name");

            if (newName) {
                position.innerHTML =
                "<span class='name'>" + newName + "</span>";
            }

        } else if (choice === "remove") {

            position.innerHTML = position.classList[1].toUpperCase();

            position.dataset.filled = "false";

            players--;

            document.getElementById("counter").innerText =
            "Players: " + players + " / 11";

        }

        return;
    }

    if (players >= 11) {
        alert("Maximum 11 players allowed!");
        return;
    }

    let player = prompt("Enter player name");

    if (player) {

        position.innerHTML =
        "<span class='name'>" + player + "</span>";

        position.dataset.filled = "true";

        players++;

        document.getElementById("counter").innerText =
        "Players: " + players + " / 11";
    }
}
function saveTeam() {

    const gk = document.querySelector(".gk");

    if (gk.dataset.filled !== "true") {
        alert("You must select a Goalkeeper!");
        return;
    }

    if (players !== 11) {
        alert("Your team must have exactly 11 players!");
        return;
    }

    alert("this is 1st version so if someone see this project pls contact me on instagram:abhinav__vinod_");
}