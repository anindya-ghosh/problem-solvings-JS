/**
 * chunkArray([1,2,3,4,5,6,7,8], 3);
 *  - Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
 */

const chunkArray = (_array, chunkSize) => {
    const _chunkArray = [];
    for (let i = 0, len = _array.length; i < len;) {
        _chunkArray.push(_array.slice(i, i += chunkSize));
    }
    return _chunkArray;
};