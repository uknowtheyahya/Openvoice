const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://yahyasaleem72:YgKgLpdDLZt1YoFv@cluster0.rn0f7iv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const taskCollections = client.db("TaskManagement").collection("tasks");

    app.post("/upload-task", async (req, res) => {
      try {
        const data = req.body;
        const result = await taskCollections.insertOne(data);
        res.status(201).json({ message: "Task successfully uploaded", data: result.ops[0] });
      } catch (error) {
        console.error("Error uploading task:", error);
        res.status(500).json({ error: "Failed to upload task" });
      }
    });

    app.patch("/task/:id", async (req, res) => {
      const id = req.params.id;
      const updateTaskData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = { $set: { ...updateTaskData } };
      const result = await taskCollections.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    app.delete("/task/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await taskCollections.deleteOne(filter);
      res.send(result);
    });

    app.get("/tasks", async (req, res) => {
      const query = req.query?.category ? { category: req.query.category } : {};
      const result = await taskCollections.find(query).toArray();
      res.send(result);
    });

    app.get("/task/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await taskCollections.findOne(filter);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Don't close the client if it's meant to be a long-running server
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
