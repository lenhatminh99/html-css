var swiper = new Swiper(".mySwiperBanner", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiperSection2 = new Swiper(".mySwiperSection2", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides:true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiperSection3 = new Swiper(".mySwiperSection3", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});