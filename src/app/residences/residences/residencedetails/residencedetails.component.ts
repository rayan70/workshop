import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
  id!: number;
  residence!: Residence; // Stocker la résidence actuelle
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.id = +params['id']; 
      this.loadResidence();
    });
  }

  loadResidence() {
    this.residence = this.listResidences.find(res => res.id === this.id)!;
  }

  goToNextResidence() {
    let nextId = this.id + 1;
    if (nextId > this.listResidences.length) {
      nextId = 1; 
    }
    this.router.navigate(['/details', nextId]);
  }

  
}
