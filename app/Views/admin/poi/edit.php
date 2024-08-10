<?php echo view('partials/head'); ?>

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
            <!-- <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Edit Data Scoring Kebakaran</h4>
                    </div>
                </div>
            </div> -->
            <!-- row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Edit Data POI Damkar</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="<?php echo site_url('admin/data-poi/update/' . $data['gid']); ?>" method="post">
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">GID</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['gid']; ?>" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">No</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="no" class="form-control" value="<?php echo $data['no']; ?>" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="name" class="form-control" value="<?php echo $data['name']; ?>" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Alamat</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="alamat" class="form-control" value="<?php echo $data['alamat']; ?>" required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Lat</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="lat" class="form-control" value="<?php echo $data['lat']; ?>" required readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Long</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="long" class="form-control" value="<?php echo $data['long']; ?>" required readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Geom</label>
                                        <div class="col-sm-9">
                                            <input type="text" name="geom" class="form-control" value="<?php echo $data['geom']; ?>" required readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <div class="col-sm-9 offset-sm-3">
                                            <button type="submit" class="btn btn-primary">Update Data</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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
