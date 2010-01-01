
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
  
  describe '#format'
    describe '%a'
      it 'should represent a short day name'
        (new Date('May 5 1987')).format('day: %a').should.eql 'day: Tue'
      end
    end
    
    describe '%A'
      it 'should represent a full day name'
        (new Date('May 5 1987')).format('day: %A').should.eql 'day: Tuesday'
      end
    end
    
    describe '%b'
      it 'should represent a short month name'
        (new Date('January 5 1987')).format('month: %b').should.eql 'month: Jan'
      end
    end
    
    describe '%B'
      it 'should represent a full month name'
        (new Date('January 5 1987')).format('month: %B').should.eql 'month: January'
      end
    end
    
    describe '%d'
      it 'should represent a day of the month with leading zero'
        (new Date('January 5 1987')).format('day: %d').should.eql 'day: 05'
        (new Date('January 15 1987')).format('day: %d').should.eql 'day: 15'
      end
    end
    
    describe '%e'
      it 'should represent a day of the month without leading zero'
        (new Date('January 5 1987')).format('day: %e').should.eql 'day: 5'
      end
    end
  end
end