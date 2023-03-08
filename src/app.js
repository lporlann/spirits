import express from "express";
import morgan from "morgan";
import { dirname , join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './router/index.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views' , join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.use(indexRoutes);
app.use(express.static(join(__dirname , 'public')));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());



const port = app.listen(3000);
console.log(`Server is listening on port 3000`)


//NPM RUN DEV//