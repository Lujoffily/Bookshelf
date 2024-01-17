const sequelize = require('../config/connection');
const { User, Types, Media } = require('../models');

const userData = require('./userData.json');
const typesData = require('./datatypes.json');
const mediaData = require('./media.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    const types = await Types.bulkCreate(typesData, {
        returning: true,
    });
    const media = await Media.bulkCreate(mediaData, {
        individualHooks: true,
        returning: true,
    })
    process.exit(0)
    };

    seedDatabase()
