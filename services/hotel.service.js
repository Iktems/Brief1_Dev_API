import fs from 'fs';
const path = 'assets/hotel.json';

class InfosService {

    //Affichage des informations de l'hotel
    getInfos() {
        const data = fs.readFileSync(path, 'utf8');
        const infos = JSON.parse(data);
        delete infos.rooms;
        return infos;
    }
}

export const infoService = new InfosService();