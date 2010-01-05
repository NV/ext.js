
// ext.js - printf - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Module dependencies.
 */

var sys = require('sys'),
    number = require('ext/number')

/**
 * Throw an error _msg_ prefixed with 'printf(): '
 *
 * @param  {string} msg
 * @api private
 */

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
 * - precision: pads or restricts the number of decimal points of a float.
 * - specifier:
 *   - s: converts to a string          
 *   - c: converts to a character        
 *   - d: converts to base 10 integer  
 *   - b: converts to base 2 binary   
 *   - o: converts to base 8 octal   
 *   - x: converts to base 16 hexidecimal  
 *   - X: converts to uppercase base 16 hexidecimal  
 *   - f: converts to a float  
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
    function numeric(str, base) {
      return isNaN(parseInt(arg)) ?
        error('%' + specifier + ' requires a numer of a numeric string') :
          pad(parseInt(arg).toString(base))
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
        return numeric(arg)
      case 'D':
        return number.ordinalize(numeric(arg))
      case 'f': 
        arg = isNaN(parseFloat(arg)) ?
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
        return numeric(arg, 2)
      case 'o':
        return numeric(arg, 8)
      case 'x': 
        return numeric(arg, 16)
      case 'X': 
        return numeric(arg, 16).toUpperCase()
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
