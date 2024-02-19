class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileManu = document.querySelector(mobileMenu);
        this.navList - document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass =  "active";
    }

    addClickEvent() {
        this.mobileManu.addEventListener("click", () => console.log)
        ("Hey ");
    }

    init(){
        if (this.mobileManu) {
            this.addClickEvent()
            }
            return this;
        }
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"

);