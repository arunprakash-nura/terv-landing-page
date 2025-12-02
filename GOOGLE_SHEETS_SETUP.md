# Google Sheets Setup Guide

Follow these steps to receive form submissions in Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Terv Landing Page Submissions"
4. Create two sheets (tabs):
   - **Application Forms**
   - **Download Requests**

## Step 2: Set Up Column Headers

### For "Application Forms" sheet:
Add these headers in Row 1:
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone`
- E1: `Education`
- F1: `Current Profile`

### For "Download Requests" sheet:
Add these headers in Row 1:
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone`
- E1: `Current Profile`

## Step 3: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

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
5. Name your project "Form Submissions Handler"

## Step 4: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Form submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **IMPORTANT**: You'll be asked to authorize the script
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 5: Update Your Code

1. Open `src/emailConfig.js`
2. Replace the `GOOGLE_SHEETS_URL` value with your Web App URL:
   ```javascript
   GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
   ```

## Step 6: Test the Integration

1. Fill out the "Apply Now" form on your website
2. Check the "Application Forms" sheet - you should see a new row with the submission
3. Fill out the "Download Syllabus" form
4. Check the "Download Requests" sheet - you should see a new row

## Troubleshooting

### If data is not appearing:

1. **Check the Apps Script logs**:
   - Go to Apps Script editor
   - Click **Executions** (clock icon on left)
   - Look for errors

2. **Verify sheet names match exactly**:
   - "Application Forms" (with space)
   - "Download Requests" (with space)

3. **Check deployment**:
   - Make sure "Who has access" is set to "Anyone"
   - Try redeploying if needed

4. **Test the script directly**:
   - In Apps Script, add this test function:
   ```javascript
   function testPost() {
     const testData = {
       postData: {
         contents: JSON.stringify({
           formType: 'application',
           name: 'Test User',
           email: 'test@example.com',
           phone: '+91 1234567890',
           education: 'B.Tech',
           currentProfile: 'Students'
         })
       }
     };
     doPost(testData);
   }
   ```
   - Run `testPost` and check if data appears in the sheet

## Current Configuration

Your current Google Sheets URL in `emailConfig.js` is:
```
https://script.google.com/macros/s/AKfycbzZwdUwhb8-kgjiVcYZjAEk971mSH0PWXZ6p2GSK9Pg4fUjSovuSIwugd2CDo9wnCYv/exec
```

**⚠️ IMPORTANT**: This URL might be from an old deployment or example. You need to create your own deployment and update this URL with your new Web App URL.

## Security Note

The current setup uses `mode: 'no-cors'` in the fetch request, which means you won't see error responses in the browser console. This is normal for cross-origin requests to Google Apps Script.

To verify submissions are working:
- Check your Google Sheet directly
- Check the Apps Script execution logs
