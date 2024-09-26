const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://mohitdhaker04:IxGiLT1ynBkA61dB@cluster0.oeyvtes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your connection string

app.get("/api/expenses", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("expenseTrackerApp"); // Use your database name
    const collection = database.collection("customerExpenses");

    // Retrieve customer data
    const customerData = await collection.findOne({ customerId: "CUST001" });
    res.json(customerData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving data");
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
