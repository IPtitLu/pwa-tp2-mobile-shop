import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://lucas:lucas@tp-mobile-1.lvf8riu.mongodb.net/pwa-mobile?retryWrites=true&w=majority")
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))