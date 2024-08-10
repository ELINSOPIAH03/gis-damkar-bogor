<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from motaadmin.dexignlab.com/xhtml/app-profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 03 Dec 2023 11:57:16 GMT -->

<head>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Specific -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- PAGE TITLE HERE -->
    <title>Dashboard - Web Gis Damkar</title>

    <!-- FAVICONS ICON -->
    <link rel="shortcut icon" type="image/png" href="<?= base_url('assets/images/favicon.png') ?>">

    <!-- lightgallery -->
    <link href="<?= base_url('assets/vendor/lightgallery/css/lightgallery.min.css') ?>" rel="stylesheet">

    <link href="<?= base_url('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css') ?>" rel="stylesheet">
    <link href="<?= base_url('assets/css/style.css') ?>" rel="stylesheet">
    <link href="<?= base_url('dist/ol-geocoder.css') ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@latest/ol.css">
    <link rel="stylesheet" href="https://unpkg.com/ol-popup@5.0.0/src/ol-popup.css">
    <link href="https://cdn.jsdelivr.net/npm/ol-geocoder/dist/ol-geocoder.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ol-geocoder/dist/ol-geocoder.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
 
  <style>
    #map {
        width: 100%;
        height: 100%;
        position: absolute !important;
        right: 0 !important;
        z-index: 0;
    }

    .ol-zoom-in,
    .ol-zoom-out,
    .ol-rotate,
    .ol-attribution{
      display: none;
    }

    #addPoiButton{
        margin-top: 100px !important;
        margin-left: 80px !important;
        position: absolute !important;
    }
  </style>
</head>

<body>