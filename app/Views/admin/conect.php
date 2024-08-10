<?php
    $host = "localhost"; 
    $port = "5432"; 
    $dbname = "gis_damkar"; 
    $user = "postgres"; 
    $password = ""; 

    $conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
    
    if (!$conn) {
        echo "Koneksi gagal: " . pg_last_error();
    } else {
        echo "Koneksi berhasil.";
    
    }

    // Tutup koneksi
    pg_close($conn);
?>