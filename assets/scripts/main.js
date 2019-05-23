//Script for loading screen
var loc = location.href;
if (loc.includes("index-home.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    // Wrapper animation
    anime
      .timeline({
        targets: ".welcome",
        easing: "easeOutExpo"
      })
      .add({
        width: ["0%", "100%"],
        opacity: 1,
        duration: 1200
      })
      .add({
        delay: 2700,
        duration: 1500,
        opacity: 0,
        translateX: ["100%"],
        complete: function() {
          document.querySelector(".welcome").remove();
          document.querySelector(".menu-btn").style.opacity = "1";
        }
      });

    //Heading animation
    anime({
      targets: ".heading",
      delay: 400,
      opacity: 1,
      duration: 1800,
      translateY: ["-30px", "0px"],
      easing: "easeOutExpo"
    });

    //Subheading animation
    anime({
      targets: ".sub-heading",
      delay: 600,
      opacity: 1,
      duration: 1800,
      translateY: ["-30px", "0px"],
      easing: "easeOutExpo"
    });

    //Loading bar animation
    anime({
      targets: ".loader",
      opacity: 1,
      easing: "easeOutExpo",
      duration: 2300,
      delay: 2000,
      width: ["0%", "100%"]
    });

    anime({
      targets: ".loader-wrapper",
      opacity: 1,
      easing: "easeOutExpo",
      duration: 1800,
      delay: 1500
    });
  });
}

//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set inital state of menu
let showMenu = false;

//Eventlistener to get the event
menuBtn.addEventListener("click", toggleMenu);

//Add and remove class according to the event
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set the menu state
    showMenu = true;
  }

  //Set the menu state
  else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}

//Type writer animation for about me page.
var i = 0;
var a = 0;

var textArray = [
  "Coding is my passion, and I love learning and writing codes. I have learned and used|",
  " some popular programming languages like C, C++, etc. Currently, I am focused on|",
  " learning the Java programming language. Besides coding, I also like listening to music and|",
  " playing battle royale games like PUBG, Apex Legends, etc."
];

var speedForward = 50;

typewriter("output", textArray);

function typewriter(id, ar) {
  var element = $("#" + id);
  var aString = ar[a];
  var eParagraph = element.children("p");

  if (i < aString.length) {
    if (aString.charAt(i) == "|") {
      i++;
      setTimeout(function() {
        typewriter(id, ar);
      });
    } else {
      eParagraph.text(eParagraph.text() + aString.charAt(i));
      i++;
      setTimeout(function() {
        typewriter(id, ar);
      }, speedForward);
    }
  } else if (a != 3) {
    i = 0;
    a++;
    setTimeout(function() {
      typewriter(id, ar);
    });
  }
}

// Testing
