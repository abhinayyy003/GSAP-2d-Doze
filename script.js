const frames = {
  currentIndex: 0,
  maxIndex: 1345,
};

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let imagesLoaded = 0;
const images = [];

function preloadImages() {
  for (let i = 1; i <= frames.maxIndex; i++) {
    const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpg`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = function () {
      imagesLoaded++;
      if (imagesLoaded === frames.maxIndex) {
        // console.log("all images loaded");
        loadImage(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
}

function loadImage(index) {
  if (index >= 0 && index <= frames.maxIndex) {
    const img = images[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    frames.currentIndex = index;
  }
}

function startAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent",
      start: "top top",
      scrub: 2,
      end: "bottom bottom",
    },
  });

  function updateFrame(index) {
    return {
      currentIndex: index,
      ease: "linear",
      onUpdate: function () {
        loadImage(Math.floor(frames.currentIndex));
      },
    };
  }

  //   tl.to(frames, {
  //     currentIndex: frames.maxIndex,
  //     onUpdate: function () {
  //       loadImage(Math.floor(frames.currentIndex));
  //     },
  //   });

  //as a is written, it's a flag that make sures both animation happen same time rather, one after another like regular .to
  tl
  .to(frames, updateFrame(84), "first")
  .to(".animate1",{opacity: 0, ease: "linear"},"first")

  .to(frames, updateFrame(168), "second")
  .to(".animate2",{opacity: 1, ease: "linear"},"second")

  .to(frames, updateFrame(252), "third")
  .to(".animate2",{opacity: 1, ease: "linear"},"third")

  .to(frames, updateFrame(336), "fourth")
  .to(".animate2",{opacity: 0, ease: "linear"},"fourth")

  .to(frames, updateFrame(420), "fifth")
  .to(".animate3",{opacity: 1, ease: "linear"},"fifth")

  .to(frames, updateFrame(504), "sixth")
  .to(".animate3",{opacity: 1, ease: "linear"},"sixth")

  .to(frames, updateFrame(588), "seventh")
  .to(".animate3",{opacity: 0, ease: "linear"},"seventh")

  .to(frames, updateFrame(672), "eighth")
  .to(".panel",{x: "0%", ease: "expo"},"eighth")

  .to(frames, updateFrame(756), "ninth")
  .to(".panel",{x: "0%", ease: "expo"},"ninth")
  
  .to(frames, updateFrame(840), "tenth")
  .to(".panel",{opacity: "0", ease: "linear"},"tenth")
  
  .to(frames, updateFrame(924), "eleventh")
  .to("canvas",{scale: .5, ease: "linear"},"eleventh")
  
  .to(frames, updateFrame(1008), "twelveth")
  .to(".panelism",{opacity: 1, ease: "expo"},"twelveth")
  
  .to(frames, updateFrame(1092), "twelveth")
  .to(".panelism span",{width: 200, ease: "expo"},"twelveth")
  
  .to(frames, updateFrame(1176), "thirteen")
  .to("canvas",{scale: 1, ease: "linear"},"thirteen")
  
  .to(frames, updateFrame(1260), "fourteen")
  .to(".panelism",{scale: 2, ease: "circ"},"fourteen")
  
  .to(frames, updateFrame(1344), "fifteen")
  .to(".panelism",{scale: 2, ease: "circ"},"fifteen");

}

window.addEventListener("resize", function () {
  loadImage(Math.floor(frames.currentIndex));
});

let headings = document.querySelectorAll(".headings h3")
headings.forEach(function(elem){
    gsap.from(elem,{
        scrollTrigger:{
            trigger: elem,
            start:"top 90%",
            end:"bottom 20%",
            scrub:2
        },
        opacity:.3
    })
})

//lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(1, 1, 1, 1)",
  duration: 0.2,
});

Shery.makeMagnet("#magnet", {});

preloadImages();