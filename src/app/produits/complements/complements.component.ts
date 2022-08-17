import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produits } from '../../model/produits';
import { ComplementsService } from '../../services/complements.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent implements OnInit {

  frites : Produits[] = [];
  boissons : Produits[] = [];

  constructor(private compService : ComplementsService , private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

    this.compService.getComplements().subscribe(complements =>
        {
          this.frites = complements.frites;
          this.boissons = complements.boisson;
            
        }
        )
    
  }
  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}


}
