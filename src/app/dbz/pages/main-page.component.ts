import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private characterService: CharacterService) {}

  get characters(): Character[] {
    return [...this.characterService.characters];
  }

  ondeleteCharacter($characterId: string): void {
    this.characterService.deleteCharacterById($characterId);
  }

  onCreateCharacter($character: Character): void {
    this.characterService.createCharacter($character);
  }
}
