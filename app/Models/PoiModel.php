<?php

namespace App\Models;

use CodeIgniter\Model;

class PoiModel extends Model
{
    protected $table      = 'poi_damkar_baru_bgt';
    protected $primaryKey = 'gid';

    protected $allowedFields = [
        'no',
        'name',
        'alamat',
        'lat',
        'long',
        'geom',
    ];

    // Fungsi untuk mengambil semua data
    public function get_data()
    {
        // return $this->findAll();
        return $this->orderBy('gid', 'ASC')->findAll(); // Mengembalikan array
    }

    // Fungsi untuk menambah data
    public function insert_data($allowedFields)
    {
        return $this->insert($allowedFields);
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
