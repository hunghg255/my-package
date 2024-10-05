import { get } from "hung-pkg-test";


const start = async () => {
  const args = process.argv.slice(2);
  console.log(args);

  console.log(await get("https://jsonplaceholder.typicode.com/todos/1"));
}

start()
