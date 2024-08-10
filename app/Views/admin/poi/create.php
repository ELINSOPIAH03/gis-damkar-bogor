<?php echo view('partials/head-admin'); ?>

<div id="preloader">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</div>

<div id="main-wrapper">

    <?php echo view('partials/navbar-admin'); ?>
    <?php echo view('partials/side-admin'); ?>


    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 form">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Add Data POI Damkar</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="<?php echo site_url('admin/data-poi/store'); ?>" method="post" name="formPoiDamkar">
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">No</label>
                                        <div class="col-sm-9">
                                            <input type="number" name="no" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="name" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Alamat</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="alamat" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Lat</label>
                                        <div class="col-sm-9">
                                            <input type="text" id="lat" name="lat" class="form-control" required readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Long</label>
                                        <div class="col-sm-9">
                                            <input type="text" id="long" name="long" class="form-control" required readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Geom</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="geom" id="geom" class="form-control" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <div class="col-sm-9 offset-sm-3">
                                            <button type="submit" class="btn btn-primary">Add Data</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-auto">
                    <div id="map" class="map" style="width: 50%; height: 500px; padding-right: 20px;"></div>
                    <button id="addPoiButton" class="btn btn-light bg-white m-0 p-0">
                        <svg class="text-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24" />
                                <path d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z" fill="#000000" />
                                <path d="M12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 Z" fill="#000000" opacity="0.3" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="text-start fs-6">
                    <label for="info">*NB) Untuk Lat, Long dan Geom tidak bisa diisi manual, harus klik di map</label>
                </div>
            </div>
            <!-- row -->
            <div class="row">

            </div>

        </div>
    </div>

    <div class="footer">
        <div class="copyright">
            <!-- <p>Copyright © Designed &amp; Developed by <a href="http://dexignlab.com/" target="_blank">DexignLab</a> 2023</p> -->
        </div>
    </div>
</div>

<?php echo view('partials/js-admin'); ?>