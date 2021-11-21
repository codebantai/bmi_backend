const { User } = require('../../models')
const CreateUser = async (name) => {
    const user = await User.findOrCreate({
        where: {
            name: name
        },
        name: name
    })
    // console.log(user)
    // const detail = await user[0].addUserDetails({
    //     height: 1,
    //     weight: 3,
    //     bmi: 1.2,
    //     user_id: user[0].id
    // })
    return user
}
module.exports = CreateUser
