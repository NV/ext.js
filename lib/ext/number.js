
// JSext - Number - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Convert a number to an ordinal string used to denote the
 * position in an ordered sequence such as 1st, 2nd, 3rd, 4th, etc.
 *
 * @return {string}
 * @api public
 */

Number.prototype.__defineGetter__('ordinalize', function(){
  if ([11, 12, 13].indexOf(this % 100) !== -1)
    return this + 'th'
  else
    switch (this % 10) {
      case 1:  return this + 'st'
      case 2:  return this + 'nd'
      case 3:  return this + 'rd'
      default: return this + 'th'
    }
})
