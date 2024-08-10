<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from motaadmin.dexignlab.com/xhtml/index-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 03 Dec 2023 11:57:13 GMT -->

<head>

  <!-- Meta -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="author" content="DexignLab">
  <meta name="robots" content="">
  <meta name="keywords" content="admin, admin dashboard, admin template, analytics, bootstrap, bootstrap 5, bootstrap 5 admin template, modern, responsive admin dashboard, sales dashboard, sass, ui kit, web app, frontend, shop, shop cart, blog">
  <meta name="description" content="Discover MotaAdmin - the ultimate admin dashboard and Bootstrap 5 template. Specially designed for professionals, and for business. MotaAdmin provides advanced features and an easy-to-use interface for creating a top-quality website with frontend">
  <meta property="og:title" content="MotaAdmin : Admin & Dashboard Template + FrontEnd">
  <meta property="og:description" content="Discover MotaAdmin - the ultimate admin dashboard and Bootstrap 5 template. Specially designed for professionals, and for business. MotaAdmin provides advanced features and an easy-to-use interface for creating a top-quality website with frontend">
  <meta property="og:image" content="social-image.png">
  <meta name="format-detection" content="telephone=no">

  <!-- Mobile Specific -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- PAGE TITLE HERE -->
  <title>Pemetaan Damkar</title>

  <!-- FAVICONS ICON -->
  <link rel="shortcut icon" type="image/png" href="<?= base_url('assets/images/favicon.png')?>">

  <link href="<?= base_url('assets/vendor/jqvmap/css/jqvmap.min.css') ?>" rel="stylesheet">
  <link rel="stylesheet" href="<?= base_url('assets/vendor/chartist/css/chartist.min.css') ?>">
  <link href="<?= base_url('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css') ?>" rel="stylesheet">
  <link href="<?= base_url('assets/css/style.css') ?>" rel="stylesheet">
  <link href="<?= base_url('assets/../../cdn.lineicons.com/2.0/LineIcons.css') ?>" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous">
  <link rel="stylesheet" href="<?= base_url('webgis/css/maptools.css') ?>">
  <link rel="stylesheet" href="<?= base_url('webgis/ol-cesium/olcs.css') ?>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://unpkg.com/ol-geocoder/dist/ol-geocoder.min.css" rel="stylesheet">
  <script src="https://unpkg.com/ol-geocoder/dist/ol-geocoder.js"></script>
  <style>
    @import "node_modules/ol/ol.css";
    /* @import ""; */
  </style>
  <style>
    html,
    body {
      margin: 0;
      height: 100%;
    }

    #map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      left: 0;
    }
    .featureInfo{
      /* display: flex;
      flex-direction: column; */
      background: white
    }
  </style>
</head>

<body>