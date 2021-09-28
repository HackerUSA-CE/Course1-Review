//grabs all animal sections
let animals = document.querySelectorAll(".animal")

//isolate vote count for the dog
let dogVotesCell = document.querySelector("#doggo-votes");

//isolate vote count for the cat
let catVotesCell = document.querySelector("#catto-votes");

//isolate vote count for the fish
let fishVotesCell = document.querySelector("#fish-votes");

//local storage
let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesCell.textContent = dogVotes;
}
let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesCell.textContent = catVotes;
}
let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes) {
    fishVotesCell.textContent = fishVotes;
}


// dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo!"

animals[0].append(dogVoteBtn)

//dog button event listener
dogVoteBtn.addEventListener('click', function(e) {
let dogVotesCount = parseInt(dogVotesCell.textContent);
dogVotesCount = dogVotesCount + 1;
dogVotesCell.textContent = dogVotesCount;
localStorage.setItem('dog-votes', dogVotesCount)
});

// cat vote button
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto!"

animals[1].append(catVoteBtn)

//cat button event listener
catVoteBtn.addEventListener('click', function(e) {
let catVotesCount = parseInt(catVotesCell.textContent);
catVotesCount = catVotesCount + 1;
catVotesCell.textContent = catVotesCount;
localStorage.setItem('cat-votes', catVotesCount)
});

// fish vote button
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Fish Gold!"

animals[2].append(fishVoteBtn)

// fish button event listener
fishVoteBtn.addEventListener('click', function(e) {
let fishVotesCount = parseInt(fishVotesCell.textContent);
fishVotesCount = fishVotesCount + 1;
fishVotesCell.textContent = fishVotesCount;
localStorage.setItem('fish-votes', fishVotesCount)
});