import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { MessageComponent } from "./components/chat/message/message.component";
import { ChatService } from "./services/chat.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ClassComponent } from "./components/class/class.component";

const appRoutes: Routes = [
  { path: "chat", component: ChatComponent },
  { path: "class", component: ClassComponent }
];

@NgModule({
  declarations: [AppComponent, ClassComponent, ChatComponent, MessageComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
