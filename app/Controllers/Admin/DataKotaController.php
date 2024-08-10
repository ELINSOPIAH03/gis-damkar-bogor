<?php

namespace App\Controllers\Admin;

use App\Models\DataModel;
use CodeIgniter\Controller;
use App\Models\DataKotaModel;

class DataKotaController extends Controller
{
    public function index()
    {

        $model = new DataKotaModel();
        $data['data'] = $model->get_data_kota(); // Mengambil semua data dari model

         // Persiapan data untuk digunakan di view
        return view('admin/scoring/kota', $data); // Mengirim data ke view
    }


    public function edit($id = null)
    {
        $model = new DataKotaModel();
        $data['data'] = $model->get_data_kota_by_id($id);// Mengambil data berdasarkan ID
        return view('admin/scoring/edit-kota', $data); // Mengirim data ke view
    }

    public function update($id)
    {
        $model = new DataKotaModel();
        $data = [
            'scoring' => $this->request->getPost('scoring') // Mengambil data yang diinput dari form
        ];
        $model->update_data_kota($id, $data); 
        return redirect()->to('admin/data-kota');
        // return redirect()->to('admin/scoring');
    }

    // public function delete($id = null)
    // {
    //     $model = new DataModel();
    //     $model->delete_data($id);
    //     return redirect()->to('admin/data-kota');
    // }
}
