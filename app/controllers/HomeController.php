<?php

namespace App\Controllers;

use App\Core\Controller;

class HomeController extends Controller {
    public function index() : void {
        self::view("home.index");
    }
}
