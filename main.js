class Year {

  constructor(year) {
    this.year = year;
  }

  isLeapYear() {
    if (this.year % 4 != 0) {
        console.log('false');
    } else if (this.year % 100 != 0) {
        console.log('true');
    } else if (this.year % 400 != 0) {
        console.log('false');
    } else {
      console.log('true');
    }
  }
}

  let check_years = function(start, stop){
    for(var i=start;i<=stop;i++)  {
      let currentYear = new Year(i)
      console.log("Is " + i + " a leap year?");
      currentYear.isLeapYear();
    }
  }


check_years(2000, 2100);
