
// ext.js - printf - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

exports.sprintf = function(str) {
  var args = arguments, i = 0
  return str.replace(/%(-)?(\d+)?(\.\d+)?(\w)/, function(_, flags, width, precision, specifier){
    switch (specifier) {
      case 'c': return args[++i].charAt(0)
    }
  })
}