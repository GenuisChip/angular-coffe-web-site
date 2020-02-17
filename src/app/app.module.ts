
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurProcessComponent } from './pages/our-coffee/our-process/our-process.component';
import { TheBlendsComponent } from './pages/our-coffee/the-blends/the-blends.component';
import { TheFlavorsComponent } from './pages/our-coffee/the-flavors/the-flavors.component';
import { HowToBrewComponent } from './pages/our-coffee/how-to-brew/how-to-brew.component';
import { SubscriptionComponent } from './pages/our-coffee/subscription/subscription.component';
import { OurStoryComponent } from './pages/meet-us/our-story/our-story.component';
import { OurBlogComponent } from './pages/meet-us/our-blog/our-blog.component';
import { ProjectWaterfallComponent } from './pages/meet-us/project-waterfall/project-waterfall.component';
import { TalkToUsComponent } from './pages/meet-us/talk-to-us/talk-to-us.component';
import { LoginComponent } from './pages/login/login/login.component';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    OurProcessComponent,
    TheBlendsComponent,
    TheFlavorsComponent,
    HowToBrewComponent,
    SubscriptionComponent,
    OurStoryComponent,
    OurBlogComponent,
    ProjectWaterfallComponent,
    TalkToUsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
