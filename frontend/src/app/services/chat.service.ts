import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { Chat } from "../models/chat.model";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ChatService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public getChat(): Observable<Chat> {
    return this.http.get<Chat>(this.getBaseUrl() + "/chat").pipe(
      map((data: Chat) => {
        return data;
      }),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }
}
