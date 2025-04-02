import pkg from "pg"
import pg from "pg"
const {Pool} = pkg


const types = pg.types
types.setTypeParser(1114, (stringValue) => stringValue)

const revision = new Pool({
    database: 'revision',
    user: 'postgres', 
    password: '7698',  
    host: 'localhost',
    port: 5432
})


export {revision}