const isChecked = function(element) {
    return (element["title"] == "checked") ? true : false;
};

const checkAction = function(element, func_checked, func_unchecked) {
    if (isChecked(element)) func_checked();
    else func_unchecked();
};

const checkSwitch = function(element, func_checked, func_unchecked) {
    if (isChecked(element)) {
        func_unchecked();
        element["title"] = "unchecked";
    } else {
        func_checked();
        element["title"] = "checked";
    }
};

const displaySwitch = function(element, switch_from, switch_to) {
    display = window.getComputedStyle(element)["display"];
    display = display == switch_from ? switch_to : switch_from;
    element.style.display = display;
};

const getUriParam = function(key, uri=window.location.href) {
    if (uri.indexOf(key + "=") == -1) return "";
    return uri.split(key + "=")[1].split("&")[0];
};

const execUriParamMatch = function(key, uri, func_match) {
    if (getUriParam(key, uri) == getUriParam(key)) func_match();
};
