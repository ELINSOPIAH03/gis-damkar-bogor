
<script src="<?= base_url('src/js/bundle.js') ?>"></script>
<script src="<?= base_url('my-vendor/cesium/Cesium/Cesium.js') ?>"></script>


<!-- Required vendors -->
<script src="<?= base_url('assets/vendor/global/global.min.js') ?>"></script>
<script src="<?= base_url('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') ?>"></script>
<script src="<?= base_url('assets/vendor/chart-js/chart.bundle.min.js') ?>"></script>
<script src="<?= base_url('assets/js/custom.min.js') ?>"></script>
<script src="<?= base_url('assets/js/deznav-init.js') ?>"></script>
<!-- Apex Chart -->
<script src="<?= base_url('assets/vendor/apexchart/apexchart.js') ?>"></script>

<!-- Vectormap -->
<!-- Chart piety plugin files -->
<script src="<?= base_url('assets/vendor/peity/jquery.peity.min.js') ?>"></script>

<!-- Chartist -->
<script src="<?= base_url('assets/vendor/chartist/js/chartist.min.js') ?>"></script>

<!-- Dashboard 1 -->
<script src="<?= base_url('assets/js/dashboard/dashboard-1.js') ?>"></script>
<!-- Svganimation scripts -->
<script src="<?= base_url('assets/vendor/svganimation/vivus.min.js') ?>"></script>
<script src="<?= base_url('assets/vendor/svganimation/svg.animation.js') ?>"></script>

<script>
    function getUrlParams(dParam) {
        var dPageURL = window.location.search.substring(1),
            dURLVariables = dPageURL.split('&'),
            dParameterName,
            i;

        for (i = 0; i < dURLVariables.length; i++) {
            dParameterName = dURLVariables[i].split('=');

            if (dParameterName[0] === dParam) {
                return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
            }
        }
    }

    (function($) {
        "use strict"

        var direction = getUrlParams('dir');
        if (direction != 'rtl') {
            direction = 'ltr';
        }

        var dezSettingsOptions = {
            typography: "roboto",
            version: "light",
            layout: "vertical",
            headerBg: "color_1",
            navheaderBg: "color_3",
            sidebarBg: "color_1",
            sidebarStyle: "mini",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "wide",
            direction: direction
        };

        new dezSettings(dezSettingsOptions);

        jQuery(window).on('resize', function() {

            var sidebar = 'mini';
            var screenWidth = jQuery(window).width();
            if (screenWidth < 600) {
                sidebar = 'overlay';
            }
            dezSettingsOptions.sidebarStyle = sidebar;

            new dezSettings(dezSettingsOptions);
        });

    })(jQuery);
</script>
</body>

</html>