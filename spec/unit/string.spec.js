
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
  
  describe '#variable'
    describe 'when defined'
      it 'should return the global variable representing its name'
        foo = 'bar'
        'foo'.variable.should.eql 'bar'
      end
    end
    
    describe 'when undefined'
      it 'should return undefined'
        'not available'.variable.should.be_undefined
      end
    end
  end
  
  describe '#camelcase'
    describe 'given several words'
      it 'should convert them to camel case'
        'foo bar baz'.camelcase.should.eql 'FooBarBaz'
      end
    end
    
    describe 'given several words with arbitrary characters'
      it 'should convert them to camel case and disregard the arbitrary characters'
        'foo-bar-baz'.camelcase.should.eql 'FooBarBaz'
        'foo_bar_baz'.camelcase.should.eql 'FooBarBaz'
        'foo-bar_baz'.camelcase.should.eql 'FooBarBaz'
        'base 64-encode'.camelcase.should.eql 'Base64Encode'
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
  
  describe '#after()'
    it 'should return contents after the first ocurrence of the given string'
      'some foo bar'.after('foo').should.eql ' bar'
      'some foo bar'.after('rawr').should.eql ''
    end
  end
  
  describe '#before()'
    it 'should return contents before the first ocurrence of the given string'
      'some foo bar'.before('foo').should.eql 'some '
      'some foo bar'.before('rawr').should.eql ''
    end
  end
  
  describe '#remove()'
    it 'should replace substrings matching the given regexp'
      'foobar barfoo'.remove(/foo(bar)?/g).should.eql ' bar'
    end
  end
  
  describe '#padLeft()'
    it 'should pad the given width to the left'
      'foo'.padLeft(5).should.eql '  foo'
    end
    
    it 'should pad n spaces on the left with an optional character'
      'foo'.padLeft(5, '-').should.eql '--foo'
    end
    
    it 'should not pad when width is less than length'
      'foo'.padLeft(3).should.eql 'foo'
      'foo'.padLeft(2).should.eql 'foo'
    end
  end
  
  describe '#padRight()'
    it 'should pad the given width to the right'
      'foo'.padRight(5).should.eql 'foo  '
    end
    
    it 'should pad n spaces on the right with an optional character'
      'foo'.padRight(5, '-').should.eql 'foo--'
    end
    
    it 'should not pad when width is less than length'
      'foo'.padRight(3).should.eql 'foo'
      'foo'.padRight(2).should.eql 'foo'
    end
  end
  
  describe '#strip'
    it 'should remove leading and trailing whitespace'
      ' \n\n foo bar '.strip.should.eql 'foo bar'
    end
  end
end