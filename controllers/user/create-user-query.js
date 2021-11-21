const { User, UserDetails } = require('../../models')
const CreateUser = async (name, height, weight) => {
    const user = await User.findOrCreate({
        where: {
            name: name
        },
        defaults: {
            name: name
        }
    }).catch(err => console.log(err));

    await UserDetails.create({
        height: height,
        weight: weight,
        bmi: 1,
        user_id: user[0].id
    }).catch(err => console.log(err));
    return user
}
module.exports = CreateUser
