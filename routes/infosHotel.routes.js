import express from "express";
import {
    hotelController
} from "../controllers/infosHotel.controller.js";

import {
    roomController
} from "../controllers/rooms.controller.js";

export const router = express.Router();

// Affichage des informations de l'hotel
router.get("", hotelController.resInfosHotel());

// Lister toutes les chambres de l'hotel
router.get("/rooms", roomController.listRooms());

// Afficher un message
router.get("/reservation", (req, res) => {
    res.status(200).send("Veuillez allez sur le panel utilisateur pour effectuer une réservation de chambre");
});