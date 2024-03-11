<?php echo view('partials/head'); ?>
<div id="preloader">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</div>

<div id="main-wrapper">

    <?php echo view('partials/logo'); ?>

    <?php echo view('partials/navbar'); ?>

    <?php echo view('partials/sidebar'); ?>

    <div class="content-body">
        <!-- row -->
        <div class="container-fluid">
            <div class="map" id="map">
                <!-- base layer -->
                <div class="baselayer-switcher">
                    <div class="gradient"></div>
                    <span class="baselayers-title">Bases</span>
                    <div class="mouse-box"></div>

                    <div class="base-choice">
                        <div class="more-layers-icon">
                            <i class="bi bi-stack"></i>
                            <span class="layer-name">More</span>
                        </div>
                    </div>

                    <div class="more-layers-wrapper">
                        <div class="box">
                            <div class="flex">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end base layer -->

                <!-- popup -->
                <div id="popup-2" class="ol-popup">
                    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                    <div id="popup-content"></div>
                </div>
                <!-- end popup -->
                <div id="popup" class="ol-popup-2"></div>
                <!-- list layer -->
                <?php echo view('partials/layerswitcher'); ?>


            </div>

        </div>
    </div>

    <?php echo view('partials/footer'); ?>


</div>
<?php echo view('partials/js'); ?>