
// ext.js - printf - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

var sys = require('sys')

function error(msg) {
  throw new Error('printf(): ' + msg)
}

/**
 * Return formatted _str_ using placeholders with the 
 * following syntax:
 *
 *  % [flag][width][.precision]specifier
 *
 * - flag:  when '-' the string will be aligned to the left, otherwise the right is default.
 * - width: specifys the total amount of characters the string may span.
 * - precision: not yet implemented
 * - specifier:
 *   - s: converts to a string
 *   - c: converts to a character
 *   - d: converts to a base 10 integer
 *
 * @param  {Type} Var
 * @return {Type}
 * @api public
 */

exports.sprintf = function(str) {
  var args = arguments, i = 0
  return str.replace(/%(-)?(\d+)?(\.\d+)?(\w)/g, function(_, flag, width, precision, specifier){
    var arg = args[++i],
        width = parseInt(width)
    function pad(str) {
      if (typeof str != 'string') return str
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

/**
 * Write to stderr.
 * 
 * @see sprintf()
 * @api public
 */

exports.eprintf = function() {
  process.stdio.writeError(exports.sprintf.apply(this, arguments))
}

/**
 * Write to stdout.
 * 
 * @see sprintf()
 * @api public
 */

exports.printf = function() {
  process.stdio.write(exports.sprintf.apply(this, arguments))
}
