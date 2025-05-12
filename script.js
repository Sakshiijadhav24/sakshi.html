document.addEventListener("DOMContentLoaded", (event) => {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger")
    const navBar = document.querySelector(".nav-bar")
  
    hamburger.addEventListener("click", () => {
      navBar.classList.toggle("active")
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Animate skill bars
    const skillBars = document.querySelectorAll(".skill-progress")
    skillBars.forEach((bar) => {
      const progress = bar.getAttribute("data-progress")
      bar.style.width = progress
    })
  
    // Highlight active navigation item based on scroll position
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll(".nav-bar ul li a")
  
    window.addEventListener("scroll", () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("href").slice(1) === current) {
          item.classList.add("active")
        }
      })
    })
  })