
// ext.js - md5 - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

// --- Extensions

if (Ext.extend) {
  
  /**
   * @see hash()
   */
  
  String.prototype.__defineGetter__('md5', function(){
    return exports.hash(this)
  })
}
