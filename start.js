// start.js
require('bytenode');

try {
    require('./Noirlegacy.jsc'); // Pastikan nama ini sesuai dengan file .jsc kamu
} catch (err) {
    console.error("\n[!] SCRIPT TERMINATED DUE TO ERROR:");
    console.error("Error Message: " + err.message);
    console.error("Please ensure the .jsc file exists and that you are using the correct Node.js version.");
    process.exit(1);
}
