import express from "express"
import { dirname , join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './router/index.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views' , join(__dirname , 'views'))
app.set('view engine' , 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname , 'public')))





const PORT = app.listen(3000);
console.log(`Server is listening on 3000`)