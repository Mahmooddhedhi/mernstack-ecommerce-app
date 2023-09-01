const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        size: [
            {
                type: String,
            }
        ],
        highlights: [
            {
                type: String,
            }
        ],
        detail: {
            type: String,
            required: false
        },
        image: [
            {
                fieldname: {
                    type: String,
                },
                originalname: {
                    type: String,
                },
                encoding: {
                    type: String,
                },
                mimetype: {
                    type: String,
                },
                destination: {
                    type: String,
                },
                filename: {
                    type: String,
                },
                path: {
                    type: String,
                },
                size: {
                    type: Number,
                },
            }
        ]
    },
    {
        timestamps: true
    }
)

const Items = mongoose.model("Item", itemSchema)
module.exports = Items
