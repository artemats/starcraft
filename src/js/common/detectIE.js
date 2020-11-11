function isIE() {
    const ua = navigator.userAgent;
    return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}

if (isIE()){

    document.body.innerHTML = 'Please use more modern browser';

}