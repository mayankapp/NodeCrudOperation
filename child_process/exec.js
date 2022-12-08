const { exec } = require('child_process');

exec('start chrome youtube.com', (err, stdout, stderr) => {
    if (err) console.log(`Error is : ${err.message}`);
    if (stderr) console.log(`StdErr is : ${stderr}`);
    console.log("Everthing execute Successfully!!");
});