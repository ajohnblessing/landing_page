/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



// Define Global Variables
const navBar = document.querySelector(".navbar__menu");
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// build the nav
sections.forEach(function (section, index) {
	// Add the navigation items
	let navItem = document.createElement("li");

	navItem.id = `link ${index + 1}`;
	navItem.textContent = `Section ${index + 1}`;
	navItem.className = "menu__link";
	navItem.style.cssText = "cursor: pointer";
	
	navList.append(navItem);
});

// Scrolls to the section on click of the navigation item
(function () {
	for (let i = 0; i < sections.length; i++) {
		let navItems = document.getElementById(`link ${i + 1}`);
		navItems.addEventListener("click", ($event) => {
			$event.preventDefault();
			let section = document.getElementById("section" + (i + 1));
			section.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			section.style.cssText = "padding-top: 50px";
		});
	}
})();

// Add active class to section when near top of viewport
function highlightSection () {
	for (let x = 0; x < sections.length; x++) {
		let section = document.getElementById("section" + (x + 1));
		let navItem = document.getElementById(`link ${x + 1}`);
		let oneSection = section.getBoundingClientRect();

		// Make sections active
		if (oneSection.top <= 10 && oneSection.bottom >= 10) {
			section.classList.add("your-active-class");
			navItem.classList.add("active");
		} else {
			section.classList.remove("your-active-class");
			navItem.classList.remove("active");
		}
	}
}
document.addEventListener("scroll", highlightSection);






