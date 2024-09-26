const { MongoClient } = require("mongodb");

// MongoDB connection URI (replace with your actual MongoDB Atlas connection string)
const uri =
  "mongodb+srv://mohitdhaker04:IxGiLT1ynBkA61dB@cluster0.oeyvtes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function insertSingleCustomerData() {
  const client = new MongoClient(uri);

  try {
    await client.connect(); // Connect to MongoDB
    const database = client.db("expenseTrackerApp"); // Specify the database
    const collection = database.collection("customerExpenses"); // Specify the collection

    // Define the dummy data for a single customer
    const customerData = {
      customerId: "CUST001",
      name: "John Doe",
      email: "john.doe@example.com",
      transactions: [
        {
          transactionId: "TRANS001",
          date: "2024-09-01",
          amount: 150.0,
          category: "Groceries",
          paymentMethod: "Credit Card",
        },
        {
          transactionId: "TRANS002",
          date: "2024-09-03",
          amount: 50.25,
          category: "Transport",
          paymentMethod: "Debit Card",
        },
        {
          transactionId: "TRANS003",
          date: "2024-09-05",
          amount: 80.0,
          category: "Dining",
          paymentMethod: "Cash",
        },
        {
          transactionId: "TRANS004",
          date: "2024-09-07",
          amount: 200.0,
          category: "Shopping",
          paymentMethod: "Credit Card",
        },
      ],
    };

    // Insert the data into the MongoDB collection
    const result = await collection.insertOne(customerData);
    console.log(
      `${result.insertedCount} document inserted:`,
      result.insertedId
    );
  } finally {
    await client.close(); // Close the connection
  }
}

// Call the function to insert data
insertSingleCustomerData().catch(console.error);
