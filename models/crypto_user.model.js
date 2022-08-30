module.exports = mongoose => {
  const Cryto_User = mongoose.model(
    'crypto_user',
    new mongoose.Schema(
      {
        user_id: {
          type: mongoose.Types.ObjectId,
          ref: 'User'
        },
        name: {
          type: String,
          required: true
        },
        app_name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        },
      },
      { timestamps: true }
    )
  );
  return Cryto_User;
};