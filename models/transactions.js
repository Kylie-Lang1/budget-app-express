const crypto = require("crypto")

module.exports = [
    {
        id: crypto.randomUUID(),
        item_name: "savings",
        amount: 500,
        action: "deposit",
        date: "2023-01-01T05:00:00.000Z",
        date_formatted: "1/1/23",
        from: "bank",
        category: "savings"
    }
]