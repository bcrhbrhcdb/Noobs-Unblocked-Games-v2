document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('query');
    const games = document.querySelectorAll('.content');
    const resultsContainer = document.getElementById('search-results');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const offset = 400; // Offset in pixels (2px from the edge of the screen)
        return (
            rect.top >= -offset &&
            rect.left >= -offset &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
        );
    }

    function checkPosition() {
        for (let game of games) {
            if (isElementInViewport(game)) {
                game.classList.add('in-view');
            } else {
                game.classList.remove('in-view');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('load', checkPosition);

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        let hasResults = false;
        resultsContainer.innerHTML = '';

        games.forEach(game => {
            const gameTitle = game.querySelector('h3').textContent.toLowerCase();
            if (gameTitle.includes(searchText)) {
                game.classList.remove('hidden');
                hasResults = true;
            } else {
                game.classList.add('hidden');
            }
        });

        if (!hasResults) {
            resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            resultsContainer.innerHTML = ''; // Clear "No results found" message when there are results
        }

        // Recheck the position after filtering
        checkPosition();
    });

    // Initial check to see which games are in view
    checkPosition();
});





 
//full screen button

document.addEventListener('DOMContentLoaded', (event) => {
    const fullscreenButton = document.getElementById('fullscreenButton');
    const iframe = document.getElementById('screen'); // Get the iframe by its ID

    fullscreenButton.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            // Request fullscreen for the iframe
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen().catch((err) => {
                    alert(`Error attempting to enable fullscreen mode for the iframe: ${err.message} (${err.name})`);
                });
            } else {
                alert('Fullscreen API is not supported by your browser.');
            }
        } else {
            // Exit fullscreen mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});


