
process.mixin(GLOBAL, require('sys'))
require.paths.unshift('spec', 'spec/lib/lib', 'lib')
require('jspec')
require('ext')

quit = process.exit
print = puts

readFile = function(path) {
  var promise = require('posix').cat(path, "utf8")
  var result = ''
  promise.addErrback(function(){ throw "failed to read file `" + path + "'" })
  promise.addCallback(function(contents){
    result = contents
  })
  promise.wait()
  return result
}

if (process.ARGV[2])
  JSpec.exec('spec/' + process.ARGV[2] + '.spec.js')  
else
  JSpec
    .exec('spec/base64.spec.js')
JSpec.run({ formatter: JSpec.formatters.Terminal, failuresOnly: true })
JSpec.report()
