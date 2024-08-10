<?php

namespace App\Models;

use CodeIgniter\Model;

class DataKotaModel extends Model
{
    protected $table      = 'adm_kot_bogor_scoring';
    protected $primaryKey = 'gid';

    protected $allowedFields = [
        'namobj', 
        'remark', 
        'luaswh', 
        'lcode', 
        'wadmkc', 
        'wadmkk', 
        'wadmpr', 
        'shape_leng', 
        'shape_area', 
        'layer', 
        'path', 
        'scoring'
    ];

    // Fungsi untuk mengambil semua data
    public function get_data_kota()
    {
        // return $this->findAll();
        return $this->orderBy('gid', 'ASC')->findAll(); // Mengembalikan array
    }

    // Fungsi untuk menambah data
    public function insert_data_kota($data)
    {
        return $this->insert($data);
    }

    // Fungsi untuk menghapus data
    public function delete_data_kota($id)
    {
        return $this->delete($id);
    }

    // Fungsi untuk mengambil data berdasarkan ID
    public function get_data_kota_by_id($id)
    {
        return $this->find($id);
    }

    // Fungsi untuk mengupdate data
    public function update_data_kota($id, $data)
    {
        return $this->update($id, $data);
    }
}
