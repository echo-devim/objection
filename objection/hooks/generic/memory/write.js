// Provides methods to work with process memory.

// Originally part of Frida <=11 but got removed in 12.
// https://github.com/frida/frida-python/commit/72899a4315998289fb171149d62477ba7d1fcb91

rpc.exports = {

    writeBytes: function (address, pattern) {
        var str = pattern;
        var result = [];
        while (str.length >= 1) { 
            result.push(parseInt(str.substring(0, 2), 16));
            str = str.substring(3, str.length);
        }
        Memory.writeByteArray(ptr(address), result );
	return pattern;
    },
}
