export interface Option {
  name: string;
  value: string | number;
}

export interface LessonTypeOption extends Option {
  type: GamePlatform;
}

export enum GamePlatform {
  VR = 'Virtual Reality',
  AR = 'Augmented Reality',
}
