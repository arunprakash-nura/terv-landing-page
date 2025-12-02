# Forms Google Sheets Integration Summary

All form submissions on your website are now configured to send data to Google Sheets.

## Forms Integrated:

### 1. **Apply Now Form** (`ApplicationForm.jsx`)
- **Form Type**: `application`
- **Data Collected**: Name, Email, Phone, Education, Current Profile
- **Sheet Name**: `Application Forms`

### 2. **Download Syllabus Form** (`DownloadForm.jsx`)
- **Form Type**: `download`
- **Data Collected**: Name, Email, Phone, Current Profile
- **Sheet Name**: `Download Requests`

### 3. **Book a Call / Book Your Trial Now** (`BookCallForm.jsx` + `Chatbot.jsx`)
- **Form Type**: `book_call`
- **Data Collected**: Name, Phone, Email
- **Sheet Name**: `Book Call Requests`

## Google Sheets Setup Required:

### Step 1: Create Google Sheet with 3 Tabs

Create a new Google Sheet with these three sheets:

#### Sheet 1: **Application Forms**
Column Headers (Row 1):
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone`
- E1: `Education`
- F1: `Current Profile`

#### Sheet 2: **Download Requests**
Column Headers (Row 1):
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone`
- E1: `Current Profile`

#### Sheet 3: **Book Call Requests**
Column Headers (Row 1):
- A1: `Timestamp`
- B1: `Name`
- C1: `Phone`
- D1: `Email`

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this updated code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Determine which sheet to use based on form type
    let sheet;
    let rowData;
    
    if (data.formType === 'application') {
      sheet = ss.getSheetByName('Application Forms');
      rowData = [
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.education,
        data.currentProfile
      ];
    } else if (data.formType === 'download') {
      sheet = ss.getSheetByName('Download Requests');
      rowData = [
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.currentProfile
      ];
    } else if (data.formType === 'book_call') {
      sheet = ss.getSheetByName('Book Call Requests');
      rowData = [
        new Date(),
        data.name,
        data.phone,
        data.email
      ];
    }
    
    // Append the data to the sheet
    if (sheet) {
      sheet.appendRow(rowData);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project "Terv Forms Handler"

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Terv forms submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Authorize the script when prompted
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 4: Update Your Code

1. Open `src/emailConfig.js`
2. Replace the `GOOGLE_SHEETS_URL` value with your Web App URL:
   ```javascript
   GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
   ```

## Testing

After setup, test each form:

1. **Apply Now** - Fill and submit → Check "Application Forms" sheet
2. **Download Syllabus** - Fill and submit → Check "Download Requests" sheet
3. **Book Your Trial Now** button - Fill and submit → Check "Book Call Requests" sheet
4. **Chatbot "Book a Call"** - Complete conversation → Check "Book Call Requests" sheet

## Validation Applied

All forms now have validation:

### Name Field:
- Only letters and spaces
- Minimum 2 characters
- No numbers, symbols, or emojis

### Phone Field:
- Exactly 10 digits
- Numbers only
- No spaces or special characters

### Email Field:
- Valid email format
- Must contain @ and domain

## Current Configuration

Your current Google Sheets URL in `emailConfig.js`:
```
https://script.google.com/macros/s/AKfycbzZwdUwhb8-kgjiVcYZjAEk971mSH0PWXZ6p2GSK9Pg4fUjSovuSIwugd2CDo9wnCYv/exec
```

⚠️ **IMPORTANT**: This URL might be from an old deployment. Create your own deployment following the steps above and update the URL.

## Troubleshooting

If submissions aren't appearing:

1. Check Apps Script execution logs (Executions tab)
2. Verify sheet names match exactly (case-sensitive)
3. Ensure "Who has access" is set to "Anyone"
4. Try redeploying the script
5. Check browser console for errors

## Files Modified

- ✅ `src/components/ApplicationForm.jsx` - Already integrated
- ✅ `src/components/DownloadForm.jsx` - Already integrated
- ✅ `src/components/BookCallForm.jsx` - **NEW: Google Sheets integration added**
- ✅ `src/components/Chatbot.jsx` - **NEW: Google Sheets integration added**
