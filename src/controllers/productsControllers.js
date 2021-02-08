const fs = require('fs');
const path = require('path');


const jsonTable = {
    filePath: path.join(__dirname, '../database/products.json'),
    readFile() {
        let rows = fs.readFileSync(this.filePath, 'utf-8');
        rows = JSON.parse(rows);
        return rows;
    } ,

    writeFile(contents) {
        let contentsJson = JSON.stringify(contents, null, ' ');
        fs.writeFileSync(this.filePath, contentsJson)
    },

    nextId() {   
        let rows = this.readFile(); 
        let lastRow = rows.pop()
        if (lastRow) {
            return lastRow.id + 1;
        }
        return 1;
    },
    

    all() {
        return this.readFile();
    },
    create(row) {
        let rows = this.readFile();
        row.id = this.nextId();
        rows.push(row);
        this.writeFile(rows);
        return row.id;
    },
    

    update(row) {
        let rows = this.readFile();
        let updatedRows = rows.map(oneRow => {
            if (oneRow.id == row.id) {
                return row;
            } else {
                return oneRow;
            }
        
        });
        this.writeFile(updatedRows);

        return row.id;
    
        },
        delete(id) {
            let rows = this.readFile();
            let updatedRows = rows.filter(oneRow => oneRow.id != id); 
            this.writeFile(updatedRows);
        },


        findById(id) {
            let rows = this.readFile();
           return rows.find(products => products.id == id);
        }   };
         




















































module.exports = {
    provincia:(req, res)  =>  {
        res.render ( 'products/provincia1',{ 
        } )},
    carrito:(req, res) => {
        res.render ("products/carrito", {

        })
    },


    //desde aca lo nuevo//


        index: (req, res) => {
            let products = jsonTable.all()
    
            res.render('products/index', { 
                title: 'Listado de products', 
                products       
            });
        },
        create: (req, res) => {
            res.render('products/create');
        },
        store: (req, res) => {
            //  nuevo productos
            let products = req.body;
            
            let productsId = jsonTable.create(products);
            
            res.redirect('/products/' + productsId);
        },
        show: (req, res) => {
            let products = jsonTable.findById(req.params.id);
    
            if ( products ) {
                res.render('products/detail', { products });
            } else {
                res.send('No encontré el producto seleccionado');
            }
        },
        edit: (req, res) => {
            let uproducts = jsonTable.findById(req.params.id);
    
            res.render('products/edit', { products });
        },
        update: (req, res) => {
            let products = req.body;
            user.id = Number(req.params.id);
    
            let productsId = jsonTable.update(products);
    
            res.redirect('/products/' + productsId);
        },
        destroy: (req, res) => {
            let products = jsonTable.all()
    
            jsonTable.delete(id);
    
            res.redirect('/products');
        }
    }
