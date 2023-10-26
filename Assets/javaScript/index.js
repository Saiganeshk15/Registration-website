var dropdownOptions = document.getElementById("dropdownOptions");
var dropdownSelect = document.querySelector(".dropdown-select");
var form = document.querySelector(".participants");
let teamSize = 1;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleDropdown() {
  dropdownOptions.style.display =
    dropdownOptions.style.display === "block" ? "none" : "block";
}

function selectNumber(number) {
  teamSize = number;
  dropdownSelect.innerHTML = "Team size : " + number;
  dropdownOptions.style.display = "none";
  form.innerHTML = "";
  createParticipantDOM(number);
}

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-select")) {
    dropdownOptions.style.display = "none";
  }
});
// Function to generate the virtual DOM for participants
function createParticipantDOM(participantCount) {
  const form = document.querySelector(".participants");

  for (let i = 1; i <= participantCount; i++) {
    const participantContainer = document.createElement("div");
    participantContainer.classList.add(`participant-${i}`);

    const participantLabel = document.createElement("label");
    participantLabel.textContent = `Participant ${i}:`;

    const fieldsContainer = document.createElement("div");
    fieldsContainer.classList.add("fields");

    const fieldNames = [
      "Name",
      "Email",
      "Year",
      "Roll No",
      "Branch",
      "Sec",
      "Phone No",
    ];
    for (let j = 0; j < fieldNames.length; j++) {
      const column = document.createElement("div");
      column.classList.add("column");

      const formGroup = document.createElement("div");
      formGroup.classList.add("form__group", "field");

      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("form__field");
      input.placeholder = fieldNames[j];
      input.name = `participant-${i}-${fieldNames[j]
        .replace(/\s/g, "-")
        .toLowerCase()}`;
      input.id = `p${i}f${j}`;
      input.required = true;

      const label = document.createElement("label");
      label.textContent = fieldNames[j];
      label.setAttribute("for", `p${i}f${j}`);
      label.classList.add("form__label");

      formGroup.appendChild(input);
      formGroup.appendChild(label);
      column.appendChild(formGroup);
      fieldsContainer.appendChild(column);
    }

    participantContainer.appendChild(participantLabel);
    participantContainer.appendChild(fieldsContainer);
    form.appendChild(participantContainer);
  }
}
createParticipantDOM(1);

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
  teams
    .add({
      teamSize: teamSize,
    })
    .then((doc) => {
      localStorage.setItem("teamId", doc.id);
    });
  await sleep(5000);
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
      if (j == 3 || j == 4 || j == 5) {
        values = document.querySelector(`#p${i}f${j}`).value.toUpperCase();
      } else {
        values = document.querySelector(`#p${i}f${j}`).value.toLowerCase();
      }
      data[`p${i}${dict[j]}`] = values;
    }
  }
  teams.doc(teamId).set(data, { merge: true });
  mail.doc(teamId).set({
    to: emails,
    message: {
      subject: "Hello from Sai!!!",
      text: "This is a plain text.",
    },
  });
});
