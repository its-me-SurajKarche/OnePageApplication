const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
{/* <script> */}
  const typedElement = document.getElementById('typedText');
  const jobTitles = ['WEB DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER'];
  const typeSpeed = 100; // Adjust typing speed as needed

  let currentJobIndex = 0;
  let currentCharacterIndex = 0;

  function typeNextCharacter() {
    if (currentCharacterIndex < jobTitles[currentJobIndex].length) {
      typedElement.textContent += jobTitles[currentJobIndex].charAt(currentCharacterIndex);
      currentCharacterIndex++;
      setTimeout(typeNextCharacter, typeSpeed);
    } else {
      setTimeout(deleteText, 1500); // Wait before deleting text
    }
  }

  function deleteText() {
    if (typedElement.textContent.length > 0) {
      typedElement.textContent = typedElement.textContent.slice(0, -1);
      setTimeout(deleteText, typeSpeed / 2);
    } else {
      currentJobIndex = (currentJobIndex + 1) % jobTitles.length;
      currentCharacterIndex = 0;
      setTimeout(typeNextCharacter, typeSpeed); // Start typing the next job title
    }
  }

  typeNextCharacter(); // Start the typing animation
// </script>
