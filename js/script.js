
$(document).ready(function() {

    function fullpage_init(){


       

        $('#contents').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['main', 'about me','skills','work', 'design', 'contact'],
            showActiveTooltip: true,
            scrollingSpeed: 1000,  
            scrollOverflow: true,
            responsiveWidth: 1000,
                   
        });

    }

    function mbNav_init(){
        $mbNav = $('#main-header > .sns-btn');
        
        $mbNav.click(function(e){

            if ($mbNav.hasClass('active')){
                if (e.target === $('div.sns-btn')){
                    // 리스트를 클릭했을 때 리스트가 사라지지 않도록 이벤트 전파를 막아줌.
                    console.log(e.target);
                    return;
                }
                else{
                    $mbNav.removeClass('active');
                    // 리스트가 아닌 메뉴 버튼을 클릭했을 때
                }
            } else {
                $mbNav.addClass('active');
            }
        });

        
    }

    fullpage_init();
    mbNav_init();

});