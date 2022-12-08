const Item = required("./item.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
    return Item.find().select("_id name imageUrl");
};

const findById = (id) => {
    const objectId = new ObjectId(id);
    return Item.findById(objectId);
};

const create = (item) => {
    return Item.create(item);
};
 
const update = (id, item) => {
    const objectId = new ObjectId(id);
    return Item.findByIdAndUpadate(objectId, item);
};

const deleteById = (id) => {
    const objectId = new ObjectId(id);
    return Item.findByIdAndDelete(objectId);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};