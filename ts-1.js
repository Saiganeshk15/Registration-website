async function sleepAsync(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

document.querySelector(".submit").addEventListener('click',async (e) => {
    // e.preventDefault();
    //participant 1
    var name1 = document.getElementById('name1').value;
    var email1 = document.getElementById('email1').value;
    var year1 = document.getElementById('year1').value;
    var rollno1 = document.getElementById('rollno1').value;
    var branch1 = document.getElementById('branch1').value;
    var sec1 = document.getElementById('sec1').value;
    var phno1 = document.getElementById('phno1').value;
    db.collection('ts-1').add({
       name: name1,
       email: email1,
       year : year1,
       rollno : rollno1,
       branch : branch1,
       sec : sec1,
       phno : phno1
   });
   await sleepAsync(1000)
   alert("Registrations sucessful.")
   window.location.href = 'About.html';
 })