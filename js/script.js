
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
        const $mbNav = $('#main-header > .sns-btn');
        const $mbNavList = $mbNav.find('li > a');
        
        $mbNav.click(function(e){

            if ($mbNav.hasClass('active')){
                if (e.target !== e.currentTarget){
                    // 리스트를 클릭했을 때 리스트가 사라지지 않도록 이벤트 전파를 막아줌.
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

        $("html").on('click', function(e){

            if (e.target !== $mbNav[0] && $mbNav.hasClass('active')){
                for (let i = 0; i <= $mbNavList.length - 1; i++){
                    console.log(e.target, $mbNavList[i]);
                    if (e.target === $mbNavList[i]){
                        return;
                    }                
                }               
                $mbNav.removeClass('active');
               }

            

           
        });
    }

    fullpage_init();
    mbNav_init();

});