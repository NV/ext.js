
// ext.js - Date - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Month names.
 */

exports.months = [
  'January', 
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December']
  
/**
 * Day names.
 */
  
exports.days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday']
  
// --- Extensions

if (Ext.extend) {
  
  /**
   * Shortcuts for getMETHOD
   */
   
  Date.prototype.__defineGetter__('milliseconds', function() { return this.getMilliseconds() })
  Date.prototype.__defineGetter__('seconds', function() { return this.getSeconds() })
  Date.prototype.__defineGetter__('day', function() { return this.getDate() })
  Date.prototype.__defineGetter__('month', function() { return this.getMonth() })
  Date.prototype.__defineGetter__('year', function() { return this.getFullYear() })
  
  /**
   * Return month name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('monthName', function() {
    return exports.months[this.getMonth()]
  })
  
  /**
   * Return 3 character month name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('shortMonthName', function() {
    return exports.months[this.getMonth()].substr(0, 3)
  })
  
  /**
   * Return day name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('dayName', function() {
    return exports.days[this.getDay()]
  })
  
  /**
   * Return 3 character day name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('shortDayName', function() {
    return exports.days[this.getDay()].substr(0, 3)
  })
  
  /**
   * Check if this string starts with _str_.
   *
   * @param  {string} str
   * @return {bool}
   * @api public
   */
   
  Date.prototype.format = function(str) {
    var self = this
    return str.replace(/%(\w)/, function(_, c){
      switch (c) {
        case 'a': return self.shortDayName
        case 'A': return self.dayName
        case 'b': return self.shortMonthName
        case 'B': return self.monthName
      }
    })
  }
}