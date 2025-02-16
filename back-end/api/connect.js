import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://devjop:devjop@clientes.dx6eo.mongodb.net/?retryWrites=true&w=majority&appName=Clientes";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
