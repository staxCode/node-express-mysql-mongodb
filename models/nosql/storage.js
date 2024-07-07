const { Schema, model } = require("mongoose");

const StorageSchema = new Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
        },
    },
    {
        timestamps: true, //created_at y updated_at
        versionKey: false,
    }
);

module.exports = model("storages", StorageSchema);
