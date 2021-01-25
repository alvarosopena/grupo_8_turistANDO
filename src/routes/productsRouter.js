const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsControllers' )

router.get( '/provincia' , controller.provincia ) ;
router.get( '/carrito' , controller.carrito ) ;


module.exports = router;