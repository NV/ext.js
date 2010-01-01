
describe 'Date'
  describe '#monthName'
    it 'should return the month name string'
      (new Date('May 5 1987')).monthName.should.eql 'May'
    end
  end
end