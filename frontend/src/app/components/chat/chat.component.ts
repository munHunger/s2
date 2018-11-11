import { Component } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { Chat } from "src/app/models/chat.model";

@Component({
  selector: "chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent {
  private chat: Chat;

  constructor(private chatService: ChatService) {
    chatService.getChat().subscribe(data => (this.chat = data));
  }
}
