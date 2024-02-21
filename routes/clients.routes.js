import express from "express";

import {
    hotelController
} from "../controllers/infosHotel.controller.js";
import {
    roomService
} from "../services/rooms.service.js";

import {
    roomController
} from "../controllers/rooms.controller.js";

import {
    reservationController
} from "../controllers/reservation.controller.js";

export const router = express.Router();

// Message de bienvenue
router.get("", (req, res) => {
    res.status(200).send("Bienvenue sur le panel utilisateur");
});

// Message à titre informatif pour la réservation d'une chambre
router.get("/reservation", (req, res) => {
    res.status(200).send("Veuillez indiquer votre id utilisateur et l'id de la chambre pour réserver");
});

// Affichage des informations de l'hotel via le panel users
router.get("/hotel", hotelController.resInfosHotel());

// Lister toutes les chambres de l'hotel via le panel users
router.get("/rooms", roomController.listRooms());

// Affichage d'une chambre par son id via le panel users
router.get("/rooms/:id", (req, res, next) => {
    if (roomService.getRoomById(req.params.id)) {
        next();
    } else {
        res.status(403).send("La chambre n'existe pas");
    }
}, roomController.findRoomById());

// Réserver une chambre pour un client via le panel users
router.post("/reservation/:clientId/:roomId", reservationController.addReservation());
// A titre indicatif, pour la réservation d'une chambre :
router.get("/reservation/:clientId/:roomId", (req, res) => {
    if (req.params.clientId && req.params.roomId) {
        res.status(200).send("La chambre " + req.params.roomId + " a bien été réservée par " + req.params.clientId + "!")
    } else {
        res.status(403).send("La chambre ou le client n'existe pas");
    }
});

// Supprimer une réservation via le panel users
router.delete("/reservation/:clientId/:roomId", reservationController.deleteReservation());
// A titre indicatif, pour l'annulation d'une chambre :
router.get("/reservation/:clientId/:roomId", (req, res) => {
    if (req.params.clientId && req.params.roomId) {
        res.status(200).send("La chambre " + req.params.roomId + " a bien été annulée par " + req.params.clientId + "!")
    } else {
        res.status(403).send("La chambre ou le client n'existe pas");
    }
});