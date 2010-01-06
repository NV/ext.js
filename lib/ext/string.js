
// ext.js - String - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Capitalize the given _str_, optionally _all_ words.
 *
 *   capitalize('hello there')
 *    // => 'Hello there' 
 *
 *   capitalize('hello there', 'all') // or true
 *    // => 'Hello There'
 *
 * @param  {string} str
 * @param  {bool} all
 * @return {string}
 * @see String#capitalize()
 * @api public
 */
 
exports.capitalize = function(str, all) {
  return str.split(/\s+/).map(function(word, i){
    return (i === 0 || all) ? 
      word.charAt(0).uppercase + word.substring(1, word.length) :
        word
  }).join(' ')
}

// --- Extensions

/**
 * @see capitalize()
 */
 
String.prototype.capitalize = function(all) {
  return exports.capitalize(this, all)
}

/**
 * @see capitalize()
 */
 
String.prototype.__defineGetter__('variable', function(){ return GLOBAL[this] })

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
 * Convert to camel-case.
 *
 *   'hello there'.camelcase
 *   // => 'HelloThere'
 *
 * @return {string}
 * @api public
 */
 
String.prototype.__defineGetter__('camelcase', function() {
  return this.replace(/[^a-zA-Z0-9 ]+/g, ' ').capitalize(true).remove(/ +/g)
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
  return this.remove(/[^\d]/g)
})

/**
 * Strip leading and trailing whitespace.
 *
 *   '  \n\n foo '.strip
 *   // => 'foo'
 *
 * @return {string}
 * @api public
 */
 
String.prototype.__defineGetter__('strip', function() {
  return this.remove(/^\s+|\s+$/g)
})

/**
 * Wrap with the given string, or _prefix_ and _suffix_.
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

/**
 * Check if this string starts with _str_.
 *
 * @param  {string} str
 * @return {bool}
 * @api public
 */
 
String.prototype.startsWith = function(str) {
  return this.indexOf(str) === 0
}

/**
 * Check if this string ends with _str_.
 *
 * @param  {string} str
 * @return {bool}
 * @api public
 */
 
String.prototype.endsWith = function(str) {
  return this.lastIndexOf(str) === this.length - str.length
}

/**
 * Remove all substrings matching the given _pattern_.
 *
 * @param  {regexp} pattern
 * @return {bool}
 * @api public
 */
 
String.prototype.remove = function(pattern) {
  return this.replace(pattern, '')
}

/**
 * Left pad string _width_ with optional _char_,
 * which defaults to a space.
 *
 * @param  {int} width
 * @param  {string} char
 * @return {string}
 * @api public
 */
 
String.prototype.padLeft = function(width, char) {
  return (new Array(++width - this.length)).join(char || ' ') + this
}

/**
 * Right pad string _width_ with optional _char_,
 * which defaults to a space.
 *
 * @param  {int} width
 * @param  {string} char
 * @return {string}
 * @api public
 */
 
String.prototype.padRight = function(width, char) {
  return this + (new Array(++width - this.length)).join(char || ' ')
}
