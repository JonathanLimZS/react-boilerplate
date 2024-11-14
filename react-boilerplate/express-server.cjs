const express = require('express');
const app = express();
const PORT = 5000;

// Mock financial data
const mockFinancialData = require('./mock_financial_data.json');

// Define the /financial-data endpoint
app.get('/financial-data', (req, res) => {
    res.json(mockFinancialData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});