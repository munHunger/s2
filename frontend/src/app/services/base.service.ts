import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseService {
  protected getBaseUrl(): String {
    return "http://mock";
  }

  handleError(error: Response | any) {
    let errMsg: string;
    errMsg = `${error.status} - ${error.statusText || ""}`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
