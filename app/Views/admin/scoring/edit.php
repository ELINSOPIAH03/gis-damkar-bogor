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
                            <h4 class="card-title">Edit Data Scoring Kebakaran Kabupaten</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form action="<?php echo site_url('admin/data/update/' . $data['gid']);  ?>" method="post">
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">GID</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo  $data['gid']; ?>" readonly>
                                        </div>
                                    </div>
                                    <!-- <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Nama Objek</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo  $data['namobj']; ?>" readonly>
                                        </div>
                                    </div> -->
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Remark</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['remark'];?>" readonly>
                                        </div>
                                    </div>
                                    <!-- <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Luas Wilayah</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['luaswh']; ?>" readonly>
                                        </div>
                                    </div> -->
                                    <!-- <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">L Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['lcode']; ?>" readonly>
                                        </div>
                                    </div> -->
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Waduk KC</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['wadmkc']; ?>" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Waduk KK</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['wadmkk']; ?>" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Waduk PR</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['wadmpr']; ?>" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Shape Length</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['shape_leng']; ?>" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Shape Area</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['shape_area']; ?>" readonly>
                                        </div>
                                    </div>
                                    <!-- <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Layer</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['layer']; ?>" readonly>
                                        </div>
                                    </div> -->
                                    <!-- <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Path</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" value="<?php echo $data['path']; ?>" readonly>
                                        </div>
                                    </div> -->
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Scoring</label>
                                        <div class="col-sm-9">
                                            <input type="number" class="form-control" name="scoring" value="<?php echo $data['scoring']; ?>">
                                        </div>
                                    </div>
                                    <div class="mb-3 d-flex">
                                        <div class="col-sm-10">
                                            <button type="submit" class="btn btn-primary">Simpan</button>
                                        </div>
                                        <p class="w-100" style="white-space: nowrap;">*Nb) Hanya bisa mengganti scoring </p>
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
