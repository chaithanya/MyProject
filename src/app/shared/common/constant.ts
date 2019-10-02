import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
@Injectable()
export class Constant {
    @Inject(DOCUMENT) document: any;

    //Context
    CONTEXT_GATEWAY: string = "fact/api";

    //Base URL
    BASE_URL: string;

    //URLS
    AUTH_URL: string = this.CONTEXT_GATEWAY + '/auth';
    GET_CUSTOMERS_URL: string = this.CONTEXT_GATEWAY + '/customers';
    GET_USERS_URL: string = this.CONTEXT_GATEWAY + '/users';
    RETRIEVE_CODE_MASTER_URL: string = this.CONTEXT_GATEWAY + '/retrieveCodeMaster';
    RETRIEVE_CODE_DETAILS_URL: string = this.CONTEXT_GATEWAY + '/retrieveCodeDetails';
    FILE_UPLOAD_URL: string = this.CONTEXT_GATEWAY + '/fileupload';
    CREATE_CODE_MASTER_URL: string = this.CONTEXT_GATEWAY + '/createCodeMaster';
    
    // Error code
    ERR_CODE_TOKEN_EXPIRED: string = "401";
    ERR_CODE_TOKEN_INVALID: string = "402";
    ERR_CODE_TOKEN_RENEW_TIME_LAPSED: number = 403;

    //header attribute keys
    HEADER_ACCESS_TOKEN: string = "ACCESS_TOKEN";
    HEADER_USER_ID: string = "USER_ID";
    HEADER_DEVICE_UDID: string = "DEVICE_UDID";
    HEADER_TXN_ID: string = "TXN_ID";

    //Http Status code
    HTTP_STATUS_401: number = 401;

    //String values
    STR_TRUE: string = "true";
    STR_FALSE: string = "false";

    BRWSER_VERSION: string;
    BROWSER_NAME: string;

    constructor(@Inject(DOCUMENT) document: any) {
        this.BASE_URL = environment.wsUrl;
        this.BRWSER_VERSION = window.navigator.appVersion;
        this.BROWSER_NAME = window.navigator.appCodeName;

    }

}