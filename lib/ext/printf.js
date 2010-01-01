
// ext.js - printf - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

function error(msg) {
  throw new Error('printf(): ' + msg)
}

exports.sprintf = function(str) {
  var args = arguments, i = 0
  return str.replace(/%(-)?(\d+)?(\.\d+)?(\w)/, function(_, flags, width, precision, specifier){
    var arg = args[++i]
    switch (specifier) {
      case 's':
        return arg
      case 'c': 
        return typeof arg == 'string' ? 
          arg.charAt(0) :
            error('%c requires a string')
      case 'd': 
        return isNaN(parseInt(arg)) ?
          error('%d requires an number or numeric string') :
            parseInt(arg)
    }
  })
}