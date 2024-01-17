const Types = require('./types');
const Media = require('./media');
const User = require('./User');

Media.belongsTo(Types, { foreignKey: 'type_id'});
Media.belongsTo(User, { foreignKey: 'user_id'});
User.hasMany(Media, { foreignKey: 'user_id'});
Types.hasMany(Media, { foreignKey: 'type_id'})

module.exports = { User, Types, Media };