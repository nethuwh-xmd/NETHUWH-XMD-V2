const GroupAccess = require('../models/groupAccess');

async function addGroup(id) {
  if (!await GroupAccess.exists({ groupId: id })) {
    await GroupAccess.create({ groupId: id });
  }
}

async function removeGroup(id) {
  await GroupAccess.deleteOne({ groupId: id });
}

async function isAllowed(id) {
  return await GroupAccess.exists({ groupId: id });
}

async function getAllowedGroups() {
  const groups = await GroupAccess.find();
  return groups.map(g => g.groupId);
}

module.exports = {
  addGroup,
  removeGroup,
  isAllowed,
  getAllowedGroups
};
