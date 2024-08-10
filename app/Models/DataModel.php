<?php

namespace App\Models;

use CodeIgniter\Model;

class DataModel extends Model
{
    protected $table      = 'adm_kab_bogor_scoring';
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
    public function get_data()
    {
        // return $this->findAll();
        return $this->orderBy('gid', 'ASC')->findAll(); // Mengembalikan array
    }

    // Fungsi untuk menambah data
    public function insert_data($data)
    {
        return $this->insert($data);
    }

    // Fungsi untuk menghapus data
    public function delete_data($id)
    {
        return $this->delete($id);
    }

    // Fungsi untuk mengambil data berdasarkan ID
    public function get_data_by_id($id)
    {
        return $this->find($id);
    }

    // Fungsi untuk mengupdate data
    public function update_data($id, $data)
    {
        return $this->update($id, $data);
    }
}
