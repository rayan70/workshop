import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  // Liste des favoris
  favorites: Residence[] = [];

  // pour  rechercher par adresse
  searchAddress: string = '';

  // Méthode pour afficher l'adresse de la résidence
  showLocation(residence: Residence) {
    if (residence.address === 'inconnu') {
      alert('L\'adresse de cette résidence est inconnue.');
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  //pour ajouter une résidence aux favoris
  addToFavorites(residence: Residence) {
    this.favorites.push(residence);
    alert(`${residence.name} a été ajoutée aux favoris.`);
  }

  //pour filtrer les résidences par adresse
  get filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }
}