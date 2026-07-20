// This file contains all song data and the global search logic
const songData = [
    // ... PASTE YOUR ENTIRE songData ARRAY HERE ...
];

function handleHeaderSearch(event) {
    if (event.key === 'Enter') {
        const query = encodeURIComponent(event.target.value.trim());
        const localSearch = document.getElementById('songSearch');
        
        if (localSearch) {
            localSearch.value = event.target.value;
            if (typeof renderSongs === 'function') renderSongs();
        } else {
            // Redirect to home with query
            window.location.href = '/?search=' + query;
        }
    }
}