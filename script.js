function loadGame(url) {
    document.getElementById("gameFrame").src = url;
}

function searchGames() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let games = document.querySelectorAll(".game");

    games.forEach(game => {
        let altText = game.getAttribute("alt").toLowerCase();
        if (altText.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

function filterGames(category) {
    let games = document.querySelectorAll(".game");

    games.forEach(game => {
        if (category === "all" || game.getAttribute("data-category") === category) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}
