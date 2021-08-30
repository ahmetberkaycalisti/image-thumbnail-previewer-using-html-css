
$(document).ready(function() {
    // creating click event on anchor tag
    $('.container .grid-col li a').click(function(e) {

        // console.log(e.target.parentElement)
        let href = e.target.parentElement.getAttribute('href')
        // console.log(href)

        $('.tabcontent').each(function(index, element) {
            if (`#$(element.id)` != href) {
                $(element).removeClass("active")
            }
        })

        $('.container .blog-content span').click(function() {
            $(href).removeClass('active');
        })

        $(href).toggleClass('active');
        $('.tabcontent').css({
            height:"30rem"
        })


    })
})