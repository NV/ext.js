
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
  
  describe '#capitalize()'
    describe 'given no arguments'
      it 'should capitalize the first word'
        'foo bar'.capitalize().should.eql 'Foo bar'
      end
    end
    
    describe 'given true'
      it 'should capitalize all words'
        'foo bar baz'.capitalize(true).should.eql 'Foo Bar Baz'
        'foo bar baz'.capitalize('all').should.eql 'Foo Bar Baz'
      end
    end
  end
  
  describe '#camelcase'
    describe 'given several words'
      it 'should convert them to camel case'
        'foo bar baz'.camelcase.should.eql 'FooBarBaz'
      end
    end
  end
  
  describe '#digitize'
    it 'should strip non numeric characters'
      '$100,000'.digitize.should.eql '100000'
    end
  end
  
  describe '#wrap'
    describe 'with a single string'
      it 'should wrap using string as prefix and suffix'
        'foo'.wrap('|').should.eql '|foo|'
      end
    end
    
    describe 'with several strings'
      it 'should wrap first as prefix, last as suffix'
        'foo'.wrap('(', ')').should.eql '(foo)'
      end
    end
  end
  
  describe '#startsWith()'
    it 'should check if a string starts with another'
      'foobar'.startsWith('foo').should.be_true
      'barfoo'.startsWith('foo').should.be_false
      ' foobar'.startsWith('foo').should.be_false
    end
  end
  
  describe '#endsWith()'
    it 'should check if a string ends with another'
      'foobar'.endsWith('bar').should.be_true
      'barfoo'.endsWith('bar').should.be_false
      'foobar '.endsWith('bar').should.be_false
    end
  end
  
  describe '#remove()'
    it 'should replace substrings matching the given regexp'
      'foobar barfoo'.remove(/foo(bar)?/g).should.eql ' bar'
    end
  end
end