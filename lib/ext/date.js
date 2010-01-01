
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
}