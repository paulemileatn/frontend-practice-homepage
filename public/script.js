lucide.createIcons();

const hamburgerIcon = document.querySelector(".lucide-menu");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".lucide-x");

const menuHiddenClass = "translate-x-full";
const menuVisibleClass = "translate-x-0";

const toggleMobileMenu = () => {
  mobileMenuContainer.classList.toggle(menuHiddenClass);
  mobileMenuContainer.classList.toggle(menuVisibleClass);
};

hamburgerIcon.addEventListener("click", toggleMobileMenu);
closeIcon.addEventListener("click", toggleMobileMenu);
