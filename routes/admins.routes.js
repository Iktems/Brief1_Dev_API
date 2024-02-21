import express from "express";
import {
    adminsController
} from "../controllers/admins.controller.js";
import {
    adminService
} from "../services/admins.service.js";
import {
    adminClientService
} from "../services/adminClient.service.js";
import {
    roomController
} from "../controllers/rooms.controller.js";
import {
    roomService
} from "../services/rooms.service.js";
import {
    reservationController
} from "../controllers/reservation.controller.js";


export const router = express.Router();

//Liste des administrateurs de l'hôtel
router.get("", adminsController.resAdmins());

//Liste des clients de l'hôtel
router.get("/clients", adminsController.listClients());

//Ajouter un client
router.post("/add", adminsController.addClients());
// A titre indicatif, pour l'ajout'd'un client :
router.get("/add", (req, res) => {
    res.status(200).send("Le client a bien été ajouté")
});

// Message à titre informatif pour la réservation d'une chambre
router.get("/reservation", (req, res) => {
    res.status(200).send("Veuillez indiquer l'id utilisateur et l'id de la chambre pour lui réserver cette chambre");
});

//Modifier un client
router.put("/update", adminsController.upDateClients());
// A titre indicatif, pour la modification d'un client :
router.get("/update", (req, res) => {
    res.status(200).send("Les informations du client ont bien été modifiées")
});

//Liste des chambres de l'hôtel
router.get("/rooms", roomController.listRooms());

// Information sur une chambre
router.get("/rooms/:id", (req, res, next) => {
    if (roomService.getRoomById(req.params.id)) {
        next();
    } else {
        res.status(403).send("La chambre n'existe pas");
    }
}, roomController.findRoomById());

// Information sur un clients
router.get("/clients/:id", (req, res, next) => {
    if (adminClientService.getClient(req.params.id)) {
        next();
    } else {
        res.status(403).send("Le client n'existe pas");
    }
}, adminsController.findClientById());

// Réserver une chambre pour un client via le panel users
router.post("/reservation/:clientId/:roomId", reservationController.addReservation());
// A titre indicatif, pour la réservation d'une chambre :
router.get("/reservation/:clientId/:roomId", (req, res) => {
    res.status(200).send("La chambre " + req.params.roomId + " , réservée par " + req.params.clientId + " , a bien été confirmée par un administrateur!")
});

// Supprimer une réservation via le panel users
router.delete("/reservation/:clientId/:roomId", reservationController.deleteReservation());
// A titre indicatif, pour l'annulation d'une chambre :
router.get("/reservation/:clientId/:roomId", (req, res) => {
    res.status(200).send("La chambre" + req.params.roomId + ", réservée par" + req.params.clientId + "a bien été supprimée par un administrateur !")
});

// Information sur un administrateur
router.get("/:id", (req, res, next) => {
    if (adminService.getAdmin(req.params.id)) {
        next();
    } else {
        res.status(403).send("L'administrateur n'existe pas");
    }
}, adminsController.findAdminById());