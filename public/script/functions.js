const displaySwitch = (element, switch_from, switch_to) => {
    let display = window.getComputedStyle(element)["display"];
    element.style.display = display == switch_from ? switch_to : switch_from;
};

const getUriParam = (key, uri=window.location.href) =>
    (uri.indexOf(key + "=") == -1) ? "" : uri.split(key + "=")[1].split("&")[0];

const execUriParamMatch = (key, uri, func_match) =>
    (getUriParam(key, uri) == getUriParam(key)) ? func_match() : null;

const usePair = (lib, pair) => {
    let pairParsed = parsePair(pair);
    return lib[pairParsed[0]][pairParsed[1]] ?
           lib[pairParsed[0]][pairParsed[1]]() : lib[pairParsed[0]](pairParsed[1]);
};

const getPair = (text, pairName) => {
    let pattern = pairName + "{[a-zA-Z0-9-_]+:[a-zA-Z0-9-_]+}";
    let regex = new RegExp(pattern, "g");
    let result = text.match(regex);
    return result ? result[0] : "";
};

const parsePair = (pair) => {
    let regex = /[a-zA-Z0-9-_]+:[a-zA-Z0-9-_]+/;
    return pair.match(regex)[0].split(":");
};

const setTextPairValue = (text, pair, newPairValue) => {
    let regex = /:[a-zA-Z0-9-_]+/;
    let newPair = pair.replace(regex, ":" + newPairValue);
    return text.replace(pair, newPair);
};

const isChecked = (pair) => parsePair(pair)[1] == 1 ? true : false;

const useCheck = (pair, func_checked, func_unchecked) =>
    isChecked(pair) ? func_checked() : func_unchecked();

const switchCheck = (text, pair, func_checked=()=>{}, func_unchecked=()=>{}) => {
    if (isChecked(pair)) {
        func_unchecked();
        return setTextPairValue(text, pair, 0);
    } else {
        func_checked();
        return setTextPairValue(text, pair, 1);
    }
};
