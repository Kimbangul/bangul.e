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
            anchors: ['mainPage', 'profilePage', 'skillPage', 'workPage', 'designPage', 'contactPage']

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
                makeScrollMagic();
            },
            unmatch : function() {
                destoryScrollMagic();
            }
    });
    }

    function galleryModal_init(){
        const galleryThumb = document.querySelectorAll('#design .con > ul.gallery > li');
        galleryThumb.forEach(function(el, idx){            
            el.addEventListener('click', function(e){ 
                console.log(idx);    
                if (idx !== 3 && idx !== 8){
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const imgHref = e.target.parentElement.getAttribute('href'); // 이미지 속성값 가져오기
                    makeModal(imgHref);
                }
            });
        });

        // make modal
        function makeModal(imgHref){
            const targetEl = document.querySelector('body');             
            const modal = document.createElement('div');

            modal.setAttribute('id', 'gallery-modal'); // 생성한 엘리먼트에 id값 설정
            modal.innerHTML = `<div class='img-box modal'><div class="scrollable"><img src='${imgHref}'></div><a class='close-btn'><i class="fas fa-times"></i></a></div>`;
            
            targetEl.append(modal); // 모달창 추가
            $('html').addClass('on');
            $.fn.fullpage.setAllowScrolling(false);

            const createdModal = document.querySelector('#gallery-modal > .modal');
            createdModal.children[1].addEventListener('click', function(e){
                e.preventDefault(); 
                delModal();
            });


            $('#gallery-modal').click(function(e){
                console.log(e.target, e.currentTarget);
                if(e.target === e.currentTarget){
                    delModal();
                }
            })
        }

        // delete modal
        function delModal(){
            const modal = document.querySelector('#gallery-modal');
            modal.remove();
            $('html').removeClass('on');
            $.fn.fullpage.setAllowScrolling(true);
        }

       
    }

    scrollMagic_init();
    fullpage_init();
    galleryModal_init();

});