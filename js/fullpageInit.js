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

    fullpage_init();


});