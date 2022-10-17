const slider = $(".feedback__list").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnable: true,
    hideControlOnEnd: false,
});
$(".button--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});
$(".button--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});

const portfolio = $(".porfolio__list").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnable: false,
    hideControlOnEnd: false,

});
$(".button--portfolio--prev").click((e) => {
    e.preventDefault();
    portfolio.goToPrevSlide();
});
$(".button--portfolio--next").click((e) => {
    e.preventDefault();
    portfolio.goToNextSlide();
});