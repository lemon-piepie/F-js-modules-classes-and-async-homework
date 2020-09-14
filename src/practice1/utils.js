const getURL = function(address, port, pathparams) {
    return `${address}:${port}${pathparams}`
    // return address + ":" + port + pathparams
}

export default getURL