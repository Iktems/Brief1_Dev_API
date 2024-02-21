import {
    infoService
} from "../services/hotel.service.js";

class HotelController {

    //Affichage des informations de l'hotel
    resInfosHotel() {
        return (req, res) => {
            const infos = infoService.getInfos();
            res.send(infos);
        }
    }

}
export const hotelController = new HotelController();