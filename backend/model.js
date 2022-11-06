let mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: String,
  PrimaryText: String,
  Headline: String,
  Description: String,
});
UserSchema.index({ Name: 'text', PrimaryText: 'text', Headline: 'text', Description: 'text' });
const Ads = mongoose.model("Ads2", UserSchema);

module.exports = Ads;
