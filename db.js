const mongoose =require ('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', {
    userNewUrlparser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'mongoDB connection error:'));
db.once('open',()=>{
    console.log('connect to mogoDB');
});