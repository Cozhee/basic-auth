const base64 = require("base-64");
const bcrypt = require("bcrypt");
const {User} = require("../../models");

async function basicAuth(req, res, next) {
    let { authorization } = req.headers
    if (!authorization) {
        res.status(401).send('Not Authorized')
    }
    let basicHeaderParts = authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password

    try {
        const user = await User.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.user = user
            next()
        }
        else {
            throw new Error('Invalid User');
        }
    } catch (error) { res.status(403).send('Invalid Login'); }
}

module.exports = basicAuth