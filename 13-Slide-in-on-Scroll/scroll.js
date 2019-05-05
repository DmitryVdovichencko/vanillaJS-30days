    //let's figure it out
    function debounce(func, wait = 20, immediate = true) {
      var timeout; // declare timeout
      return function() { 
        //return anonymous function
        //inside it we create vars for context object and arguments
        var context = this, args = arguments;
        // later is a function wich reset timeout
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);

        };
        //here we are in the beginning we have immediate===true and timeout as undefined so callNow is true
        var callNow = immediate && !timeout;
        //then we clearTimeout
        clearTimeout(timeout);
        // and we set timeout as timer for later function, with time 20ms in wait arg
        timeout = setTimeout(later, wait);
        //as we seen above callNow is true so we apply to our func context and args
        if (callNow) func.apply(context, args);
        // so if we try to call func in less then 20ms after last call...
        // we have timeout, which was set from last func call
        // only when wait time expired we run later function which reset timeout to null so we can call func again
      };
    }
    const sliderImages = document.querySelectorAll('.slide-in');
    function checkScroll(e) {
      sliderImages.forEach(slideImage=>{
          //calculate where we are
          const slidePos = (window.scrollY + window.innerHeight) - slideImage.height/2,
          //where is a bootom of image
            imageBottom = slideImage.offsetTop + slideImage.height,
          // we are at the half of image
            halfImageShown = slidePos > slideImage.offsetTop,
          //we are not after bottom
          notScrolledPast = window.scrollY < imageBottom;
          if (halfImageShown && notScrolledPast){
            slideImage.classList.add('active');
          }
          else{
            slideImage.classList.remove('active');
          }

        }
        )
    }
    window.addEventListener('scroll', debounce(checkScroll));