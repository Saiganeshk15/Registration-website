document.querySelector(".submit").addEventListener('click',async (e) => {
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
    //Particpant 3
    var name3 = document.getElementById('name3').value;
    var email3 = document.getElementById('email3').value;
    var year3 = document.getElementById('year3').value;
    var rollno3 = document.getElementById('rollno3').value;
    var branch3 = document.getElementById('branch3').value;
    var sec3 = document.getElementById('sec3').value;
    var phno3 = document.getElementById('phno3').value;
    //Particpant 4
    var name4 = document.getElementById('name4').value;
    var email4 = document.getElementById('email4').value;
    var year4 = document.getElementById('year4').value;
    var rollno4 = document.getElementById('rollno4').value;
    var branch4 = document.getElementById('branch4').value;
    var sec4 = document.getElementById('sec4').value;
    var phno4 = document.getElementById('phno4').value;
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
       phno2 : phno2,
       name3 : name3,
       email3 : email3,
       year3 : year3,
       rollno3 : rollno3,
       branch3 : branch3,
       sec3 : sec3,
       phno3 : phno3,
       name4 : name4,
       email4 : email4,
       year4 : year4,
       rollno4 : rollno4,
       branch4 : branch4,
       sec4 : sec4,
       phno4 : phno4
       });
       await Sleep(3000);
        window.location.href = 'About.html';
 })