
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
 *   - b: converts to a base 2 binary integer  
 *   - 0: converts to a base 8 octal integer  
 *
 * @param  {string} str
 * @param  {mixed} ...
 * @return {string}
 * @api public
 */

exports.sprintf = function(str) {
  var args = arguments, i = 0
  return str.replace(/%(-)?(\d+)?(\.\d+)?(\w)/g, function(_, flag, width, precision, specifier){
    var arg = args[++i],
        width = parseInt(width),
        precision = parseInt((precision+'').slice(1))
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
        switch (typeof arg) {
          case 'string': return pad(arg.charAt(0))
          case 'number': return pad(String.fromCharCode(arg))
          default:       error('%c requires a string or char code integer')
        }
      case 'd': 
        return isNaN(parseInt(arg)) ?
          error('%d requires a number or numeric string') :
            pad(parseInt(arg).toString())
      case 'f': 
        arg = isNaN(parseInt(arg)) ?
          error('%f requires a number or numeric string') :
            parseFloat(arg).toString()
        if (precision)
          if (/\.(\d+)$/.exec(arg))
            if (RegExp.$1.length > precision)
              arg = arg.slice(0, -(RegExp.$1.length - precision))
            else
              arg += (new Array(RegExp.$1.length + 1)).join('0')
          else
            arg += '.' + (new Array(++precision)).join('0')
        return pad(arg)
      case 'b':
        return typeof arg == 'number' ?
          arg.toString(2) :
            error('%b requires a number')
      case 'o':
        return typeof arg == 'number' ?
          arg.toString(8) :
            error('%o requires a number')
      default:
        error('%' + specifier + ' is not a valid specifier')
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
