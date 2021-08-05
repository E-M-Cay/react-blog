const mongoose = require('mongoose');

async function dbconnexion() {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNEXION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    mongoose.connection.on('error', (erro) => {
      console.log(err.message);
    });
    console.log('Mongoose connected !!');
  } catch (e) {
    console.log(e.message);

    process.exit(1);
  }
}

module.exports = dbconnexion;
