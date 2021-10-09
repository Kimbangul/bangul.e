$(document).ready(function () {

    function fullpage_init() {




        $('#contents').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['main', 'about me', 'skills', 'work', 'design', 'contact'],
            showActiveTooltip: true,
            scrollingSpeed: 1000,
            scrollOverflow: true,
            responsiveWidth: 1000,

        });

    }

    function scrollMagic_init() {
        var controller = new ScrollMagic.Controller();

        function animation1() {

            var revealElements = $('section');


            for (var i = 0; i < revealElements.length; i++) {
                var scene1 = new ScrollMagic.Scene({
                        triggerElement: revealElements[i],
                        triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                        offset: -300,
                        // duration: "100%",
                    })

                    .setClassToggle(revealElements[i], "active")
                    .addTo(controller); // 컨트롤러 등록                

            }
        }       
      
        animation1();
    }

    fullpage_init();


});