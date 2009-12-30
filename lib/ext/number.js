
// JSext - Number - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Convert a the given number _n_ to an ordinal string used to denote the
 * position in an ordered sequence such as 1st, 2nd, 3rd, 4th, etc.
 *
 * @param  {number} n
 * @return {string}
 * @see Number#ordinalize
 * @api public
 */

exports.ordinalize = function(n) {
  if ([11, 12, 13].indexOf(n % 100) !== -1)
    return n + 'th'
  else
    switch (n % 10) {
      case 1:  return n + 'st'
      case 2:  return n + 'nd'
      case 3:  return n + 'rd'
      default: return n + 'th'
    }
}

Number.prototype.__defineGetter__('ordinalize', function(){
  return exports.ordinalize(this)
})
