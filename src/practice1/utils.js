const getURL = function(address, port, pathparams) {
    return `${address}:${port}${pathparams}`
    // TODO feedback：无用的代码可以删去
    // return address + ":" + port + pathparams
}

export default getURL
