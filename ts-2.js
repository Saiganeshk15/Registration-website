document.querySelector(".submit").addEventListener('click', e => {
    e.preventDefault();
    alert("Registrations sucessful.")
    //Particpant 1
    var name1 = document.getElementById('name1').value;
    var email1 = document.getElementById('email1').value;
    var year1 = document.getElementById('year1').value;
    var rollno1 = document.getElementById('rollno1').value;
    var branch1 = document.getElementById('branch1').value;
    var sec1 = document.getElementById('sec1').value;
    var phno1 = document.getElementById('phno1').value;
    //Particpant 2
    var name2 = document.getElementById('name2').value;
    var email2 = document.getElementById('email2').value;
    var year2 = document.getElementById('year2').value;
    var rollno2 = document.getElementById('rollno2').value;
    var branch2 = document.getElementById('branch2').value;
    var sec2 = document.getElementById('sec2').value;
    var phno2 = document.getElementById('phno2').value;
    db.collection('ts-4').add({
       name1 : name1,
       email1 : email1,
       year1 : year1,
       rollno1 : rollno1,
       branch1 : branch1,
       sec1 : sec1,
       phno1 : phno1,
       name2 : name2,
       email2 : email2,
       year2 : year2,
       rollno2 : rollno2,
       branch2 : branch2,
       sec2 : sec2,
       phno2 : phno2
       });
       window.location.href = 'About.html';
 })