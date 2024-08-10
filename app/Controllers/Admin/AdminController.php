<?php

namespace App\Controllers\Admin;

use App\Models\DataModel;
use App\Models\DataKotaModel;
use App\Controllers\BaseController;

class AdminController extends BaseController
{
    protected $db;

    public function index()
    {   
        $model = new DataKotaModel();
        $data['data'] = $model->get_data_kota();
        $chart_data = [];
        foreach ($data['data'] as $row) {
            $chart_data['labels'][] = $row['wadmkc']; // Kolom wadmkc dari tabel database
            $chart_data['scoring'][] = $row['scoring']; // Kolom scoring dari tabel database
        }

        // Encode data sebagai JSON untuk digunakan di view
        $data['chart_data'] = json_encode($chart_data);
        // var_dump($chart_data);

        $modelKabupaten = new DataModel();
        $data2['data_kabupaten'] = $modelKabupaten->get_data();

        // Proses data kabupaten untuk grafik (jika strukturnya mirip dengan data kota)
        $chart_data_kabupaten = [];
        foreach ($data2['data_kabupaten'] as $row) {
            $chart_data_kabupaten['labels_kab'][] = $row['wadmkc']; // Kolom wadmkc dari tabel database kabupaten
            $chart_data_kabupaten['scoring_kab'][] = $row['scoring']; // Kolom scoring dari tabel database kabupaten
        }
        $data2['chart_data_kabupaten'] = json_encode($chart_data_kabupaten);
        
        $merged_data = array_merge($data, $data2);
        return view('admin/index', $merged_data);
    }

    public function edit()
    {
        return view('admin/scoring/edit');
    }

    public function test()
    {
        return view('admin/conect');
    }
}
