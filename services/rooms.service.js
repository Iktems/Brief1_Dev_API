import fs from 'fs';
const path = 'assets/hotel.json';

class RoomsService {

    //Affichage de la liste des chambres
    getRooms() {
        const data = fs.readFileSync(path, 'utf8');
        const rooms = JSON.parse(data).rooms;
        return rooms;
    }

    //Affichage d'une chambre par son id
    getRoomById(id) {
        const room = this.getRooms().find((room) => room.id == parseInt(id));
        return room;
    }

}

export const roomService = new RoomsService();