
var lastTs = new Date().getTime()
setIntervalAnimationFrame(() => {
  console.log(new Date(), new Date().getTime() - lastTs)
  lastTs = new Date().getTime()
}, 500)