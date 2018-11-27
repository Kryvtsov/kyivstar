$('.stars li').on('click', function() {
    let el = $(this);
    el.addClass('active').siblings().removeClass('active');
});