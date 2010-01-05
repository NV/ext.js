
number = require('ext/number')

describe 'Number'
  describe '#currency'
    describe 'given an integer'
      it 'should return a currency formatted string'
        number.currency(1).should.eql '1'
        number.currency(1000).should.eql '1,000'
        number.currency(100000).should.eql '100,000'
        number.currency(1000000).should.eql '1,000,000'
      end
    end
    
    describe 'given a float'
      it 'should return a currency formatted string as a float'
        number.currency(1.12).should.eql '1.12'
        number.currency(1000.1).should.eql '1,000.1'
        number.currency(100000.99).should.eql '100,000.99'
        number.currency(1000000.55).should.eql '1,000,000.55'
      end
    end
  end

  describe '#ordinalize'
    describe 'given an integer'
      it 'should return an ordinal string'
        number.ordinalize(1).should.eql '1st'
        (1).ordinalize.should.eql '1st'
        (2).ordinalize.should.eql '2nd'
        (3).ordinalize.should.eql '3rd'
        (4).ordinalize.should.eql '4th'
        (113).ordinalize.should.eql '113th'
        (1003).ordinalize.should.eql '1003rd'
      end
    end
  end
end