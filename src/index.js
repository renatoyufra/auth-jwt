import app from "./app";
import "@babel/polyfill";

require("dotenv").config();

async function main() {
    const PORT = (await process.env.PORT) || 3000;

    await app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}

main();
