;(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('active')
        $(this).find('.toggle-content').toggle()
    })
})();