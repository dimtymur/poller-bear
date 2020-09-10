<?php

use App\Core\Route;
use App\Core\Controller;

Route::setRoute("/", function() {
    Controller::view("home.index");
});

Route::setRoute("/post", function() {
    Controller::view("post.post_page");
});
