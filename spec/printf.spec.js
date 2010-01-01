
sprintf = require('ext/printf').sprintf

describe 'sprintf()'
  describe 'c'
    it 'should substitute a character'
      sprintf('%c', 'a').should.eql 'a'
      sprintf('%c', 'abc').should.eql 'a'
    end
  end
end