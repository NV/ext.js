
sprintf = require('ext/printf').sprintf

describe 'sprintf()'
  describe '%c'
    it 'should output a single character'
      sprintf('%c', 'a').should.eql 'a'
      sprintf('%c', 'abc').should.eql 'a'
    end
    
    it 'should throw an error when anything but a string is passed'
      -{ sprintf('%c', 1) }.should.throw_error
    end
  end
  
  describe '%d'
    it 'should convert to an integer'
      sprintf('%d', '12').should.eql '12'
      sprintf('%d', 12).should.eql '12'
      sprintf('%d', 12.3).should.eql '12'
    end
    
    it 'should throw an error when a non-numeric string is passed'
      -{ sprintf('%d', 'foo') }.should.throw_error
    end
    
    it 'should throw an error when a non-numeric object is passed'
      -{ sprintf('%d', []) }.should.throw_error
    end
  end
  
  describe '%s'
    it 'should convert to a string'
      sprintf('%s', 'foo').should.eql 'foo'
      sprintf('%s', 12).should.eql '12'
      sprintf('%s', 12.99).should.eql '12.99'
      sprintf('%s', { foo: 'bar' }).should.eql '[object Object]'
      sprintf('%s', [1,2]).should.eql '1,2'
    end
  end
end