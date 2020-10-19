<?php

use App\Core\Route;
use App\Core\Controller;

Route::setRoute("/", function() {
    Controller::view("home.home_page");
});

Route::setRoute("/settings", function() {
    Controller::view("home.settings_page");
});

Route::setRoute("/search/posts", function() {
    Controller::view("home.search_posts_page");
});

Route::setRoute("/search/users", function() {
    Controller::view("home.search_users_page");
});

Route::setRoute("/signup", function() {
    Controller::view("auth.signup_page");
});

Route::setRoute("/login", function() {
    Controller::view("auth.login_page");
});

Route::setRoute("/password/reset", function() {
    Controller::view("auth.pwd_reset_page");
});

Route::setRoute("/password/verify", function() {
    Controller::view("auth.pwd_verify_page");
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
