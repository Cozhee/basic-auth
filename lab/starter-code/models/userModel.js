const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        hooks: {
            beforeCreate: async(user, options) => {
                user.password = await bcrypt.hash(user.password, 5)
            }
        }
    });
}