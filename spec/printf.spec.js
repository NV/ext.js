
sprintf = require('ext/printf').sprintf

describe 'sprintf()'
  describe '%'
    it 'should be literal'
      sprintf('%').should.eql '%'
    end  
  end
  
  describe '%c'
    describe 'when given a string'
      it 'should output a single character'
        sprintf('%c', 'a').should.eql 'a'
        sprintf('%c', 'abc').should.eql 'a'
      end
    end
    
    describe 'when given an integer'
      it 'should output its character'
        sprintf('%c', 102).should.eql 'f'
        sprintf('%c', 111).should.eql 'o'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%c', {}) }.should.throw_error
        -{ sprintf('%c', []) }.should.throw_error
        -{ sprintf('%c', String) }.should.throw_error
      end
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
  
  describe '%5d'
    it 'should pad left'
      sprintf('%5d', 5).should.eql '    5'
      sprintf('%5d', 500).should.eql '  500'
    end
  end
  
  describe '%-5d'
    it 'should pad right'
      sprintf('%-5d', 5).should.eql '5    '
      sprintf('%-5d', 500).should.eql '500  '
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
  
  describe 'given multiple'
    it 'should substitute globally'
      sprintf('%s, %s', 'foo', 'bar').should.eql 'foo, bar'
    end
  end
end