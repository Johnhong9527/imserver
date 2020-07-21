import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  phone: Number,
});

export default mongoose.model('User', userSchema);
