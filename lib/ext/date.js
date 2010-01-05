
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
  Date.prototype.__defineGetter__('minutes', function() { return this.getMinutes() })
  Date.prototype.__defineGetter__('hours', function() { return this.getHours() })
  Date.prototype.__defineGetter__('date', function() { return this.getDate() })
  Date.prototype.__defineGetter__('day', function() { return this.getDay() })
  Date.prototype.__defineGetter__('month', function() { return this.getMonth() })
  Date.prototype.__defineGetter__('year', function() { return this.getFullYear() })
  
  /**
   * Return month name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('monthName', function() {
    return exports.months[this.month]
  })
  
  /**
   * Return 3 character month name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('shortMonthName', function() {
    return exports.months[this.month].substr(0, 3)
  })
  
  /**
   * Return day name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('dayName', function() {
    return exports.days[this.day]
  })
  
  /**
   * Return 3 character day name string.
   *
   * @return {string}
   * @api public
   */
   
  Date.prototype.__defineGetter__('shortDayName', function() {
    return exports.days[this.day].substr(0, 3)
  })
  
  /**
   * Format date using the given _str_ using the
   * following format syntax: 
   *
   *  % [flag]specifier
   *
   *  Flags:
   *    - n  Passes numeric value through ordinalize() to produce '12th', '3rd', etc
   *
   *  Specifiers:
   *    - a  Short weekday name ('Mon')
   *    - A  Full weekday name ('Monday')
   *    - b  Short month name ('Jan')
   *    - B  Full month name ('January')
   *    - e  Day number (12)
   *    - p  AM / PM
   *    - P  am / pm
   *    - S  Seconds (34)
   *    - d  Day with leading zero (01, 30)
   *    - m  Month with leading zero (01, 12)
   *    - M  Minutes with leading zero (01, 60)
   *    - H  Hours with leading zero (01, 24)
   *
   * @param  {string} str
   * @return {string}
   * @api public
   */
   
  Date.prototype.format = function(str) {
    var self = this
    function pad(n){ return n < 10 ? '0' + n : n }
    return str.replace(/%(\w)?(\w)/, function(_, flag, specifier){
      switch (specifier) {
        case 'a': return self.shortDayName
        case 'A': return self.dayName
        case 'b': return self.shortMonthName
        case 'B': return self.monthName
        case 'd': return pad(self.date)
        case 'e': return self.date
        case 'P': return self.hours > 11 ? 'pm' : 'am'
        case 'p': return self.hours > 11 ? 'PM' : 'AM'
        case 'S': return pad(self.seconds)
        case 'm': return pad(self.month + 1)
        case 'M': return pad(self.minutes)
        case 'H': return pad(self.hours)
      }
    })
  }
}