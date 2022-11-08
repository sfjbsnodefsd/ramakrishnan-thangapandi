const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bank_details = new Schema({
    bank_name: String,
    account_number: Number,
    public_or_private: String
});
const PensionSchema = new Schema({
    pensioners: [{
        name: String,
        date_of_birth: Date,
        PAN: String,
        salary_earned: Number,
        allowances: Number,
        self_family_pension: String,
        aadhaar: Number,
        pension_amount: Number,
        bank_detail: bank_details
    }],
});

module.exports = Pension = mongoose.model("process", PensionSchema);