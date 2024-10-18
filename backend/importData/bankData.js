import fs from 'fs';
import path from 'path';  // Add this import
import xlsx from 'xlsx';
import { Bank } from '../models/Bank.js';  // Adjust the path if needed

// Function to read Excel file and insert data into MongoDB
export const importBankData = async () => {
  try {
    // Use path.resolve to construct the absolute file path
    const filePath = path.resolve('./importData/bankTable.xlsx');  // Adjust path accordingly

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist at path:', filePath);
      return;
    }

    console.log('Reading Excel file...');

    // Read the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (sheetData.length === 0) {
      console.log('No data extracted from Excel file.');
      return;
    }

    console.log('Data extracted from Excel:', sheetData);

    // Insert data into MongoDB
    const result = await Bank.insertMany(sheetData);
    console.log('Data inserted successfully into MongoDB:', result);

  } catch (err) {
    console.error('Error during data processing or MongoDB insertion:', err.message);
  }
};









