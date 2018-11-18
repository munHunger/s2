import { Component, Input } from "@angular/core";

@Component({
  selector: "message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  @Input("wasSent")
  private wasSentValue: boolean = false;
  @Input()
  private body: string = "";
  @Input()
  private timestamp: number = 0;
  private wasSent(): boolean {
    return this.wasSentValue;
  }
  private getBody(): string {
    return this.body;
  }
  private getTimeStamp(): string {
    let date = new Date(this.timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
}
