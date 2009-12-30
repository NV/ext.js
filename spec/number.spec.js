
describe 'Number'
  describe '#ordinalize'
    describe 'with an integer'
      it 'should return an ordinal string'
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