import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Spiderman', power: 100, id: uuid() },
    { name: 'Ironman', power: 100, id: uuid() },
    { name: 'Hulk', power: 100, id: uuid() },
    { name: 'She Hulk', power: 100, id: uuid() }]

  addCharacter(character: Character): void {
    this.characters.push({ id: uuid(), ...character });
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }
}
