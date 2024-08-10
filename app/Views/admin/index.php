<?php echo view('partials/head-admin'); ?>


    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

    
    <?php echo view('partials/navbar-admin'); ?>
    <?php echo view('partials/side-admin'); ?>
        
    <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        <div class="welcome-text">
                            <h4>Hi, welcome back!</h4>
                            <p class="mb-0">Dashboar Web GIS Damkar Bogor</p>
                        </div>
                    </div>
                </div>
                <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                                <div class="photo-content">
                                    <div class="cover-photo"></div>
                                </div>
                                <div class="profile-info">
                                    <div class="profile-photo">
                                        <img src="images/profile/profile.png" class="img-fluid rounded-circle" alt="">
                                    </div>
                                    <div class="profile-details">
                                        <div class="profile-name px-3 pt-2">
                                            <h4 class="text-primary mb-0">Mitchell C. Shay</h4>
                                            <p>Head of Division</p>
                                        </div>
                                        <div class="profile-email px-2 pt-2">
                                            <!-- <h4 class="text-muted mb-0">hello@email.com</h4> -->
                                            <!-- <p>Email</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4>Diagram Scoring Kota Bogor</h4>
                        <div class="">
                        <div class="profile card card-body pt-5">
                            <canvas id="myChartKota"></canvas>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4>Diagram Scoring Kabupaten Bogor</h4>
                        <div class="">
                        <div class="profile card card-body pt-5">
                            <canvas id="myChartKab"></canvas>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Initialize the chart variables to null
            var myChart;
            var myChart2;

            // Function to create the first chart
            function createChartKota() {
                var ctx = document.getElementById('myChartKota').getContext('2d');

                // Destroy the existing chart if it exists
                if (myChart) {
                    myChart.destroy();
                }

                <?php if (isset($chart_data)) : ?>
                var data = <?= $chart_data ?>;
                myChart = new Chart(ctx, {
                    type: 'bar', // Jenis grafik (bisa diganti sesuai kebutuhan, seperti 'line', 'pie', dll.)
                    data: {
                        labels: data.labels, // Label untuk setiap data
                        datasets: [{
                            label: '', // Label untuk dataset
                            data: data.scoring, // Data untuk setiap label
                            backgroundColor: [
                                'rgb(252, 143, 6)',
                                'rgb(254, 180, 86)',
                                'rgb(252, 143, 6)',
                                'rgb(254, 180, 86)',
                            ],
                            borderRadius: 5,
                            // barThickness: 20, 
                            maxBarThickness: 40,
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: true,
                                }
                            },
                            x: {
                                grid: {
                                    display: false,
                                }
                            }
                        },
                        plugins: { 
                            legend: { 
                                display: false,
                                position: 'top', 
                            },
                            datalabels: {
                                display: false
                            },
                        } 
                    }
                });
                <?php else : ?>
                    // Handle jika $chart_data tidak tersedia
                    console.log('Data chart tidak tersedia.');
                <?php endif; ?>
            }

            // Function to create the second chart
            function createChartKab() {
                var ctx2 = document.getElementById('myChartKab').getContext('2d');

                // Destroy the existing chart if it exists
                if (myChart2) {
                    myChart2.destroy();
                }

                <?php if (isset($chart_data_kabupaten)) : ?>
                var data_kab = <?= $chart_data_kabupaten ?>;
                myChart2 = new Chart(ctx2, {
                    type: 'bar', // Jenis grafik (bisa diganti sesuai kebutuhan, seperti 'line', 'pie', dll.)
                    data: {
                        labels: data_kab.labels_kab, // Label untuk setiap data
                        datasets: [{
                            label: '', // Label untuk dataset
                            data: data_kab.scoring_kab, // Data untuk setiap label
                            backgroundColor: [
                                'rgb(252, 143, 6)',
                                'rgb(254, 180, 86)',
                                'rgb(252, 143, 6)',
                                'rgb(254, 180, 86)',
                            ],
                            borderRadius: 5,
                            // barThickness: 20, 
                            maxBarThickness: 40,
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: true,
                                }
                            },
                            x: {
                                grid: {
                                    display: false,
                                }
                            }
                        },
                        plugins: { 
                            legend: { 
                                display: false,
                                position: 'top', 
                            },
                            datalabels: {
                                display: false
                            },
                        } 
                    }
                });
                <?php else : ?>
                    // Handle jika $chart_data tidak tersedia
                    console.log('Data chart tidak tersedia.');
                <?php endif; ?>
            }

            // Create the charts when the page loads
            window.onload = function() {
                createChartKota();
                createChartKab();
            };
        </script>

        <?php echo view('partials/js-admin'); ?>