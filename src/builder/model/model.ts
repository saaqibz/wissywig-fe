export interface Option {
  name: string;
  value: string | number;
}

export interface LessonTypeOption extends Option {
  description: string;
  icon: string;
  type: GamePlatform;
  url?: string;
}

export interface LearningMediaOption extends Option {
  type: LearningMedia;
}

export enum GamePlatform {
  VR = 'Virtual Reality',
  AR = 'Augmented Reality',
}

export enum LearningMedia {
  PICTURE = 'picture',
  VIDEO = 'video',
  SEQUENCE = 'Sequence',
}

export enum EscapeRoomActivityType {
  THROW_STATIONARY_TARGET = 'THROW_STATIONARY_TARGET',
  ARRANGE_IN_ORDER = 'ARRANGE_IN_ORDER',
  COMBINE_ITEMS = 'COMBINE_ITEMS',
  PRESS_BUTTON = 'PRESS_BUTTON',
  MOVE_TO_LOC = 'MOVE_TO_LOC',
}

export interface BuilderState {
  lessonType: string;
  escapeRoomConfigs?: EscapeRoomConfigs;
  numRooms: number;
  numFocusAreas: number;
  numActivities: number;
  roomSize: string;
  puzzleDifficulty: string;
  lessonOption: number;

  loading: boolean;
  error: string | null;
}

export interface EscapeRoomConfigs {
  learningMedia: LearningMedia[];
  activities: EscapeRoomActivityType[];
}
