
// ext.js - String - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

// --- Extensions

if (Ext.extend) {

  /**
   * Return lowercase string.
   *
   *   'HELLO'.lowercase
   *    // => 'hello' 
   *
   * @return {string}
   * @api public
   */
   
  String.prototype.__defineGetter__('lowercase', function(){ return this.toLowerCase() })

  /**
   * Return uppercase string.
   *
   *   'hello'.uppercase
   *    // => 'HELLO' 
   *
   * @return {string}
   * @api public
   */
   
  String.prototype.__defineGetter__('uppercase', function(){ return this.toUpperCase() })
    
}
