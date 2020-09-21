function checkAction(element, func_checked, func_unchecked) {
    if (isChecked(element)) func_checked();
    else func_unchecked();
}

function checkSwitch(element, func_checked, func_unchecked=func_checked) {
    if (isChecked(element)) {
        func_unchecked();
        element["title"] = "unchecked";
    } else {
        func_checked();
        element["title"] = "checked";
    }
}

function isChecked(element) {
    return (element["title"] == "checked") ? true : false;
}

function displaySwitch(element, switch_from, switch_to) {
    display = window.getComputedStyle(element)["display"];
    display = display == switch_from ? switch_to : switch_from;
    element.style.display = display;
}
