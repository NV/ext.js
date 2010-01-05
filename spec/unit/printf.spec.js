
sprintf = require('ext/printf').sprintf

describe 'sprintf()'
  describe '%'
    it 'should be literal'
      sprintf('%').should.eql '%'
    end  
  end
  
  describe 'given an invalid specifier'
    it 'should throw an error'
      -{ sprintf('%L') }.should.throw_error(/%L is not a valid specifier/)
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
    describe 'when given a string'
      it 'should convert to an integer'
        sprintf('%d', '12').should.eql '12'
        sprintf('%d', '-12').should.eql '-12'
      end
    end
    
    describe 'when given a non-numeric string'
      it 'should throw an error'
        -{ sprintf('%d', 'foo') }.should.throw_error
      end
    end
    
    describe 'when given an int'
      it 'should output it'
        sprintf('%d', 12).should.eql '12'
      end
    end
    
    describe 'when given a float'
      it 'should convert to an integer'
        sprintf('%d', 12.3).should.eql '12'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%d', {}) }.should.throw_error
        -{ sprintf('%d', []) }.should.throw_error
        -{ sprintf('%d', String) }.should.throw_error
      end
    end
  end
  
  describe '%D'
    describe 'when given a string'
      it 'should convert to an ordinalized integer'
        sprintf('%D', '12').should.eql '12th'
        sprintf('%D', '2').should.eql '2nd'
      end
    end
    
    describe 'when given a non-numeric string'
      it 'should throw an error'
        -{ sprintf('%D', 'foo') }.should.throw_error
      end
    end
    
    describe 'when given an int'
      it 'should output it'
        sprintf('%D', 3).should.eql '3rd'
      end
    end
    
    describe 'when given a float'
      it 'should convert to an integer'
        sprintf('%D', 12.3).should.eql '12th'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%d', {}) }.should.throw_error
        -{ sprintf('%d', []) }.should.throw_error
        -{ sprintf('%d', String) }.should.throw_error
      end
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
  
  describe '%b'
    describe 'when given a number'
      it 'should convert to binary'
        sprintf('%b', 5).should.eql '101'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%b', {}) }.should.throw_error
        -{ sprintf('%b', []) }.should.throw_error
        -{ sprintf('%b', String) }.should.throw_error
      end
    end
  end
  
  describe '%o'
    describe 'when given a number'
      it 'should convert to octal'
        sprintf('%o', 7).should.eql '7'
        sprintf('%o', 8).should.eql '10'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%o', {}) }.should.throw_error
        -{ sprintf('%o', []) }.should.throw_error
        -{ sprintf('%o', String) }.should.throw_error
      end
    end
  end
  
  describe '%x'
    describe 'when given a number'
      it 'should convert to lowercase hex'
        sprintf('%x', 255).should.eql 'ff'
        sprintf('%x', 16).should.eql '10'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%x', {}) }.should.throw_error
        -{ sprintf('%x', []) }.should.throw_error
        -{ sprintf('%x', String) }.should.throw_error
      end
    end
  end
  
  describe '%X'
    describe 'when given a number'
      it 'should convert to uppercase hex'
        sprintf('%X', 255).should.eql 'FF'
        sprintf('%X', 16).should.eql '10'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%X', {}) }.should.throw_error
        -{ sprintf('%X', []) }.should.throw_error
        -{ sprintf('%X', String) }.should.throw_error
      end
    end
  end
  
  describe '%f'
    describe 'when given a float'
      it 'should output the float'
        sprintf('%f', 5.99).should.eql '5.99'
        sprintf('%f', -5.99).should.eql '-5.99'
      end
    end
    
    describe 'when given a numeric string'
      it 'should convert to a float float'
        sprintf('%f', '5.99').should.eql '5.99'
      end
    end
    
    describe 'with precision'
      it 'should pad decimal places'
        sprintf('%.2f', 5).should.eql '5.00'
        sprintf('%.4f', 5).should.eql '5.0000'
        sprintf('%.2f', 55.9).should.eql '55.90'
        sprintf('%.4f', 555.95).should.eql '555.9500'
      end
      
      it 'should restrict decimal places'
        sprintf('%.2f', 5.1234).should.eql '5.12'
        sprintf('%.1f', 55.1234).should.eql '55.1'
      end
    end
    
    describe 'when given an arbitrary object'
      it 'should throw an error'
        -{ sprintf('%f', {}) }.should.throw_error
        -{ sprintf('%f', []) }.should.throw_error
        -{ sprintf('%f', String) }.should.throw_error
      end
    end
  end
  
  describe 'given multiple'
    it 'should substitute globally'
      sprintf('%s, %s', 'foo', 'bar').should.eql 'foo, bar'
    end
  end
end