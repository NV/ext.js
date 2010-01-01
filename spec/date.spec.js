
describe 'Date'
  describe '#monthName'
    it 'should return a month name'
      (new Date('May 5 1987')).monthName.should.eql 'May'
    end
  end
  
  describe '#shortMonthName'
    it 'should return a short month name'
      (new Date('January 5 1987')).shortMonthName.should.eql 'Jan'
    end
  end
  
  describe '#dayName'
    it 'should return a day name'
      (new Date('May 5 1987')).dayName.should.eql 'Tuesday'
    end
  end
  
  describe '#shortDayName'
    it 'should return a short day name'
      (new Date('May 5 1987')).shortDayName.should.eql 'Tue'
    end
  end
end