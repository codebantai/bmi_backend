module.exports = (sequelize, Sequelize) => {
    const UserDetails = sequelize.define("UserDetails", {
        user_id: {
            type: Sequelize.INTEGER
        },
        height: {
            type: Sequelize.DOUBLE
        },
        weight: {
            type: Sequelize.DOUBLE
        },
        bmi: {
            type: Sequelize.DOUBLE
        }
    });
    UserDetails.associate = ({ User }) => {
        UserDetails.belongsTo(User, { foreignKey: 'user_id' })
    }

    return UserDetails;
};