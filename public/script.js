lucide.createIcons();

const hamburgerIcon = document.querySelector(".lucide-menu");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".lucide-x");

const menuHiddenClass = "-right-2/3";
const menuVisibleClass = "right-0";

const toggleMobileMenu = () => {
  mobileMenuContainer.classList.toggle(menuHiddenClass);
  mobileMenuContainer.classList.toggle(menuVisibleClass);
};

hamburgerIcon.addEventListener("click", toggleMobileMenu);
closeIcon.addEventListener("click", toggleMobileMenu);
