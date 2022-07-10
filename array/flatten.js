// [1,2,[3,4], [5,[6,7]]]

const flatten = ([first, ...rest]) => {
    if (typeof first === 'undefined') {
        return [];
    }
    if (Array.isArray(first)) {
        return [...flatten([...first]), ...flatten([...rest])];
    }
    return [first, ...flatten([...rest])];
}

const flatten2 = (arr) => {
    const flatArr = [];
    for (el of arr) {
        if (Array.isArray(el)) {
            Array.prototype.push.apply(flatArr, flatten2(el));
        } else {
            flatArr.push(el);
        }
    }
    return flatArr;
}