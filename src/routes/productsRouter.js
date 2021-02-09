const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsControllers' )

router.get( '/provincia' , controller.provincia ) ;
router.get( '/carrito' , controller.carrito ) ;


//rutas estimativas//

router.get('/', controller.provincia);
router.get('/create', controller.create);
router.get('/:id', controller.show); //ver//
router.post('/', controller.store);//ver//
router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);






module.exports = router;