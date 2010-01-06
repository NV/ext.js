
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
 * Flags:
 *   - '-'  Align to the left, otherwise the right is default.
 * 
 * Width:
 *   Specifys the total amount of characters the string may span.
 *
 * Precision
 *   Pads or restricts the number of decimal points of a float.
 *
 * Specifier
 *   All numeric specifiers may be a numeric string or a number
 *   - s converts to a string ('foo' -> '')
 *   - c converts to a character ('foo' -> 'f', 102 -> 'f')
 *   - d converts to base 10 integer (12 -> '12')
 *   - D converts to base 10 integer passed through ordinalize() (12 -> '12th')
 *   - b converts to base 2 binary (5 -> '101')
 *   - o converts to base 8 octal (8 -> '10')
 *   - x converts to base 16 hexidecimal (255 -> 'ff')
 *   - X converts to uppercase base 16 hexidecimal (255 -> 'FF')
 *   - f converts to a float (5.99 -> '5.99')
 *   - C converts to a currency formatted string (5000.99 -> '5,000.99', 1000000 -> '1,000,000.00')
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
    function numeric(str, base, fn) {
      return isNaN((fn || parseInt)(str)) ?
        error('%' + specifier + ' requires a numer of a numeric string') :
          (fn || parseInt)(str).toString(base)
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
      case 'C':
        arg = number.currency(numeric(arg, 10, parseFloat))
        if (arg.indexOf('.') === -1) arg += '.00'
        return arg
      case 'd': 
        return pad(numeric(arg))
      case 'D':
        return pad(number.ordinalize(numeric(arg)))
      case 'f': 
        arg = numeric(arg, 10, parseFloat)
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
        return pad(numeric(arg, 2))
      case 'o':
        return pad(numeric(arg, 8))
      case 'x': 
        return pad(numeric(arg, 16))
      case 'X': 
        return pad(numeric(arg, 16).toUpperCase())
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
