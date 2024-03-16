const express = require( 'express' );
const router = express.Router();
const sinhvien = require( '../models/SinhVienModel' );
router.get( '/', async ( req, res ) =>
{
    try
    {
        const sinhviens = await sinhvien.find();
        res.render( 'sinhviens', { sinhviens: sinhviens } );
        console.log( sinhviens );
    } catch ( error )
    {
        console.log( error );
        res.json( { error: error } )
    }
} );
//post (new sinh vien)
router.post( '/sinhvien', async ( req, res ) =>
{
    try
    {
        const { id, name } = req.body;
        const sinhvien1 = new sinhvien( { id, name } );
        await sinhvien1.save();
        res.json( sinhvien1 );

    } catch ( error )
    {
        console.log( error );
        res.json( { error: error } )
    }
} )

//put update 
router.put( '/:_id', async ( req, res ) =>
{
    try
    {
        const { id, name } = req.body;
        const updateSinhvien = await sinhvien.findByIdAndUpdate( _id, { id, name }, { new: true } );
        res.json( updateSinhvien );
        console.log( updateSinhvien );
    } catch ( error )
    {
        console.log( error );
        res.json( { error: error } )
    }
} )

//delete
router.delete( '/:_id', async ( req, res ) =>
{
    try
    {
        const deleteSinhvien = await sinhvien.findByIdAndDelete( _id );
        res.json( deleteSinhvien );
        console.log( deleteSinhvien );
    } catch ( error )
    {
        console.log( error );
        res.json( { error: error } )
    }
} )



module.exports = router;