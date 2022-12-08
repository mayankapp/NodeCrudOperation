const express = require("express");
const port = 3000;
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;
 
// if (cluster.isMaster) {
//     const num = 3;
//     for (let i = 0; i < num; i++) {
//         console.log('I am a master');
//         cluster.fork();
//     }
// } else {
//     console.log('I am a worker');
// }


if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
      cluster.fork();
  }
 
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);
 
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
 
  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;
 
    if (n > 5000000000) n = 5000000000;
 
        for (let i = 0; i <= n; i++) {
            count += i;
        }
        res.send(`Final Sum of the count is ${count}`);
    });
 
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

