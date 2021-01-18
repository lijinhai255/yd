function getParent(dom1, parent) {
    var dom1Parent = dom1.offsetParent;
    while (dom1Parent !== document.body) {
        if (dom1Parent !== parent) {
            dom1Parent = dom1Parent.offsetParent;
        }
        else {
            return true;
        }
    }
    return false;
}
