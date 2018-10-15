import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { MessageComponent } from "./components/chat/message/message.component";

const appRoutes: Routes = [{ path: "chat", component: ChatComponent }];

@NgModule({
  declarations: [AppComponent, ChatComponent, MessageComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
