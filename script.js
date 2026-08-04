let ronaldoVotes = Number(localStorage.getItem("ronaldoVotes")) || 0;
let messiVotes = Number(localStorage.getItem("messiVotes")) || 0;
let neymarVotes = Number(localStorage.getItem("neymarVotes")) || 0;
let othersVotes = Number(localStorage.getItem("othersVotes")) || 0;


document.getElementById("ronaldo").textContent = ronaldoVotes;
document.getElementById("messi").textContent = messiVotes;
document.getElementById("neymar").textContent = neymarVotes;
document.getElementById("others").textContent = othersVotes;

function vote(player) {

    if (player === "ronaldo") {
        ronaldoVotes++;
        document.getElementById("ronaldo").textContent = ronaldoVotes;
        localStorage.setItem("ronaldoVotes", ronaldoVotes);
    }

    if (player === "messi") {
        messiVotes++;
        document.getElementById("messi").textContent = messiVotes;
        localStorage.setItem("messiVotes", messiVotes);
    }

    if (player === "neymar") {
        neymarVotes++;
        document.getElementById("neymar").textContent = neymarVotes;
        localStorage.setItem("neymarVotes", neymarVotes);
    }

    if (player === "others") {
        othersVotes++;
        document.getElementById("others").textContent = othersVotes;
        localStorage.setItem("othersVotes", othersVotes);
    }
}function aboutBallgram() {
    document.getElementById("about").innerHTML =
    "⚽ Ballgram is a football community built by a football fan for football fans. Vote, share opinions, and enjoy the beautiful game!";
}function toggleAbout() {

    let about = document.getElementById("about");
    let btn = document.getElementById("aboutBtn");

    if (about.style.display === "none") {
        about.style.display = "block";
        btn.innerHTML = "Hide Answer";
    } else {
        about.style.display = "none";
        btn.innerHTML = "Show Answer";
    }

}