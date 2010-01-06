
require.paths.unshift('lib')
require('ext/import')
process.mixin(require('sys'))
process.mixin(require('ext/printf'))
var number = require('ext/number')

p('foo bar'.md5)
// => '327b6f07435811239bc47e1544353273'

p('foo bar'.base64Encode)
// => 'Zm9vIGJhcg=='

p('Zm9vIGJhcg=='.base64Decode)
// => 'foo bar'

p(number.currency(1000))
// => '1,000'

p((10000000.99).currency)
// => '10,000,000.99'

printf('%10s made $%C on the %D\n', 'tj', 30000, 14)
printf('%10s made $%C on the %D\n', 'scott', 2000, 3)
/*
        tj made $30,000.00 on the 14th
     scott made $2,000.00 on the 3rd
*/

p(sprintf('#%X%X%X', 255, 255, 0))
// => '#FFFF00'