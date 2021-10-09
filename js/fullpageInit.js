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
            responsiveWidth: 1000, //1000px 이하에서 fullpage 해제

        });

    }

    function scrollMagic_init() {
        
        function makeScrollMagic() {
            var controller = new ScrollMagic.Controller();
            var revealElements = $('section'); // 타겟 등록

            for (var i = 0; i < revealElements.length; i++) {

                var sectionAni = new ScrollMagic.Scene({
                        triggerElement: revealElements[i],
                        triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                        offset: 0,
                    })
                    // .addIndicators({
                    //     name:"section" + i
                    //   })
                    .setClassToggle(revealElements[i], "active")
                    .addTo(controller); // 컨트롤러 등록                
            }
        }

        function destoryScrollMagic(){
            controller.destroy(true);
            controller = null;
            sectionAni.destory(true);
            scene = null;
        }

        // enquire.js

        enquire.register("all and (max-width: 999px)", {
            match : function() {
                console.log('scrollMagic init');
                makeScrollMagic();
            },
            unmatch : function() {
                console.log('scrollMagic destory');
                destoryScrollMagic();
            }
    });




    }

    scrollMagic_init();
    fullpage_init();


});