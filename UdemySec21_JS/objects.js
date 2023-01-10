class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  describe() {
    console.log(`이렇게 출력할때는 this. 사용 ${this.title}`);
  }
}

const developer = new Job("Developer", "New York", 50000);
console.log(developer);

developer.describe();
