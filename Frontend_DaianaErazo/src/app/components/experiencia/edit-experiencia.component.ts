import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Experiencia } from "src/app/model/experiencia";
import { SExperienciaService } from "src/app/service/s-Experiencia.service";

@Component({
    selector: 'app-edit-experiencia',
    templateUrl: './edit-experiencia.component.html',
    styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
    experLabo : Experiencia = null;

    constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, 
        private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id']; 
        this.sExperiencia.detail(id).subscribe(
         data =>{
            this.experLabo = data;
         }, err =>{
            alert("Error al modificar experiencia");
            this.router.navigate(['']);
         }
        )   
    }
    onUpdate(): void{
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperiencia.update(id, this.experLabo).subscribe(
            data =>{
                this.router.navigate(['']); 
            }, err =>{
                alert("Error al modificar experiencia");
                this.router.navigate(['']);
            }
        )
    }
}