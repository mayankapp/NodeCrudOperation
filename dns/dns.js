// This Module is used to get the IP address and Web address of the server
const dns = require('dns');


// Lookup Method return the IP and web address of the server
dns.lookup('stagingbz.com', (err, address, family) => {
    console.log(`Address of the server: ${address}`);
    console.log(`Family log: ${family}`);
})

// getServers method returns an array of servers
const server = dns.getServers('google.com')
console.log("get Server method : " + server);

// resolve method returns an array of record types belonging to the specified hostname
const resolve = dns.resolve('google.com', (err, resolve) => {
    console.log(`Resolve Method : ${resolve}`);
})