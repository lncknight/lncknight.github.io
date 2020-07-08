;;(function () {
  let setIntervalAnimationFrame = function(callback, delay = 1000) {
  
    // main
    callback && callback()
  
    setTimeout(function() {
        setIntervalAnimationFrame(callback, delay)
    }, delay)
  }

  window.setIntervalAnimationFrame = setIntervalAnimationFrame
})()