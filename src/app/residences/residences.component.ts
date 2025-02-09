import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';



@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
 
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  
  searchTerm: string = '';

  
  get filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  
  toggleAddress(index: number): void {
    const residence = this.listResidences[index];
    if (residence.address === 'inconnu') {
      alert(`L'adresse de la résidence ${residence.name} est inconnue.`);
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

 
  addToFavorites(residence: Residence): void {
    alert(`${residence.name} ajouté aux favoris.`);
  }
}
