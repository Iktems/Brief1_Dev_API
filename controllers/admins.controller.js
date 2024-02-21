import {
    adminService
} from "../services/admins.service.js";

import {
    adminClientService
} from "../services/adminClient.service.js";

class AdminsController {

    // Liste des administrateurs de l'hôtel
    resAdmins() {
        return (req, res) => {
            const AdminsFromService = adminService.getAdmins();
            res.send(AdminsFromService);
        }
    }

    // Affichage d'un administrateur par son id
    findAdminById() {
        return (req, res) => {
            const admin = adminService.getAdmin(req.params.id);
            res.send(admin);
        }
    }

    // Liste des clients de l'hôtel
    listClients() {
        return (req, res) => {
            const clients = adminClientService.getClients();
            res.send(clients);
        }
    }

    // Affichage d'un client par son id
    findClientById() {
        return (req, res) => {
            const client = adminClientService.getClient(req.params.id);
            res.send(client);
        }
    }

    // Ajouter un client
    addClients() {
        return (req, res) => {
            const clients = adminClientService.addClient();
            res.send(clients);
        }
    }

    // Modifier un client
    upDateClients() {
        return (req, res) => {
            const clients = adminClientService.upDateClient();
            res.send(clients);
        }
    }

    //Réserver une chambre pour un client

}
export const adminsController = new AdminsController();