var dropdownOptions = document.getElementById("dropdownOptions");
var dropdownSelect = document.querySelector(".dropdown-select");
var form = document.querySelector(".participants");
let teamSize = 1;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function selectNumber(number) {
//   console.log(number)
//   teamSize = number;
//   dropdownSelect.innerHTML = "Team size : " + number;
//   form.innerHTML = "";
//   createParticipantSections(number);
// }

document.querySelector('select#teamsize').addEventListener('change' , (e) => {
  console.log(e.target.value);
  teamSize = e.target.value;
  form.innerHTML = "";
  createParticipantSections(teamSize);
});

// Function to generate the virtual DOM for participants
function createParticipantSections(numParticipants) {
  const participantsContainer = document.querySelector('.participants');

  for (let i = 1; i <= numParticipants; i++) {
      const participantSection = document.createElement('div');
      participantSection.classList.add(`participant-${i}`);

      participantSection.innerHTML = `
          <label>Participant ${i}:</label>
          <div class="fields">
              <div class="column">
                  <div class="form__group field">
                      <input type="text" class="form__field" placeholder="Name" name="participant-${i}-name" id="p${i}f0" required="">
                      <label for="p${i}f0" class="form__label">Name</label>
                  </div>
                  <p id="p${i}w0" class="war">Enter valid Name</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <input type="text" class="form__field" placeholder="Email" name="participant-${i}-email" id="p${i}f1" required="">
                      <label for="p${i}f1" class="form__label">Email</label>
                  </div>
                  <p id="p${i}w1" class="war">Enter valid Email</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <label class="form__label" for="p${i}f2">Year</label>
                      <select class="form__field" id="p${i}f2" name="participant-${i}-year">
                          <option class="dropdown-option" value="">Select</option>
                          <option class="dropdown-option" value="1">1</option>
                          <option class="dropdown-option" value="2">2</option>
                          <option class="dropdown-option" value="3">3</option>
                          <option class="dropdown-option" value="4">4</option>
                      </select>
                  </div>
                  <p id="p${i}w2" class="war">Select valid Year</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <input type="text" class="form__field" placeholder="Roll No" name="participant-${i}-roll-no" id="p${i}f3" required="">
                      <label for="p${i}f3" class="form__label">Roll No</label>
                  </div>
                  <p id="p${i}w3" class="war">Enter valid Roll No</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <label class="form__label" for="p${i}f4">Branch</label>
                      <select class="form__field" id="p${i}f4" name="participant-${i}-branch">
                          <option class="dropdown-option" value="">Select</option>
                          <option class="dropdown-option" value="CIVIL">CIVIL</option>
                          <option class="dropdown-option" value="CSB">CSB</option>
                          <option class="dropdown-option" value="CSC">CSC</option>
                          <option class="dropdown-option" value="CSD">CSD</option>
                          <option class="dropdown-option" value="CSM">CSM</option>
                          <option class="dropdown-option" value="ECE">ECE</option>
                          <option class="dropdown-option" value="EEE">EEE</option>
                          <option class="dropdown-option" value="IT">IT</option>
                          <option class="dropdown-option" value="MECH">MECH</option>
                      </select>
                  </div>
                  <p id="p${i}w4" class="war">Select valid Branch</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <label class="form__label" for="p${i}f5">Section</label>
                      <select class="form__field" id="p${i}f5" name="participant-${i}-section">
                          <option class="dropdown-option" value="">Select</option>
                          <option class="dropdown-option" value="A">A</option>
                          <option class="dropdown-option" value="B">B</option>
                          <option class="dropdown-option" value="C">C</option>
                          <option class="dropdown-option" value="D">D</option>
                      </select>
                  </div>
                  <p id="p${i}w5" class="war">Select valid Section</p>
              </div>
              <div class="column">
                  <div class="form__group field">
                      <input type="text" class="form__field" placeholder="Phone No" name="participant-${i}-phone-no" id="p${i}f6" required="">
                      <label for="p${i}f6" class="form__label">Phone No</label>
                  </div>
                  <p id="p${i}w6" class="war">Enter valid Phone No</p>
              </div>
          </div>
      `;

      participantsContainer.appendChild(participantSection);
  }
}
createParticipantSections(1);

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGE_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MESSUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
const teams = db.collection("teams");
const mail = db.collection("mail");

document.querySelector(".submit").addEventListener("click", async (e) => {
  e.preventDefault();
  let emails = [];
  for (let m = 1; m <= teamSize; m++) {
    emails.push(document.querySelector(`#p${m}f1`).value.toLowerCase());
  }
  
  let teamId = localStorage.getItem("teamId");
  let dict = {
    0: "name",
    1: "email",
    2: "year",
    3: "rollno",
    4: "branch",
    5: "sec",
    6: "phno",
  };
  var data = {};
  for (let i = 1; i <= teamSize; i++) {
    for (let j = 0; j <= 6; j++) {
      key = `p${i}${dict[j]}`;
      let values;
      document.querySelector(`#p${i}w${j}`).classList.remove("war-active");
      if (document.querySelector(`#p${i}f${j}`).value == "") {
        document.querySelector(`#p${i}w${j}`).classList.add("war-active");
        var flag = 1;
      }
      if (j == 3 || j == 4 || j == 5) {
        values = document.querySelector(`#p${i}f${j}`).value.toUpperCase();
      }
       else {
        values = document.querySelector(`#p${i}f${j}`).value.toLowerCase();
      }
      if ( j == 3 ) {
        if ( values.length != 10 || (values[2] != 'P' || values[3] != '6' )) {
          document.querySelector(`#p${i}w${j}`).classList.add("war-active");
          var flag = 1;
        }
      }
      if (j == 4) {
        console.log(teams.where("p1rollno", "==", values).get())
      }
      data[`p${i}${dict[j]}`] = values;
    }
  }
  if (flag) {
    return;
  }
  await teams
    .add({
      teamSize: teamSize,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((doc) => {
      localStorage.setItem("teamId", doc.id);
    });
  await sleep(4000);
  teams.doc(teamId).set(data, { merge: true });
  await mail.doc(teamId).set({
    to: emails,
    message: {
      attachments : [
        {
          filename : 'invitaion.pdf',
          href : 'https://firebasestorage.googleapis.com/v0/b/codequest-7ac27.appspot.com/o/invitation.pdf?alt=media',

        }
      ],
      subject: "Hello from Sai!!!",
      html: `<p><a href="https://drive.google.com/file/d/18MKO7nuNDOZswFVoDsVRVrU4hADcWJUB/view?usp=sharing">Click here</a> to download Invitaion.</p>`
    }
  });
  window.location.href = "About.html";
});