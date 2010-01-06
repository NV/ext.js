
process.mixin(require('sys'))
require.paths.unshift('lib')
require('ext/import')

p('foo bar'.md5)
// => '327b6f07435811239bc47e1544353273'

p('foo bar'.base64Encode)
// => 'Zm9vIGJhcg=='

p('Zm9vIGJhcg=='.base64Decode)
// => 'foo bar'
