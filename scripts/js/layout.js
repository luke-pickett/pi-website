function toggleHamburgerMenu() {
    let mobileNav = document.getElementById("mobile-nav-list")
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block"
    }
    else {
        mobileNav.style.display = "none"
    }
}