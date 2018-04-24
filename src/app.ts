import { inject } from 'aurelia-dependency-injection';
import { MdToastService, MdModal } from "aurelia-materialize-bridge";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

@inject(MdToastService)
export class App {
  toastService: MdToastService;
  modal: MdModal;
  toast: any;
  message = 'Hello World!';

  constructor(ts) {
    this.toastService = ts;
  }

  showToast() {
    this.toastService.show(this.message, 2000);
  }

  agree(e) {
    this.toastService.show("You agreed!", 4000);
  }

  disagree(e) {
    this.toastService.show("You disagreed!", 4000);
  }

  openModal() {
    this.modal.open();
  }
}
