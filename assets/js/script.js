// Function to compare dates in the format YYYY-MM-DD
function compareDates(date1, date2) {
	const dateA = new Date(date1);
	const dateB = new Date(date2);
	return dateA - dateB;
  }
  
  // Function to compare numbers
  function compareNumbers(num1, num2) {
	return num1 - num2;
  }
  
  // Function to compare strings
  function compareStrings(str1, str2) {
	return str1.localeCompare(str2);
  }
  
  const properties = ["name", "wins", "draws", "email"];
  
  properties.forEach((val) => {
	let orderClass = "";
  
	const element = document.getElementById(val);
  
	element.addEventListener("click", function (e) {
	  e.preventDefault();
  
	  const activeLinks = document.querySelectorAll(".filter__link.filter__link--active");
	  activeLinks.forEach((link) => {
		if (link !== this) {
		  link.classList.remove("filter__link--active");
		}
	  });
  
	  this.classList.toggle("filter__link--active");
  
	  const allLinks = document.querySelectorAll(".filter__link");
	  allLinks.forEach((link) => {
		link.classList.remove("asc", "desc");
	  });
  
	  if (orderClass === "desc" || orderClass === "") {
		this.classList.add("asc");
		orderClass = "asc";
	  } else {
		this.classList.add("desc");
		orderClass = "desc";
	  }
  
	  const parent = this.closest(".header__item");
	  const index = Array.from(parent.parentNode.children).indexOf(parent);
	  const table = document.querySelector(".table-content");
	  const rows = Array.from(table.querySelectorAll(".table-row"));
  
	  const isSelected = this.classList.contains("filter__link--active");
	  const isNumber = this.classList.contains("filter__link--number");
  
	  rows.sort((a, b) => {
		const x = a.querySelectorAll(".table-data")[index].textContent;
		const y = b.querySelectorAll(".table-data")[index].textContent;
  
		if (val === "wins" || val === "draws") {
		  return isSelected
			? compareNumbers(parseFloat(x), parseFloat(y))
			: compareNumbers(parseFloat(y), parseFloat(x));
		} else if (val === "joined") {
		  return isSelected ? compareDates(x, y) : compareDates(y, x);
		} else {
		  return isSelected ? compareStrings(x, y) : compareStrings(y, x);
		}
	  });
  
	  rows.forEach((row) => {
		table.appendChild(row);
	  });
  
	  return false;
	});
  });
  