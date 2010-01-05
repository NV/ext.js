
// ext.js - Number - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

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

/**
 * Return a currency formatted string based on the given number _n_.
 *
 *  currency(1000.99)
 *  // => '1,000.99'
 *
 * @param  {number} n
 * @return {string}
 * @api public
 */

exports.currency = function(n) {
  n = n.toString().split(".")
  n[0] = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  return n.join('.')
}

// --- Extensions

if (Ext.extend) {
  
  /**
   * @see ordinalize()
   */
  
  Number.prototype.__defineGetter__('ordinalize', function(){
    return exports.ordinalize(this)
  })
  
  /**
   * @see currency()
   */
  
  Number.prototype.__defineGetter__('currency', function(){
    return exports.currency(this)
  })
  
  // --- Seconds
  
  /**
   * Return n seconds.
   *
   * @return {number}
   * @api public
   */
  
  var seconds =  function(){ return this }
  Number.prototype.__defineGetter__('seconds', seconds)
  Number.prototype.__defineGetter__('second', seconds)
  
  /**
   * Return n minutes in seconds.
   *
   * @return {number}
   * @api public
   */
  
  var minutes =  function(){ return this * 60 }
  Number.prototype.__defineGetter__('minutes', minutes)
  Number.prototype.__defineGetter__('minute', minutes)
  
  /**
   * Return n hours in seconds.
   *
   * @return {number}
   * @api public
   */
  
  var hours =  function(){ return this * 3600 }
  Number.prototype.__defineGetter__('hours', hours)
  Number.prototype.__defineGetter__('hours', hours)
  
  /**
   * Return n days in seconds.
   *
   * @return {number}
   * @api public
   */
  
  var days =  function(){ return this * 86400 }
  Number.prototype.__defineGetter__('days', days)
  Number.prototype.__defineGetter__('day', days)

  
  /**
   * Return n weeks in seconds.
   *
   * @return {number}
   * @api public
   */
  
  var weeks =  function(){ return this * 604800 }
  Number.prototype.__defineGetter__('weeks', weeks)
  Number.prototype.__defineGetter__('week', weeks)
  
  /**
   * Return n months in seconds.
   *
   * @return {number}
   * @api public
   */
  
   var months =  function(){ return this * 2592000 }
   Number.prototype.__defineGetter__('months', months)
   Number.prototype.__defineGetter__('month', months)
  
  /**
   * Return n years in seconds.
   *
   * @return {number}
   * @api public
   */
   
  var years =  function(){ return this * 31471200 }
  Number.prototype.__defineGetter__('years', years)
  Number.prototype.__defineGetter__('year', years)
  
  /**
   * Convert seconds to minutes.
   *
   * @return {number}
   * @api public
   */
   
  Number.prototype.__defineGetter__('toMinutes', function(){ return this / (1).minute })
  
  /**
   * Convert seconds to hours.
   *
   * @return {number}
   * @api public
   */
   
  Number.prototype.__defineGetter__('toHours', function(){ return this / (1).hour })
  
  /**
   * Convert seconds to days.
   *
   * @return {number}
   * @api public
   */
  
  Number.prototype.__defineGetter__('toDays', function(){ return this / (1).day })
  
  /**
   * Convert seconds to weeks.
   *
   * @return {number}
   * @api public
   */
  
  Number.prototype.__defineGetter__('toWeeks', function(){ return this / (1).week })
  
  /**
   * Convert seconds to months.
   *
   * @return {number}
   * @api public
   */
  
  Number.prototype.__defineGetter__('toMonths', function(){ return this / (1).month })
  
  /**
   * Convert seconds to years.
   *
   * @return {number}
   * @api public
   */
  
  Number.prototype.__defineGetter__('toYears', function(){ return this / (1).year })
  
}
