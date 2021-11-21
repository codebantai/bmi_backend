module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        name: {
            type: Sequelize.STRING
        },
    });
    User.associate = ({ UserDetails }) => {
        User.hasMany(UserDetails)
    }

    return User;
};