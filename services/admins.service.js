class AdminsService {

    //Liste des administrateurs de l'hôtel
    admins = [{
            id: 1,
            nom: 'Dupont',
            prenom: 'Jean',
            Fonction: 'Administrateur'
        },
        {
            id: 2,
            nom: 'Martin',
            prenom: 'Sophie',
            Fonction: 'Administrateur'
        },
        {
            id: 3,
            nom: 'Dujardin',
            prenom: 'Pierre',
            Fonction: 'Administrateur'
        }
    ]

    //Affichage de la liste des administrateurs
    getAdmins() {
        return this.admins;
    }

    //Affichage d'un administrateur par son id
    getAdmin(id) {
        const admin = this.admins.find((admin) => admin.id === parseInt(id));
        return admin;
    }

}

export const adminService = new AdminsService();