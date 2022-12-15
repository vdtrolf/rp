// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { paintings?: mongoDB.Collection } = {}

// Initialize Connection

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const paintingsCollection: mongoDB.Collection = db.collection(process.env.PAINTINGS_COLLECTION_NAME);
 
    collections.paintings = paintingsCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${paintingsCollection.collectionName}`);
 }