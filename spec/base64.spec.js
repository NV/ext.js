
base64 = require('ext/base64')

describe 'base64'
  describe '.encode()'
    it 'should encode strings as base64'
      base64.encode('foo').should.eql 'Zm9v'
    end
  end
  
  describe '.decode()'
    it 'should decode base64 encoded strings'
      base64.decode('Zm9v').should.eql 'foo'
    end
  end
end