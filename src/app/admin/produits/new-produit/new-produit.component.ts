import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { LivraisonService } from 'src/app/services/livraison.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {

  
  typeProduit: string='';
  swal : any;
    imageSrc!: string;
    myForm = new FormGroup({
      nom: new FormControl(),
      prix: new FormControl(),
      pathFile: new FormControl()
  });
  constructor(private serviceProduit : ProduitService, private serviceCatalogue: CatalogueService, private router: Router) { }
  ngOnInit(): void {
    // this.serviceCatalogue.getProduits().subscribe()
  }




  typeChoice(e: any){
    this.typeProduit=e.value; 
    console.log(e.value);
    //  return;  
  }

  getForm(){
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;   
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          pathFile: reader.result
        });
      };
    }
  }

  submit(){
    if (this.typeProduit!='') {
      this.serviceProduit.addProduct(this.myForm.value, this.typeProduit).subscribe()
        this.router.navigate(['/admin/produits/new'])   
    }
    else{
      this.swal.fire({
        html: 'Veuillez choisir un type',
        icon: 'error',
        timer: 2000
      })
    }
  }


}
