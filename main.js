
function Student(name, roll_no, _class, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = _class;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
    
    this.printTop3Subjects = function () {
        const sortedSubjects = Object.entries(this.marks_of_5_subjects).sort(([, a], [, b]) => b - a);

  
      const top3Subjects = sortedSubjects.slice(0, 3).map(subject => subject[0]);
  
      console.log('Top 3 Subjects:', top3Subjects);
    };
  
    this.printReportCard = function () {
      const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
      const percentage = (totalMarks / 500) * 100;
  
      console.log('+--------------------+');
      console.log('     REPORT CARD    ');
      console.log('+--------------------+');
      console.log(' Name     -', this.name);
      console.log(' Roll no. -', this.roll_no);
      console.log(' Class    -', this.class);
      console.log(' Section  -', this.section);
  
      Object.entries(this.marks_of_5_subjects).forEach(subject => {
        console.log(` ${subject[0].padEnd(8)} - ${subject[1].toString().padStart(2)}`);
      });

      console.log(` Prectage -- ${percentage.toFixed(1)} %`);
      console.log('+--------------------+');
    };
  }
  
  const student1 = new Student('Huzaifa', 16, 'X', 'A', {
    science: 73,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
  });
  
  student1.printTop3Subjects();  
  student1.printReportCard();
  