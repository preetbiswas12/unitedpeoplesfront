const SHEET_ID = "1o3ov7bouR1BB9HraKi3ZUR98KhlUy-yPZJA8fGxARYE";
const SHEET_NAME = "Issues";
const DRIVE_FOLDER_ID = "1XJaaJEugzymOac4_OJGOlPvCFXsUYk1P";

function setup() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Location",
      "Municipality",
      "Ward",
      "Category",
      "Description",
      "Image Links",
      "Source",
    ]);
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    const imageLinks = [];

    const images = Array.isArray(payload.images) ? payload.images : [];
    images.forEach((image, index) => {
      if (!image || !image.data) {
        return;
      }

      const base64 = String(image.data).split(",").pop();
      const bytes = Utilities.base64Decode(base64);
      const blob = Utilities.newBlob(
        bytes,
        image.mimeType || MimeType.PNG,
        image.name || `issue-${index + 1}.png`
      );
      const file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      imageLinks.push(file.getUrl());
    });

    sheet.appendRow([
      new Date(),
      payload.name || "",
      payload.phone || "",
      payload.location || "",
      payload.municipality || "",
      payload.ward || "",
      payload.category || "",
      payload.description || "",
      imageLinks.join("\n"),
      payload.source || "UPF report issue form",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, saved: true, imageLinks })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, saved: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}