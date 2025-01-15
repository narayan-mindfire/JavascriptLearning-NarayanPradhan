// input data
const students = [
    { name: "Alice", scores: { math: 95, english: 88, science: 92 } },
    { name: "Bob", scores: { math: 78, english: 82, science: 85 } },
    { name: "Charlie", scores: { math: 85, english: 90, science: 87 } },
    { name: "Daisy", scores: { math: 65, english: 70, science: 72 } },
    { name: "Eve", scores: { math: 98, english: 94, science: 96 } },
  ];

//function to calculate the percentage of each student -> taking in each student's data
function calculatePercentage(student){
    let totalScore = 0
    const scoresEntries = Object.entries(student.scores);
    const numberOfSubjects = scoresEntries.length
    for(const [key, val] of scoresEntries) totalScore += val
    const percentage = (totalScore/numberOfSubjects).toFixed(2)
    return percentage
}

//function to calculate the grades based on the percentage(average) of each student -> taking in each student's data
function assignGrade(student){
    let grade
    const percentageAchieved = student.percentage
    if(percentageAchieved > 90) grade = 'A'
    else if(percentageAchieved > 80) grade = 'B'
    else if(percentageAchieved > 70) grade = 'C'
    else if(percentageAchieved > 60) grade = 'D'
    else if(percentageAchieved > 50) grade = 'E'
    else grade = 'Fail'
    return grade
}

//iterating through the students array(of objects) using the for of loop,
//I'm modifying the original data to have an additional property of percentage in each object it contains

for(var student of students){                   
    student.percentage = calculatePercentage(student)
}
//I'm modifying the original data to have an additional property of grade in each object it contains
for(var student of students){
    student.grade = assignGrade(student)
}
students.sort((a, b)=>b.percentage-a.percentage)
for(student of students){
    console.log(`Name : ${student.name}, Percentage : ${student.percentage}%, Grade : ${student.grade}`)
}

