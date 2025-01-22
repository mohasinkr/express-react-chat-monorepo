import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DATABASE_NAME || "";

export const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

export async function connectToDB() {
	try {
		await client.connect();
		await client.db(dbName).command({ ping: 1 });
		console.log("Connected to MongoDB!");
	} finally {
		// ensuring connection closes in case of error
		await client.close();
	}
}
