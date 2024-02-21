import {
    adminReservationService
} from "../services/reservation.services.js";

class ReservationController {
    // Méthode pour réserver une chambre
    addReservation() {
        return (req, res) => {
            const clientId = req.params.clientId;
            const roomId = req.params.roomId;
            const message = adminReservationService.addReservation(clientId, roomId);
            res.status(200).send(message);
        }
    }


    // Méthode pour supprimer une réservation
    deleteReservation() {
        return (req, res) => {
            const clientId = req.params.clientId;
            const roomId = req.params.roomId;
            const message = adminReservationService.deleteReservation(clientId, roomId);
            res.status(200).send(message);
        }
    }
}

export const reservationController = new ReservationController();