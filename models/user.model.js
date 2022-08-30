module.exports = mongoose => {
  const User = mongoose.model(
    'user',
    new mongoose.Schema(
      {
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        password: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        },
        authority: {
          type: Number,
          default: 0
        },
      },
      { timestamps: true }
    )
  );
  return User;
};