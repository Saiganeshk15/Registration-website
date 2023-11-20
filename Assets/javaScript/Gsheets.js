function importDataFromFirestore() {
    // Replace 'YourFirebaseProjectId' with your actual Firebase project ID
    var firebaseProjectId = 'codequest-7ac27';
  
    // Replace 'YourFirestoreCollection' with your actual Firestore collection name
    var firestoreCollection = 'teams';
  
    // Replace 'YourSheetName' with your actual sheet name
    var sheetName = 'sheet1';
  
    var firestoreUrl = 'https://firestore.googleapis.com/v1/projects/' + firebaseProjectId + '/databases/(default)/documents/' + firestoreCollection;
  
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  
    // Clear existing data in the sheet
    sheet.clear();
    
    // Fetch data from Firestore
    var response = UrlFetchApp.fetch(firestoreUrl);
    var jsonData = JSON.parse(response.getContentText());
  
    var value = jsonData.documents
  
    // Extract data from the JSON response and write to the sheet
    var values = jsonData.documents.map(function (doc) {
      return Object.values(doc.fields)
    });
  
    for (let i=0; i< jsonData.documents.length; i++) {
      var data = value[i].fields
      //console.log(data)
      var user;
      if ((Object.keys(jsonData.documents[i].fields).length-2)/7 == 1 ) {
        user = [data.timeStamp.timestampValue,data.p1name.stringValue,data.p1email.stringValue,data.p1year.stringValue,data.p1rollno.stringValue,data.p1branch.stringValue,data.p1sec.stringValue,data.p1phno.stringValue]
        sheet.getRange(i+2, 1, 1, user.length).setValues([user]);
      } else if ((Object.keys(jsonData.documents[i].fields).length-2)/7 == 2 ) {
        user = [data.timeStamp.timestampValue,data.p1name.stringValue,data.p1email.stringValue,data.p1year.stringValue,data.p1rollno.stringValue,data.p1branch.stringValue,data.p1sec.stringValue,data.p1phno.stringValue,data.p2name.stringValue,data.p2email.stringValue,data.p2year.stringValue,data.p2rollno.stringValue,data.p2branch.stringValue,data.p2sec.stringValue,data.p2phno.stringValue]
        sheet.getRange(i+2, 1, 1, user.length).setValues([user]);
      } else if ((Object.keys(jsonData.documents[i].fields).length-2)/7 == 3 ) {
        user = [data.timeStamp.timestampValue,data.p1name.stringValue,data.p1email.stringValue,data.p1year.stringValue,data.p1rollno.stringValue,data.p1branch.stringValue,data.p1sec.stringValue,data.p1phno.stringValue,data.p2name.stringValue,data.p2email.stringValue,data.p2year.stringValue,data.p2rollno.stringValue,data.p2branch.stringValue,data.p2sec.stringValue,data.p2phno.stringValue,data.p3name.stringValue,data.p3email.stringValue,data.p3year.stringValue,data.p3rollno.stringValue,data.p3branch.stringValue,data.p3sec.stringValue,data.p3phno.stringValue]
        sheet.getRange(i+2, 1, 1, user.length).setValues([user]);
      } else if ((Object.keys(jsonData.documents[i].fields).length-2)/7 == 4 ) {
        user = [data.timeStamp.timestampValue,data.p1name.stringValue,data.p1email.stringValue,data.p1year.stringValue,data.p1rollno.stringValue,data.p1branch.stringValue,data.p1sec.stringValue,data.p1phno.stringValue,data.p2name.stringValue,data.p2email.stringValue,data.p2year.stringValue,data.p2rollno.stringValue,data.p2branch.stringValue,data.p2sec.stringValue,data.p2phno.stringValue,data.p3name.stringValue,data.p3email.stringValue,data.p3year.stringValue,data.p3rollno.stringValue,data.p3branch.stringValue,data.p3sec.stringValue,data.p3phno.stringValue,data.p4name.stringValue,data.p4email.stringValue,data.p4year.stringValue,data.p4rollno.stringValue,data.p4branch.stringValue,data.p4sec.stringValue,data.p4phno.stringValue]
        sheet.getRange(i+2, 1, 1, user.length).setValues([user]);
      }
    }
  }
  