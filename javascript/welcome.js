function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Optional: Close dropdown if clicking outside of it
  window.addEventListener("click", function(e) {
    if (!e.target.matches('.dropdown-btn')) {
      const dropdown = document.getElementById("dropdownContent");
      dropdown.style.display = "none";
    }
  });