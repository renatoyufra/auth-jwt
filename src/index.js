import app from "./app";
import "@babel/polyfill";

require("dotenv").config();

async function main() {
    // const PORT = (await process.env.PORT) || 4000;
    const PORT = 4000;

    await app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}

main();
