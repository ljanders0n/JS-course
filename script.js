function keepOrDisposePen(hasInk) {
    if (hasInk) {
        return "Keep";
    }
    return "Throw away";
}

const penHasInk = false;
console.log(keepOrDisposePen(penHasInk));
