const mongoose=require('mongoose');

const mydb = process.env.DATABASE.replace('<l0Jtw2X5fW9IB873>',process.env.DATABASE_PASSWORD);

mongoose
    .connect(mydb,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true
    })
    .then(() => console.log('DB connection succesful!'))
    .catch((error) => console.error('Error connecting to DB:',erroe.message));

module.export = mongoose;   // optionally export the mongoose instance for reuse in other parts