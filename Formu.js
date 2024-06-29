function doPost(e) {
    const sheet = SpreadsheetApp.openById('1uDfUvhcJ5izylEOxmHGXKG8U0hOWeLGpD2UXfFmRUVE').getSheetByName('Respuestas');
    const data = e.parameter;
    sheet.appendRow([new Date(), data.email, data.q1, data.q2, data.q3]);
    return ContentService.createTextOutput('Success');
  }
  