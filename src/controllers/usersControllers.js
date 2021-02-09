const fs = require('fs');
const path = require('path');


const jsonTable = {
    filePath: path.join(__dirname, '../database/users.json'),
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
           return rows.find(user => user.id == id);
        }   };
         


















module.exports = {
    login:(req, res)  =>  {
        res.render ( 'users/login',{ 
        } )},
    register:(req, res) => {
        res.render ("users/register", {

        })
    }}


