const crypto = require("crypto")

module.exports = [
    {
        id: crypto.randomUUID(),
        item_name: "savings",
        amount: 500,
        date: "01/01/23",
        from: "bank",
        category: "savings"
    }
]