const crypto = require("crypto")

module.exports = {
    generateSalt: function () {
        return crypto.randomBytes(128).toString("base64")
    },
    generateHashedPassword: function (salt, pwd) {
        let hmac = crypto.createHmac("sha1", salt)
        return hmac.update(pwd).digest("hex")
    },
    encrypt: function(text, key) {
        let cipher = crypto.createCipher("aes256", key);
        let encryptedData = cipher.update(text, "binary", "hex");
        return (encryptedData + cipher.final("hex"));
    },
    decrypt: function(cipher, key) {
        let decipher = crypto.createDecipher("aes256", key);
        let decryptedData = decipher.update(cipher, "hex", "binary");
        return (decryptedData + decipher.final("binary"));
    }
};



// const crypto = require('crypto')
// const algorithm = 'aes-256-cbc'
// const key = crypto.randomBytes(32)
// const iv = crypto.randomBytes(16)

// module.exports.encrypt = text => {
//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
//     let encrypted = Buffer.concat([cipher.update(text), cipher.final()])

//     return {
//         iv: iv.toString('hex'),
//         encryptedData: encrypted.toString('hex')
//     }
// }

// module.exports.decrypt = (encryptedData, secret) => {
//     let secretKey = Buffer.from(secret, 'hex')
//     let encryptedText = Buffer.from(encryptedData, 'hex')
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), secretKey)
//     let decrypted = decipher.update(encryptedText)

//     console.log('Decrypted: '+ Buffer.concat([decrypted, decipher.final()]).toString())

//     return Buffer.concat([decrypted, decipher.final()]).toString()
// }