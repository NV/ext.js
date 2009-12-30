
describe 'String'
  describe '#uppercase'
    it 'should alias toUpperCase()'
      'foo'.uppercase.should.eql 'FOO'
    end
  end
  
  describe '#lowercase'
    it 'should alias toLowerCase()'
      'FOO'.lowercase.should.eql 'foo'
    end
  end
end