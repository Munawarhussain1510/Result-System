<<<<<<< HEAD
// Form submission
let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = String (document.getElementById("name").value) ;
    let marks = Number(document.getElementById("marks").value );
    addStudent(name,marks);
});
// Add students grade & results
let students =[];
function addStudent(name,marks){
    let grade = "";
    let result = "";
    if(marks >= 80){
        grade = "A";
        result = "pass";
    }
    else if(marks >= 60){
        grade = "B";
        result = "pass";
    }else if(marks >= 50){
        grade = "C";
        result = "pass";
    }else{
        grade = "F";
        result = "Fail";
    }
    students.push({name,marks,grade,result});
    showStudents();
}
// Show data in the UI
function showStudents(){
    let tbody = document.getElementById("tablebody");
    tbody.innerHTML = "";
    let pass = 0;
    let fail = 0;
    let total = students.length;
    for(let i = 0; i < students.length; i++){
        let s = students[i];
        let row = `
        <tr class = "body-row">
        <td>${i + 1}</td>
        <td>${s.name}</td>
        <td>${s.marks}</td>
        <td class = "grade ${s.grade}">${s.grade}</td>
        <td>${s.result}</td>
        <td  class = "body-btn"><button onclick = deleteStudent(${i})><i class="fa-regular fa-trash-can"></i>delete</button></td>
        </tr>
        `;
        tbody.innerHTML += row;
        // summary ma data show
        if(s.result === "pass"){
            pass++;
        }
        else{
            fail++;
        }   
    }
    let per = 0;
    if(total > 0){
        per = (pass/total) * 100;
        document.getElementById("total-student").textContent = total;
        document.getElementById("pass").textContent = pass;
        document.getElementById("fail").textContent = fail;
        document.getElementById("percentage").textContent = per.toFixed() + "%";
    }
}
// Delete function
function deleteStudent(index){
    students.splice(index,1)
    showStudents();
}
/*let st = "23";
let nmb = 25;
let add = st + nmb;
console.log("23 =", typeof st,"25 =", typeof nmb);
=======
// Form submission
let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = String (document.getElementById("name").value) ;
    let marks = Number(document.getElementById("marks").value );
    addStudent(name,marks);
});
// Add students grade & results
let students =[];
function addStudent(name,marks){
    let grade = "";
    let result = "";
    if(marks >= 80){
        grade = "A";
        result = "pass";
    }
    else if(marks >= 60){
        grade = "B";
        result = "pass";
    }else if(marks >= 50){
        grade = "C";
        result = "pass";
    }else{
        grade = "F";
        result = "Fail";
    }
    students.push({name,marks,grade,result});
    showStudents();
}
// Show data in the UI
function showStudents(){
    let tbody = document.getElementById("tablebody");
    tbody.innerHTML = "";
    let pass = 0;
    let fail = 0;
    let total = students.length;
    for(let i = 0; i < students.length; i++){
        let s = students[i];
        let row = `
        <tr class = "body-row">
        <td>${i + 1}</td>
        <td>${s.name}</td>
        <td>${s.marks}</td>
        <td class = "grade ${s.grade}">${s.grade}</td>
        <td>${s.result}</td>
        <td  class = "body-btn"><button onclick = deleteStudent(${i})><i class="fa-regular fa-trash-can"></i>delete</button></td>
        </tr>
        `;
        tbody.innerHTML += row;
        // summary ma data show
        if(s.result === "pass"){
            pass++;
        }
        else{
            fail++;
        }   
    }
    let per = 0;
    if(total > 0){
        per = (pass/total) * 100;
        document.getElementById("total-student").textContent = total;
        document.getElementById("pass").textContent = pass;
        document.getElementById("fail").textContent = fail;
        document.getElementById("percentage").textContent = per.toFixed() + "%";
    }
}
// Delete function
function deleteStudent(index){
    students.splice(index,1)
    showStudents();
}
/*let st = "23";
let nmb = 25;
let add = st + nmb;
console.log("23 =", typeof st,"25 =", typeof nmb);
>>>>>>> 6bb93d1fb0ce713a5aa84c0fd0678fa28e495ed2
console.log("add the value of 23 and 25 =", add)*/