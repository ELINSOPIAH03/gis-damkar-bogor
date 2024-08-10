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
                        <h4>Data Master POI Damkar Bogor</h4>
                    </div>
                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="mb-4">
                    <a href="<?php echo site_url('admin/data-poi/create'); ?>" role="button" class="btn btn-sm btn-primary">Add New Data</a>
                </div>
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">GID</th>
                                        <!-- <th scope="col">No</th> -->
                                        <th scope="col">Name</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Lat</th>
                                        <th scope="col">Long</th>
                                        <th scope="col" >Geom</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($data as $row) : ?>
                                        <tr>
                                            <td><?php echo $row['gid']; ?></td>
                                            <!-- <td><?php echo $row['no']; ?></td> -->
                                            <td style="white-space: wrap;"><?php echo $row['name']; ?></td>
                                            <td style="white-space: wrap;"><?php echo $row['alamat']; ?></td>
                                            <td><?php echo $row['lat']; ?></td>
                                            <td><?php echo $row['long']; ?></td>
                                            <td style="white-space: wrap;"><?php echo $row['geom']; ?></td>
                                            <td>
                                                <a href="<?php echo site_url('admin/data-poi/edit/' . $row['gid']); ?>" role="button" class="btn btn-sm btn-success">Edit</a> 
                                                <a href="<?php echo site_url('admin/data-poi/delete/' . $row['gid']); ?>" onclick="return confirm('Are you sure you want to delete this data?');" role="button" class="btn btn-sm btn-danger">Delete</a>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
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