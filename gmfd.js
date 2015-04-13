function jscall(jsarray) {
    var i = 0;
    for (i = 0; i < jsarray.length; i++) {
        var file = jsarray[i];
        document.write('<script type="text/javascript" src="')
        document.write(file)
        document.write('"></script>')
    }
}