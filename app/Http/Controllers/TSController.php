<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class TSController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    function index(){

        $user = User::where('name', '=', 'roy')->first();
        return View('tsreact', ['user' => $user]);
    }
}

?>