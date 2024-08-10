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
            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Data Master Scoring Kabupaten Bogor</h4>
                    </div>
                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">GID</th>
                                        <!-- <th scope="col">Nama Objek</th> -->
                                        <th scope="col">Remark</th>
                                        <!-- <th scope="col">Luas Wilayah</th> -->
                                        <!-- <th scope="col">L Code</th> -->
                                        <th scope="col">Waduk KC</th>
                                        <th scope="col">Waduk KK</th>
                                        <th scope="col">Waduk PR</th>
                                        <th scope="col">Shape Length</th>
                                        <th scope="col">Shape Area</th>
                                        <!-- <th scope="col">Layer</th> -->
                                        <!-- <th scope="col">Path</th> -->
                                        <th scope="col">Scoring</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($data as $row) { ?>
                                        <tr>
                                            <td><?php echo $row['gid']; ?></td>
                                            <!-- <td><?php echo $row['namobj']; ?></td> -->
                                            <td><?php echo $row['remark']; ?></td>
                                            <!-- <td><?php echo $row['luaswh']; ?></td> -->
                                            <!-- <td><?php echo $row['lcode']; ?></td> -->
                                            <td><?php echo $row['wadmkc']; ?></td>
                                            <td><?php echo $row['wadmkk']; ?></td>
                                            <td><?php echo $row['wadmpr']; ?></td>
                                            <td><?php echo $row['shape_leng']; ?></td>
                                            <td><?php echo $row['shape_area']; ?></td>
                                            <!-- <td><?php echo $row['layer']; ?></td> -->
                                            <!-- <td><?php echo $row['path']; ?></td> -->
                                            <td><?php echo $row['scoring']; ?></td>
                                            <td>
                                                <a href="<?php echo site_url('admin/data-kabupaten/edit/'.$row['gid']); ?>" role="button" class="btn btn-sm btn-success">Edit</a> 
                                                <!-- <a href="<?php echo site_url('admin/data/delete/' . $row['gid']); ?>" onclick="return confirm('Are you sure you want to delete this item?');">Delete</a> -->
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
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
