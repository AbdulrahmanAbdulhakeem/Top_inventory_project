const { Client } = require("pg");

const SQL = `
 CREATE TABLE IF NOT EXISTS categories(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
 );

 CREATE TABLE IF NOT EXISTS items(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,item_name VARCHAR(255),category_id INT,FOREIGN KEY(category_id) 
    REFERENCES categories(id) ON DELETE CASCADE
);

 INSERT INTO categories(name) VALUES ('Laptop'),('Phone');

 INSERT into items(item_name,category_id) VALUES('HP',1),('Dell',1),('Acer',1);

 INSERT into items(item_name,category_id) VALUES('Xiaomi',2),('Samsung',2),('Iphone',2);

`;


async function main() {
  console.log("Seeding");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done")
}

main();
