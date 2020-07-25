<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class TSController extends BaseController
{
    function index(){
        return View('tsreact');
    }
}

?>