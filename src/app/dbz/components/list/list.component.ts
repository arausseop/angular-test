import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  deleteCharacter($characterId?: string): void {
    if (!$characterId) return;
    this.onDeleteCharacterEmitter.emit($characterId);
  }
}
