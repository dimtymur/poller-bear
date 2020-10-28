const displaySwitch = (element, switch_from, switch_to) => {
    let display = window.getComputedStyle(element)["display"];
    element.style.display = display == switch_from ? switch_to : switch_from;
};

const getUriParam = (key, uri=window.location.href) => {
    let uriParamValue = uri.split(key + "=")[1].split("&")[0];
    return (uri.indexOf(key + "=") == -1) ? "" : uriParamValue;
};

const execUriParamMatch = (key, uri, func_match) => {
    if (getUriParam(key, uri) == getUriParam(key)) func_match();
};

const useClassPair = (lib, className, pairClassName) => {
    let classPair = parseClassPair(getClassPair(className, pairClassName));
    lib[classPair[0]][classPair[1]]();
};

const getClassPair = (className, classPairName) => {
    let pattern = classPairName + "{[a-zA-Z0-9-_]+:[a-zA-Z0-9-_]+}";
    let regex = new RegExp(pattern, "g");
    let result = className.match(regex);
    return result ? result[0] : "";
};

const parseClassPair = (classPair) => {
    let regex = /[a-zA-Z0-9-_]+:[a-zA-Z0-9-_]+/;
    return classPair.match(regex)[0].split(":");
};

const setClassPairValue = (className, classPairName, newValue) => {
    let classPair = getClassPair(className, classPairName);
    let regex = /:[a-zA-Z0-9-_]+/;
    let newClassPair = classPair.replace(regex, ":" + newValue);
    return className.replace(classPair, newClassPair);
};

const isChecked = (element) => {
    let checkPair = getClassPair(element.className, "check");
    return parseClassPair(checkPair)[1] == "on" ? true : false;
};

const checkAction = (element, func_checked, func_unchecked) => {
    if (isChecked(element)) func_checked();
    else func_unchecked();
};

const checkSwitch = (element, func_checked=()=>{}, func_unchecked=()=>{}) => {
    if (isChecked(element)) {
        func_unchecked();
        element.className = setClassPairValue(element.className, "check", "off");
    } else {
        func_checked();
        element.className = setClassPairValue(element.className, "check", "on");
    }
};
