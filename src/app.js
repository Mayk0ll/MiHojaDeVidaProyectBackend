import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import handlebars from 'express-handlebars';

import config from './utils/config.js';
import viewsRoutes from './routes/views.routes.js';
import educationRoutes from './routes/education.routes.js';
import certificateRoutes from './routes/certificates.routes.js';
import experienceRouter from './routes/experience.routes.js';
import { connection } from './dbconfig/DBconnect.js';

const app = express();
const port = process.env.PORT || 9605;
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', `${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');

app.use('/views', viewsRoutes);
app.use('/educationRoutes', educationRoutes);
app.use('/certificateRoutes', certificateRoutes);
app.use('/experienceRouter', experienceRouter);

app.get('**', (req, res) => {
    res.redirect('/views/profile');
});


connection();

app.listen( process.env.PORT, () => console.log(`Server is running on port ${port}`));
