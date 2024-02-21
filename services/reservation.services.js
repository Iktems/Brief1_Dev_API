import {
    roomService
} from "../services/rooms.service.js";
import {
    adminClientService
} from "../services/adminClient.service.js";

class ReservationService {
    // Méthode pour ajouter une réservation
    addReservation(clientId, roomId) {
        const client = adminClientService.getClient(clientId);
        const room = roomService.getRoomById(roomId);
        if (client && room) {
            return `La chambre ${roomId} a bien été réservée par ${clientId}`;
        } else {
            return "La chambre ou le client n'existe pas";
        }
    }

    // Méthode pour supprimer une réservation
    deleteReservation(clientId, roomId) {
        const client = adminClientService.getClient(clientId);
        const room = roomService.getRoomById(roomId);
        if (client && room) {
            return `La chambre ${roomId} a bien été libérée par ${clientId}`;
        } else {
            return "La chambre ou le client n'existe pas";
        }
    }
}


export const adminReservationService = new ReservationService();