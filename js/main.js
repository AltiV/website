$(function () {
    console.log("Javascript file loaded.");

    $(".progress-custom").css('top', document.getElementById("navbar").clientHeight);
    /*
    $(document).on("click", "*", function(){ // watch the whole document for when existing (or new) tr elements are clicked
        console.log("clicked!");
    });
    */

    $(".navbar-brand").click(() => {
        location.reload(true);
    });
    
    $(".navbar ul a").click(function(event) {
        // Ensure offset respects current navbar height
        let navHeight = document.getElementById("navbar").clientHeight;
        let progressHeight = document.getElementById("progress").clientHeight;

        // Prevent standard link action (removes the '#' at end of URL)
        event.preventDefault();

        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - navHeight - progressHeight}, 1000);
    });

    $(window).scroll(() => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;

        $(".progress-bar-custom").css('width', scrolled + "%");
    });

    // Ensure that progress bar snaps to below the navbar
    // Probably a more efficient way of doing this
    $(window).resize(() => {
        $(".progress-custom").css('top', document.getElementById("navbar").clientHeight);
    })
});