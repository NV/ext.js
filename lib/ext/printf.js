
// ext.js - printf - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

function error(msg) {
  throw new Error('printf(): ' + msg)
}

exports.sprintf = function(str) {
  var args = arguments, i = 0
  return str.replace(/%(-)?(\d+)?(\.\d+)?(\w)/, function(_, flag, width, precision, specifier){
    var arg = args[++i],
        width = parseInt(width)
    function pad(str) {
      return width ?
        flag == '-' ?
          str.padRight(width) :
            str.padLeft(width) :
              str
    }
    switch (specifier) {
      case 's':
        return pad(arg)
      case 'c': 
        return typeof arg == 'string' ? 
          pad(arg.charAt(0)) :
            error('%c requires a string')
      case 'd': 
        return isNaN(parseInt(arg)) ?
          error('%d requires an number or numeric string') :
            pad(parseInt(arg).toString())
    }
  })
}