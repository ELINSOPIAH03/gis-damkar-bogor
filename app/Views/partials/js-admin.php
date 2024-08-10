
    </div>
    <script src="https://cdn.jsdelivr.net/npm/ol@latest/dist/ol.js"></script>
    <script src="https://unpkg.com/ol-popup@5.0.0/dist/ol-popup.js"></script>
    <script src="<?= base_url('dist/ol-geocoder-debug.js') ?>"></script>
    <script src="<?= base_url('assets/vendor/global/global.min.js') ?>"></script>
    <script src="<?= base_url('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') ?>"></script>

    <!-- lightgallery -->
    <script src="<?= base_url('assets/vendor/lightgallery/js/lightgallery-all.min.js') ?>"></script>

    <script src="<?= base_url('assets/vendor/chart-js/chart.bundle.min.js') ?>"></script>
    <script src="<?= base_url('assets/js/custom.min.js') ?>"></script>
    <script src="<?= base_url('assets/js/deznav-init.js') ?>"></script>
    <!-- Apex Chart -->
    <script src="<?= base_url('assets/vendor/apexchart/apexchart.js') ?>"></script>


    <!-- Svganimation scripts -->
    <script src="<?= base_url('assets/vendor/svganimation/vivus.min.js') ?>"></script>
    <script src="<?= base_url('assets/vendor/svganimation/svg.animation.js') ?>"></script>

    
    <script>
        // Define layers, view, and overlay as per your configuration
    const osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
    });

    const view = new ol.View({
        center: ol.proj.fromLonLat([106.71667, -6.58333]), // Tengah di garis bujur 0, lintang 0
        zoom: 10.5, // Level zoom awal
    });

    const overlay = new ol.Overlay({
        // Definisikan properti overlay di sini
    });

    // Inisialisasi peta
    const map = new ol.Map({
        overlays: [overlay],
        target: 'map',
        layers: [osmLayer],
        view: view,
    });

    // Buat tombol "Tambah POI" sebagai kontrol kustom
    const addPoiButtonControl = new ol.control.Control({
        element: document.getElementById('addPoiButton'),
    });

    // Tambahkan kontrol kustom ke peta
    // map.addControl(addPoiButtonControl);

    // Buat objek format GeoJSON
    const geojsonFormat = new ol.format.GeoJSON();

    const popup = new ol.Overlay.Popup();

    // Instantiate with some options and add the Control
    const geocoder = new Geocoder('nominatim', {
        provider: 'photon',
        targetType: 'glass-button',
        lang: 'en',
        placeholder: 'Cari ...',
        limit: 5,
        keepOpen: true,
    });

    map.addControl(geocoder);
    map.addOverlay(popup);

    // Inisialisasi alat gambar (tanpa menambahkannya ke peta pada awalnya)
    const draw = new ol.interaction.Draw({
        source: new ol.source.Vector(),
        type: 'Point', // Atur tipe geometri yang ingin digambar (misalnya, Point, LineString, Polygon, dll.)
    });

    // Dengarkan ketika fitur digambar
    draw.on('drawend', (event) => {
        const feature = event.feature; // Dapatkan fitur yang digambar
        const geometry = feature.getGeometry(); // Dapatkan geometri fitur

        // Dapatkan koordinat dari geometri (misalnya, Point)
        const coordinates = geometry.getCoordinates();
        const lonLat = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
        const lon = lonLat[0];
        const lat = lonLat[1];

        // Ubah geometri ke dalam format WKT
        const wktFormat = new ol.format.WKT();
        const wkt = wktFormat.writeGeometry(geometry);

        // Isi nilai lat dan long di formulir POI
        document.getElementById('lat').value = lat;
        document.getElementById('long').value = lon;

        // Isi nilai geometri di formulir POI dengan format WKT
        document.getElementById('geom').value = wkt;

        // Tampilkan informasi fitur (opsional)
        popup.show(coordinates, 'POI ditambahkan di ' + lon + ', ' + lat);
    });

    // Mendengarkan acara klik pada tombol "Tambah POI"
    document.getElementById('addPoiButton').addEventListener('click', () => {
        // Aktifkan alat gambar hanya ketika tombol ditekan
        map.addInteraction(draw);
        // draw.setActive(false);
    });

    map.updateSize();
        // Define layers, view, and overlay as per your configuration
        // const osmLayer = new ol.layer.Tile({
        //     source: new ol.source.OSM(),
        // });

        // const view = new ol.View({
        //     center: ol.proj.fromLonLat([106.71667, -6.58333]), // Tengah di garis bujur 0, lintang 0
        //     zoom: 10.5, // Level zoom awal
        // });

        // const overlay = new ol.Overlay({
        //     // Definisikan properti overlay di sini
        // });

        // // Inisialisasi peta
        // const map = new ol.Map({
        //     overlays: [overlay],
        //     target: 'map',
        //     layers: [osmLayer],
        //     view: view,
        // });

        // // Buat tombol "Tambah POI" sebagai kontrol kustom
        // const addPoiButtonControl = new ol.control.Control({
        //     element: document.getElementById('addPoiButton'),
        // });

        // // Tambahkan kontrol kustom ke peta
        // map.addControl(addPoiButtonControl);

        // // Buat objek format GeoJSON
        // const geojsonFormat = new ol.format.GeoJSON();

        // const popup = new ol.Overlay.Popup();

        // // Instantiate with some options and add the Control
        // const geocoder = new Geocoder('nominatim', {
        //     provider: 'photon',
        //     targetType: 'glass-button',
        //     lang: 'en',
        //     placeholder: 'Cari ...',
        //     limit: 5,
        //     keepOpen: true,
        // });

        // map.addControl(geocoder);
        // map.addOverlay(popup);

        // // Inisialisasi alat gambar (tanpa menambahkannya ke peta pada awalnya)
        // const draw = new ol.interaction.Draw({
        //     source: new ol.source.Vector(),
        //     type: 'Point', // Atur tipe geometri yang ingin digambar (misalnya, Point, LineString, Polygon, dll.)
        // });

        // // Dengarkan ketika fitur digambar
        // draw.on('drawend', (event) => {
        //     const feature = event.feature; // Dapatkan fitur yang digambar
        //     const geometry = feature.getGeometry(); // Dapatkan geometri fitur

        //     // Dapatkan koordinat dari geometri (misalnya, Point)
        //     const coordinates = geometry.getCoordinates();
        //     const lonLat = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
        //     const lon = coordinates[0];
        //     const lat = coordinates[1];

        //     // Ubah geometri ke dalam format GeoJSON
        //     const geojsonFormat = new ol.format.GeoJSON();
        //     const geomJson = geojsonFormat.writeGeometry(geometry);

        //     // Isi nilai lat dan long di formulir POI
        //     document.getElementById('lat').value = lat;
        //     document.getElementById('long').value = lon;

        //     // Isi nilai geometri di formulir POI (opsional)
        //     document.getElementById('geom').value = geomJson;

        //     // Tampilkan informasi fitur (opsional)
        //     popup.show(coordinates, 'POI ditambahkan di ' + lon + ', ' + lat);
        // });

        // // Mendengarkan acara klik pada tombol "Tambah POI"
        // document.getElementById('addPoiButton').addEventListener('click', () => {
        //     // Aktifkan alat gambar hanya ketika tombol ditekan
        //     map.addInteraction(draw);
        //     // draw.setActive(false);
        // });

    </script>


</body>



</html>