
describe 'Date'
  describe '#monthName'
    it 'should return a month name'
      (new Date('May 5 1987')).monthName.should.eql 'May'
    end
  end
  
  describe '#dayName'
    it 'should return a day names'
      (new Date('May 5 1987')).dayName.should.eql 'Tuesday'
    end
  end
end