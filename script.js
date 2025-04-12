const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

function filterCards(category) {
    cards.forEach(card => {
        const match = card.classList.contains(category) || category === "all";
        card.style.display = match ? "block" : "none";
    });
}

// Add event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter cards
        const category = button.getAttribute('data-filter');
        filterCards(category);
    });
});

// Load all by default
filterCards("all");
