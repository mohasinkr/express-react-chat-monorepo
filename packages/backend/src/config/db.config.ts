import { type Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DATABASE_NAME || "chat_app";

export const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

export let database: Db;

export async function initializeDatabase(): Promise<Db> {
	if (database) {
		return database;
	}

	try {
		await client.connect();

		await client.db(dbName).command({ ping: 1 });

		console.log("Connected to the DB!");

		database = client.db(dbName);

		return database;
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error);
		throw error;
	}
}

// Gracefully close the connection on shutdown
process.on("SIGINT", async () => {
	await client.close();
	console.log("MongoDB connection closed");
	process.exit(0);
});

process.on("SIGTERM", async () => {
	await client.close();
	console.log("MongoDB connection closed");
	process.exit(0);
});
