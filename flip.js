setTimeout(function()  {setInterval(function(){
document.querySelector(".flip-container").classList.toggle("flip")
}, 2000);
setTimeout(function()  {
    document.querySelector(".front").classList.add("flower1");
}, 4000);
setTimeout(function()  {
    document.querySelector(".back").classList.add("flower2");
}, 6000);
setTimeout(function()  {
    document.querySelector(".front").classList.add("flower3");
}, 8000);
setTimeout(function()  {
    document.querySelector(".back").classList.add("flower4");
}, 10000);
setTimeout(function()  {
    document.querySelector(".front").classList.add("flower5");
}, 12000);
setTimeout(function()  {
    document.querySelector(".back").classList.add("front");
}, 12000);},30000);