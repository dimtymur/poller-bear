<?php

use App\Core\Route;
use App\Core\Controller;

Route::setRoute("/", function() {
    Controller::view("home.index");
});
