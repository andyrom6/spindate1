// script.js
const spinner = document.getElementById('spinner');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
let spinning = false;

spinButton.addEventListener('click', () => {
    if (!spinning) {
        const randomDegrees = 1080 + Math.floor(Math.random() * 2160); // Spin 3-5 full rotations
        spinning = true;
        spinner.style.transform = `rotate(${randomDegrees}deg)`;
        result.textContent = '';
        spinButton.disabled = true;

        setTimeout(() => {
            spinning = false;
            spinButton.disabled = false;
            const selectedDate = getRandomDate();
            result.textContent = `Your virtual date is: ${selectedDate}`;
        }, 3000); // Wait 3 seconds for the spin to finish
    }
});

function getRandomDate() {
    const dateOptions = [
        "Cook a Romantic Dinner",
        "Movie Night at Home",
        "Picnic in the Park",
        "Visit a Local Museum",
        "Stargazing Adventure",
        "Go Bowling",
        "Explore a New Restaurant",
        "DIY Craft Night",
        "Bake Sweet Treats Together",
        "Bookstore Adventure",
        "Coffee Shop Date",
        "Home Karaoke Night",
        "Ice Cream Run"
    ];
    const randomIndex = Math.floor(Math.random() * dateOptions.length);
    return dateOptions[randomIndex];
}
