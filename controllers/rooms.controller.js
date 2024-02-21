import {
    roomService
} from "../services/rooms.service.js";

class RoomsController {

    //Affichage de la liste des chambres
    listRooms() {
        return (req, res) => {
            const rooms = roomService.getRooms();
            res.send(rooms);
        }
    }

    //Affichage d'une chambre par son id
    findRoomById() {
        return (req, res) => {
            const room = roomService.getRoomById(req.params.id);
            res.send(room);
        }
    }

}
export const roomController = new RoomsController();