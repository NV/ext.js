
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
  
  /**
   * Capitalize a string, optionally _all_ words.
   *
   *   'hello there'.capitalize()
   *    // => 'Hello there' 
   *
   *   'hello there'.capitalize('all') // or true
   *    // => 'Hello There'
   *
   * @param  {bool} all
   * @return {string}
   * @api public
   */
   
  String.prototype.capitalize = function(all) {
    return this.split(/\s+/).map(function(word, i){
      if (i === 0 || all)
        return word.charAt(0).uppercase + word.substring(1, word.length)
      else
        return word
    }).join(' ')
  }
  
  /**
   * Convert to camel-case.
   *
   *   'hello there'.camelcase
   *   // => 'HelloThere'
   *
   * @return {string}
   * @api public
   */
   
  String.prototype.__defineGetter__('camelcase', function() {
    return this.capitalize(true).replace(/\s+/g, '')
  })
  
  /**
   * Convert to camel-case.
   *
   *   'hello there'.camelcase
   *   // => 'HelloThere'
   *
   * @return {string}
   * @api public
   */
   
  String.prototype.__defineGetter__('digitize', function() {
    return this.replace(/[^\d]/g, '')
  })
  
  /**
   *  Wrap with the given string, or _prefix_ and _suffix_.
   *
   *    'text'.wrap('<p>', '</p>')
   *    // => '<p>text</p>'
   *
   *    'foo'.wrap('...')
   *    // => '...foo...'
   *
   * @param  {string} prefix
   * @param  {string} suffix
   * @return {string}
   * @api public
   */
   
  String.prototype.wrap = function(prefix, suffix) {
    return prefix + this + (suffix || prefix)
  }
}
