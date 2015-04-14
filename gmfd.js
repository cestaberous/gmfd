function jscall(jsarray) {
    var i = 0;
    for (i = 0; i < jsarray.length; i++) {
        var file = jsarray[i];
        document.write('<script type="text/javascript" src="')
        document.write(file)
        document.write('"></script>')
    }
}

function csscall(cssarray) {
    var i = 0;
    for (i = 0; i < cssarray.length; i++) {
        var file = cssarray[i];
        document.write('<link rel="stylesheet" type="text/css" href="')
        document.write(file)
        document.write('"></script>')
    }
}
