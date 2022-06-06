import { Component, Input } from "@angular/core";

@Component({
    selector: 'ec-cliente',
    templateUrl: 'cliente.component.html'
})
export class ClienteComponent {
    @Input() id='';
    @Input() nome='';
    @Input() cpf='';
    @Input() telefone='';
    @Input() local='';
    @Input() renda='';
    @Input() status='';

}