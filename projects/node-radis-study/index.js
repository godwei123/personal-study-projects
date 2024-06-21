import {createClient} from "redis";

const client = createClient();

client.on("error", (error) => {
    console.error(error);
});

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');

console.log(value);
