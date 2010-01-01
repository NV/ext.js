
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
}