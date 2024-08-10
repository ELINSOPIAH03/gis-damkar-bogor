<?php

namespace App\Controllers\Admin;;

use App\Models\PoiModel;
use CodeIgniter\Controller;

class PoiController extends Controller
{
    public function index()
    {
        $model = new PoiModel();
        $data['data'] = $model->orderBy('no', 'ASC')->findAll();
        return view('admin/poi/index', $data);
    }

    public function create()
    {
        return view('admin/poi/create');
    }

    public function store()
    {
        $model = new PoiModel();

        $geom = sprintf(
            "POINT(%f %f %f %f)",
            $this->request->getPost('long'),
            $this->request->getPost('lat'),
            0.0,
            $this->request->getPost('m_value')
        );
        $model->save([
            'no' => $this->request->getPost('no'),
            'name' => $this->request->getPost('name'),
            'alamat' => $this->request->getPost('alamat'),
            'lat' => $this->request->getPost('lat'),
            'long' => $this->request->getPost('long'),
            'geom' => $geom
        ]);
        return redirect()->to('/admin/data-poi');
    }


    public function edit($gid)
    {
        $model = new PoiModel();
        $data['data'] = $model->find($gid);
        return view('admin/poi/edit', $data);
    }

    public function update($gid)
    {
        $model = new PoiModel();
        $model->update($gid, [
            'no' => $this->request->getPost('no'),
            'name' => $this->request->getPost('name'),
            'alamat' => $this->request->getPost('alamat'),
            'lat' => $this->request->getPost('lat'),
            'long' => $this->request->getPost('long'),
            'geom' => $this->request->getPost('geom')
        ]);
        return redirect()->to('/admin/data-poi');
    }

    public function delete($gid)
    {
        $model = new PoiModel();
        $model->delete($gid);
        return redirect()->to('/admin/data-poi');
    }
}
