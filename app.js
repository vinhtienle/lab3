const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );
const SinhvienRoute = require( './routes/SinhVienroutes' );


const app = express();

mongoose.connect( 'mongodb+srv://vinhdvph35610:daovanvinh@cluster0.ztfpwzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).then( () =>
{
    console.log( "ket noi thanh cong voi server " )
} ).catch( ( err ) =>
{
    console.log( err )
} );
// su dung route
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( express.json() );
app.use( './', SinhvienRoute );

app.set( 'view engine', 'ejs' );

const PORT = process.env.PORT || 5000;

app.listen( PORT, () =>
{
    console.log( "server dang chay o cong 5000" );
} );

