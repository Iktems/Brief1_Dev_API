import fs from 'fs';
const path = 'assets/clients.json';

class AdminsClientService {

    //Affichage de la liste des clients
    getClients() {
        const data = fs.readFileSync(path, 'utf8');
        const clients = JSON.parse(data).clients;
        return clients;
    }

    //Affichage d'un client par son id
    getClient(id) {
        const clients = this.getClients()
        const client = clients.find((client) => client.id === parseInt(id));
        return client;
    }

    //Ajout d'un client
    addClient() {
        const newClient = {
            id: 11,
            nom: "Leblanc Leonard",
            email: "leonardleblanc@example.com",
            phone: "+1-XXX-XXX-XXXX",
            statut: "Client AJOUTÉ avec succès"
        }
        return newClient;
    }

    //Modification d'un client
    upDateClient() {
        const upDateClient = {
            id: 11,
            nom: "Leblanc Leonard",
            email: "leonardleblanc@example.com",
            phone: "+1-XXX-XXX-XXXX",
            statut: "Client MODIFIÉ avec succès"
        }
        return upDateClient;
    }
}

export const adminClientService = new AdminsClientService();