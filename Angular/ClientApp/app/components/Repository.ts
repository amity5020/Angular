import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Repository {
    modalRef: BsModalRef;
    constructor(private http: Http,
        private modalService: BsModalService) { }
    public async GetAsyn(Url: string) {

        return await this.http.get(Url, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    public async PostAsyn1(Url: string, Model: any) {
        return await this.http.post(Url, Model, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    public async PostAsyn(Url: string, Model: any) {
        return await this.http.post(Url, Model, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    public async PutAsyn(Url: string, Model: any) {
        return await this.http.put(Url, Model, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    public async PutAsyn1(Url: string, Model: any) {
        return await this.http.put(Url, Model, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    public async DeleteAsyn(Url: string) {
        return await this.http.delete(Url, this.GetHttpHeader())
            .toPromise().then(response => response.json())
            .catch(error => { this.handleError(error); });
    }
    private handleError(error: any) {
       
        if (error.status === 0) {
            this.modalRef = this.modalService.show(ModalContentComponent);
        }
        if (error.status === 401) {
            SignOutComponent.ErrorCode = 401;
            this.modalRef = this.modalService.show(SignOutComponent, { ignoreBackdropClick: true });
        }

        if (error.status === 410) {
            SignOutComponent.ErrorCode = 410;
            this.modalRef = this.modalService.show(SignOutComponent, { ignoreBackdropClick: true });
        }
    }
    private handleError1(error: any) {

        if (error.status === 0) {
            this.modalRef = this.modalService.show(ModalContentComponent);
        }
        if (error.status === 401) {
            SignOutComponent.ErrorCode = 401;
            this.modalRef = this.modalService.show(SignOutComponent, { ignoreBackdropClick: true });
        }

        if (error.status === 410) {
            SignOutComponent.ErrorCode = 410;
            this.modalRef = this.modalService.show(SignOutComponent, { ignoreBackdropClick: true });
        }
    }

    private GetHttpHeader(): RequestOptions {
        const headers = new Headers({
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        });
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({ headers: headers });
    }

}

@Component({
    selector: 'modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">There is network problem. Please refresh.</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide();false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-footer">
      <button type="button" class="getStart-button line blue" (click)="reload();false">Ok</button>
    </div>
  `
})
export class ModalContentComponent {
    constructor(public bsModalRef: BsModalRef) { }
    reload() { location.reload() }
}

@Component({
    selector: 'modal-content',
    template: `
   <div class="modal-header text-center">
        <h4 *ngIf="errorCode ==410" class="modal-title pull-left">Password reset successfully. For security purposes, this application requires you to sign in again.</h4>
        <h4 *ngIf="errorCode ==401" class="modal-title pull-left">For security purposes, this application requires you to sign in again.</h4>
    </div>
    <div class="modal-body text-center">
        <div class="clearfix">
            <a href="Account/SignOut" title="Ok"
               class="getStart-button line blue">Ok</a>
        </div>
    </div>
  `
})
export class SignOutComponent {
    errorCode: number;
    static ErrorCode = 0;
    constructor(public bsModalRef: BsModalRef) {
        this.errorCode = SignOutComponent.ErrorCode;
    }

}
