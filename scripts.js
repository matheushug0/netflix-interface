$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:5.5
        },
        600:{
            items:4.5
        },
        1000:{
            items:5.5
        }
    },
})

// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();

  const video = document.querySelector("video")
  const soundOn = document.querySelector('#sound-on')
  console.log(video)

  video.addEventListener("ended", function(){video.style.opacity = 0; soundOn.style.opacity = 0;})

  document.addEventListener('scroll', function(){
    if(document.documentElement.dataset.scroll = window.scrollY != 0){
      video.volume = 0
    }else if(document.documentElement.dataset.scroll = window.scrollY == 0){
      video.volume = 1;
    }
  })

  let sound = function(){
    video.muted = false
  }