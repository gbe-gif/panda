export interface Trait {
  label: string;
  description: string;
}

export interface FamilyMember {
  name: string;
  role: string;
  species: string;
  age: number;
  description: string;
  traits: string[];
}

export enum SectionId {
  HOME = 'home',
  PROFILE = 'profile',
  WORLD = 'world',
  STORY = 'story',
  SECRET = 'secret',
}