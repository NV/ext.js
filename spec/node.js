
process.mixin(require('sys'))
require.paths.unshift('spec', 'spec/lib', 'lib')
require('jspec')
require('ext/import')

quit = process.exit
print = puts

readFile = function(path) {
  var result
  require('posix')
    .cat(path, "utf8")
    .addCallback(function(contents){ result = contents })
    .addErrback(function(){ throw new Error("failed to read file `" + path + "'") })
    .wait()
  return result
}

if (process.ARGV[2])
  JSpec.exec('spec/unit/' + process.ARGV[2] + '.spec.js')  
else
  JSpec
    .exec('spec/unit/base64.spec.js')
    .exec('spec/unit/number.spec.js')
    .exec('spec/unit/string.spec.js')
    .exec('spec/unit/date.spec.js')
    .exec('spec/unit/printf.spec.js')
    .exec('spec/unit/md5.spec.js')
JSpec.run({ reporter: JSpec.reporters.Terminal, failuresOnly: true })
JSpec.report()
