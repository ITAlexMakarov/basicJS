function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

new Student("Tony", "male", 37);
new Student("Buzz", "female", 35);

//2. Устанавка поля предмет `subject` экземпляра в `subjectName`
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

//3. Добавление студенту оценку `mark` в свойство (массив) `marks` объекта
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) { 
    this.marks = [mark];  // добавить первую оценку 
    } else {
      this.marks.push(mark);   // добавить вторую и последующие оценки в массив
    }
}

//4. Добавлять студенту сразу несколько оценок
Student.prototype.addMarks = function (...mark) {
  this.marks = mark;
}

//5. Среднее арифметическое оценок студента
Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let allAverage = sum / this.marks.length;
  return allAverage;
}

//6. Исключение студента из учебного процесса и устанавливение причины исключения, а также удаление свойств subject и marks
Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}