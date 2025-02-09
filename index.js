import pkg from "pg";

const { Client } = pkg;

export const handler = async (event) => {
  let response;

  // Instantiate the dbClient inside the handler
  const dbClient = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Connect to the database
    await dbClient.connect();

    if (event.httpMethod === "POST" && event.path === "/number") {
      const { number } = JSON.parse(event.body);

      if (typeof number !== "number") {
        response = {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid input, expected a number" }),
        };
      } else {
        try {
          await dbClient.query("INSERT INTO numbers_table(number) VALUES($1)", [
            number,
          ]);
          response = {
            statusCode: 201,
            body: JSON.stringify({ message: "Number saved successfully" }),
          };
        } catch (err) {
          console.error("Error saving number:", err);
          response = {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
          };
        }
      }
    } else if (event.httpMethod === "GET" && event.path === "/number") {
      try {
        const result = await dbClient.query(
          "SELECT number FROM numbers_table ORDER BY id DESC LIMIT 1",
        );

        if (result.rows.length === 0) {
          response = {
            statusCode: 404,
            body: JSON.stringify({ message: "No number found" }),
          };
        } else {
          response = {
            statusCode: 200,
            body: JSON.stringify(result.rows[0]),
          };
        }
      } catch (err) {
        console.error("Error retrieving number:", err);
        response = {
          statusCode: 500,
          body: JSON.stringify({ error: "Internal Server Error" }),
        };
      }
    } else {
      response = {
        statusCode: 404,
        body: JSON.stringify({ error: "Not Found" }),
      };
    }
  } catch (err) {
    console.error("Error connecting to the database:", err);
    response = {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  } finally {
    // Always close the database connection after use
    await dbClient.end();
  }

  return response;
};
