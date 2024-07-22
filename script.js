function init() {https://github.com/Ajay-Berwal/Portfolio/edit/main/script.js
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

const screenWidth = window.innerWidth || document.documentElement.clientWidth;




function startLoader(){
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter(){
    if(currentValue === 100){
      return; 
    }

    currentValue += 10;

    if(currentValue > 100){
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay =  Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

 updateCounter();

}
startLoader();


gsap.to(".counter",2, {
  delay:0.1,
  opacity: 0,
});


gsap.to(".bar",2,{
  delay:0.5,
  height: 0,
  stagger:{
    amount:0.9,
  },
  ease:"power4.inOut",
  onComplete: function () {
   
    document.getElementById("preLoader").style.display = "none";
  },

});


var crsr = document.querySelector(".cursor");
const hoverElements = document.querySelectorAll('.hover-element');



var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});


hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    
    crsr.style.width = "3rem";
    crsr.style.height = "3rem";
  });

  element.addEventListener('mouseleave', () => {
    
    crsr.style.width = "20px";
    crsr.style.height = "20px";
  });
});


var boxes = document.querySelectorAll(".box");


boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "5rem";
    crsr.style.backgroundImage = `url(${att})`;
    boxes.style.backgroundColor = "#ffffff";
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});





var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = ".5";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3,
    },
  });
  tl.to(
    ".page1 h1",
    {
      x: -100,
    },
    "anim"
  );
  tl.to(
    ".page1 h2",
    {
      x: 100,
    },
    "anim"
  );
  tl.to(
    ".page1 video",
    {
      width: "90%",
      play: true,
    },
    "anim"
  );

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 1,
    },
  });
  tl2.to(".main", {
    backgroundColor: "#fff",
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -280%",
      end: "top -300%",
      scrub: 1,
    },
  });

  tl3.to(
    ".main",
    {
      backgroundColor: "#0F0D0D",

    },
    "page3"
  );

  tl3.to(
    ".page4 h1",
    {
      color: "white",
    },
    "page3"
  );

var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2 h1",
      scroller: ".main",
      // markers:true,
      start: "top -300%",
      end: "top -400%",
      scrub: 1,
    },
  });

//   tl4.to(".main", {
//     backgroundColor: "white",
//   },"page6");

  tl4.to(".scrollText",{
    left:"-100%",
  },"page6");


  var downloadButtons = document.querySelectorAll(".downloadButton");

  
  downloadButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var cvLink = "https://drive.google.com/file/d/17H4AY21D7ZDonuscbT5mbuQ1_2Fdj0rt/view?usp=drive_link";
        var downloadLink = document.createElement("a");
        downloadLink.href = cvLink;
        downloadLink.target = "_blank"; 
        downloadLink.download = "AjayBerwal-CV.pdf";
        downloadLink.click();
    });
});


