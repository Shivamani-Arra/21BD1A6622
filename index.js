const express = require('express');
const axios = require('axios');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDc1NjQ5LCJpYXQiOjE3MTcwNzUzNDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZlN2M2YThjLTVkOWMtNDMyZi1iZGZhLTAxZDRlNjY0M2FlOSIsInN1YiI6InNoaXZhbWFuaWFycmFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiUGxhY2VtZW50cyBLTUlUIiwiY2xpZW50SUQiOiJmZTdjNmE4Yy01ZDljLTQzMmYtYmRmYS0wMWQ0ZTY2NDNhZTkiLCJjbGllbnRTZWNyZXQiOiJ1UFp6U3h6ZkdyWkdZakNJIiwib3duZXJOYW1lIjoiQXJyYSBTaGl2YSBNYW5pIiwib3duZXJFbWFpbCI6InNoaXZhbWFuaWFycmFAZ21haWwuY29tIiwicm9sbE5vIjoiMjFCRDFBNjYyMiJ9.UAcrrP5INJfasorF4sG9LHI0E00N7211yDSRALdzoeE"; // Replace 'YOUR_API_KEY' with your actual API key
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDc1NjQ5LCJpYXQiOjE3MTcwNzUzNDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZlN2M2YThjLTVkOWMtNDMyZi1iZGZhLTAxZDRlNjY0M2FlOSIsInN1YiI6InNoaXZhbWFuaWFycmFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiUGxhY2VtZW50cyBLTUlUIiwiY2xpZW50SUQiOiJmZTdjNmE4Yy01ZDljLTQzMmYtYmRmYS0wMWQ0ZTY2NDNhZTkiLCJjbGllbnRTZWNyZXQiOiJ1UFp6U3h6ZkdyWkdZakNJIiwib3duZXJOYW1lIjoiQXJyYSBTaGl2YSBNYW5pIiwib3duZXJFbWFpbCI6InNoaXZhbWFuaWFycmFAZ21haWwuY29tIiwicm9sbE5vIjoiMjFCRDFBNjYyMiJ9.UAcrrP5INJfasorF4sG9LHI0E00N7211yDSRALdzoeE";

app.get('/test/companies/:companyName/categories/:categoryName/products', async (req, res) => {
    try {
        const { companyName, categoryName } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        const response = await axios.get(`https://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products`, {
            params: {
                top: top,
                minPrice: minPrice,
                maxPrice: maxPrice
            },
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            headers: headers
        });

        res.send(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
