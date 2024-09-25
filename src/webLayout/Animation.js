
function initSearch() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener("click", () => {
        // Toggle the 'active' class on the input
        searchInput.classList.toggle('active');

        // Focus the input if it's being shown
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });
}
export default initSearch;