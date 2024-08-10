<?php

namespace App\Controllers\Admin;

use App\Models\DataModel;
use CodeIgniter\Controller;

class DataController extends Controller
{
    public function index()
    {

        $model = new DataModel();
        $data['data'] = $model->get_data(); // Mengambil semua data dari model
        return view('admin/scoring/index', $data); // Mengirim data ke view
    }

    // public function add()
    // {
    //     return view('add_data');
    // }

    public function save()
    {
        $model = new DataModel();
        $data = [
            'namobj' => $this->request->getVar('namobj'),
            'remark' => $this->request->getVar('remark'),
            'luaswh' => $this->request->getVar('luaswh'),
            'lcode' => $this->request->getVar('lcode'),
            'wadmkc' => $this->request->getVar('wadmkc'),
            'wadmkk' => $this->request->getVar('wadmkk'),
            'wadmpr' => $this->request->getVar('wadmpr'),
            'shape_leng' => $this->request->getVar('shape_leng'),
            'shape_area' => $this->request->getVar('shape_area'),
            'layer' => $this->request->getVar('layer'),
            'path' => $this->request->getVar('path'),
            'scoring' => $this->request->getVar('scoring'),
        ];
        $model->insert($data);
        return redirect()->to('admin/scoring');
    }

    public function edit($id = null)
    {
        $model = new DataModel();
        $data['data'] = $model->get_data_by_id($id);// Mengambil data berdasarkan ID
        return view('admin/scoring/edit', $data); // Mengirim data ke view
    }

    public function update($id)
    {
        $model = new DataModel();
        // $id = $this->request->getVar('gid');
        // $data = [
        //     'namobj' => $this->request->getVar('namobj'),
        //     'remark' => $this->request->getVar('remark'),
        //     'luaswh' => $this->request->getVar('luaswh'),
        //     'lcode' => $this->request->getVar('lcode'),
        //     'wadmkc' => $this->request->getVar('wadmkc'),
        //     'wadmkk' => $this->request->getVar('wadmkk'),
        //     'wadmpr' => $this->request->getVar('wadmpr'),
        //     'shape_leng' => $this->request->getVar('shape_leng'),
        //     'shape_area' => $this->request->getVar('shape_area'),
        //     'layer' => $this->request->getVar('layer'),
        //     'path' => $this->request->getVar('path'),
        //     'scoring' => $this->request->getVar('scoring'),
        // ];
        $data = [
            'scoring' => $this->request->getPost('scoring') // Mengambil data yang diinput dari form
        ];
        $model->update_data($id, $data); 
        return redirect()->to('admin/data-kabupaten');
        // return redirect()->to('admin/scoring');
    }

    public function delete($id = null)
    {
        $model = new DataModel();
        $model->delete_data($id);
        return redirect()->to('admin/data-kabupaten');
    }
}
