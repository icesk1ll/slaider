$('.1').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    $('.1').removeClass('animate1').addClass('animate2');
    $('.2').removeClass('animate1').addClass('animate3');
    $('.3').removeClass('animate1').addClass('animate4');
    $('.4').removeClass('animate1').addClass('animate5');

});

setTimeout(function()  {
    $('.first').addClass('hidden');
}, 3000);
setTimeout(function()  {
    $('.clock').removeClass('hidden');
}, 3000);
setTimeout(function()  {
    $('.clock').addClass('hidden');
}, 15000);
setTimeout(function()  {
    $('.showUp').removeClass('hidden');
}, 15000);
setTimeout(function()  {
    $('.showUp').addClass('hidden');
}, 30000);
setTimeout(function()  {
    $('.flip-container').removeClass('hidden');
}, 30000);