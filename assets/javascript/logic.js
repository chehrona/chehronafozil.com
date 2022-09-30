$(document).ready(function() {
    setTimeout(function() {
        $("#cursor-overlay").addClass("remove-cursor")
    }, 1500);


    let moveRatio;
    let portViewHeight = $(window).height();
    $(window).scroll(function(e) {
        let scrollPosition = $(window).scrollTop();
        if (scrollPosition <= portViewHeight) {
            $(".lang--wrapper").addClass("active");
            moveRatio = 28/portViewHeight;
            $("#logo--letter-2").css({"transform": `translateX(${scrollPosition * moveRatio}px)`})
        } else if (scrollPosition <= 2*portViewHeight) {
            if (scrollPosition <= 1.5*portViewHeight) {
                moveRatio = 14/(portViewHeight/2);
                $(".logo-dot").css({"transform": `translateX(${(scrollPosition - portViewHeight) * moveRatio}px)`});
            } else if (scrollPosition <= 2*portViewHeight) {
                moveRatio = 24.8/(portViewHeight/2);
                $(".logo-dot").css({"transform": `translate(14px, ${(scrollPosition - (1.5*portViewHeight)) * moveRatio}px)`});
            }
        } else if (scrollPosition <= 3*portViewHeight) {
            moveRatio = 180/portViewHeight;
            $("#logo--letter-2").css({"transform": `translateX(28px) rotateY(${(scrollPosition - 2*portViewHeight) * moveRatio}deg)`})
        }
            
        });

        $("#node-image").mouseover(function(e) {
            e.preventDefault();
            let animated = $(this).attr("data-anim");
            $(this).attr("src", animated);
        })

        $("#node-image").mouseout(function(e) {
            e.preventDefault();
            let still = $(this).attr("data-still");
            $(this).attr("src", still);
        })


})
