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

export enum EscapeRoomInteractionType {
  ZOOM_IN_ON_PIC = 'ZOOM_IN_ON_PIC',
  EXPANDABLE_SEQ = 'EXPANDABLE_SEQ',
  IN_ROOM_POPUP = 'IN_ROOM_POPUP',
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
  interactions: EscapeRoomInteractionType[];
  activities: EscapeRoomActivityType[];
}
