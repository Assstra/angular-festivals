import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalsListComponent } from './components/festival/festivals-list/festivals-list.component';
import { FestivalDetailsComponent } from './components/festival/festival-details/festival-details.component';
import { MessageComponent } from './components/shared/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RootComponent } from './root/root.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FestivalCreationComponent } from './components/festival/festival-creation/festival-creation.component';
import { FestivalEditeursComponent } from './components/editors/festival-editeurs/festival-editeurs.component';
import { FestivalJeuxComponent } from './components/games/festival-jeux/festival-jeux.component';
import { FestivalEditeursDetailsComponent } from './components/editors/festival-editeurs-details/festival-editeurs-details.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FestivalsListComponent,
    FestivalDetailsComponent,
    MessageComponent,
    NotFoundComponent,
    RootComponent,
    FestivalCreationComponent,
    FestivalEditeursComponent,
    FestivalJeuxComponent,
    FestivalEditeursDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'festivals/create', component: FestivalCreationComponent },
      { path: 'festival/:festivalId', component: FestivalDetailsComponent },
      { path: 'App', component: AppComponent },
      { path: 'editors', component: FestivalEditeursComponent },
      { path: 'editor/:editorId', component: FestivalEditeursDetailsComponent },
      { path: 'games', component: FestivalJeuxComponent },
      { path: '', redirectTo: '/App', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // Material UI Modules
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
