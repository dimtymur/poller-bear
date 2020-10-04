<?php

use App\Core\Route;
use App\Core\Controller;

Route::setRoute("/", function() {
    Controller::view("home.index");
});

Route::setRoute("/post", function() {
    Controller::view("post.post_page");
});

Route::setRoute("/user/posts", function() {
    Controller::view("user.user_posts_page");
});

Route::setRoute("/user/comments", function() {
    Controller::view("user.user_comments_page");
});
