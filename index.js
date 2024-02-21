import express from "express";
import {
    router as usersRoutes
} from './routes/clients.routes.js'
import {
    router as adminsRoutes
} from './routes/admins.routes.js'
import {
    router as hotelRoutes
} from './routes/infosHotel.routes.js'

const app = express();
const port = 3000;

app.use("/clients", usersRoutes);
app.use("/admins", adminsRoutes);
app.use("/", hotelRoutes);
app.use("/hotel", hotelRoutes);
app.use("/reservation", hotelRoutes);

app.listen(port, () => {
    console.log(`App, started, listening to port ${port}`);
})

//PUT = pour modification, update
//POST = envoie de donné, ajouter des données à la db
//DELETE = la suppression
//PATCH = modification partiellement
//GET = pour récupérer