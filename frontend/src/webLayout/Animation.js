
// function initSearch() {
//     const searchIcon = document.getElementById('searchIcon');
//     const searchInput = document.getElementById('searchInput');

//     searchIcon.addEventListener("click", () => {
//         // Toggle the 'active' class on the input
//         searchInput.classList.toggle('active');

//         // Focus the input if it's being shown
//         if (searchInput.classList.contains('active')) {
//             searchInput.focus();
//         }
//     });
// }
// export default initSearch;



function initSearch()
{


// Get elements
const checkbox = document.getElementById("checkbox");
const searchContainer = document.getElementById("searchContainer");

// Listen for clicks anywhere on the window (outside the search container)
window.addEventListener("click", function (event) {
  // If the click happens inside the searchContainer, stop the event from propagating (so it doesn't collapse the search bar)
  if (searchContainer.contains(event.target)) {
    return;
  }
  // Uncheck the checkbox to collapse the search bar
  checkbox.checked = false;
});

// Listen for clicks on the search icon to toggle the search bar
searchContainer.addEventListener("click", function (event) {
  if (event.target.closest('.iconContainer')) {
    checkbox.checked = !checkbox.checked; // Toggle the checkbox when clicking the icon
  }
});


}

export default initSearch;