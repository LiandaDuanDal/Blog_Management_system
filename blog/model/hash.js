// demo of password encryption

const bcrypt = require('bcrypt');

async function run() {
    const salt = await bcrypt.genSalt(10);
    console.log("salt------>", salt);
    const plain_text = "12345678";
    console.log("plain_text---->", plain_text);
    const encryptPassword = await bcrypt.hash(plain_text, salt);
    console.log("加密之后--->", encryptPassword)
}

run();