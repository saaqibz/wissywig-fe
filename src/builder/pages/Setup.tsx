import React, { Dispatch, useContext } from 'react';
import { Link } from 'react-router-dom';
import Block from 'react-blocks';
import styled from '@emotion/styled';
import { Button } from 'antd';
import RadioSelect from '../RadioSelect';
import { LessonTypeOption, GamePlatform, BuilderState } from '../model/model';
import { BuilderContext } from '../BuilderProvider';
import CheckboxSelect from '../CheckboxSelect';

interface Context {
  state: BuilderState;
  dispatch: Dispatch<any>;
}

function Setup(): JSX.Element {
  const ctx = useContext(BuilderContext);

  return (
    <Container layout>
      <Col>
        <SelectLessonType />
        <Link to="/content">
          <StyledButton type="primary">Next</StyledButton>
        </Link>
      </Col>
      <Col>
        <Col>Left Thing</Col>
        <Col>
          <SelectLessonType context={ctx} />
        </Col>
        <Col>
          <SelectEscapeRoomInteraction context={ctx} />
        </Col>
        <Col>Right thing</Col>
      </Col>
    </Container>
  );
}

const Col = styled.div`
  display: inline-block;
  vertical-align: top;
`;

/* region Radio Options */

const lessonTypeOptions: LessonTypeOption[] = [
  {
    name: '3D Escape Room',
    value: '3d_escape',
    type: GamePlatform.VR,
  },
  {
    name: '3D Maze',
    value: '3d_maze',
    type: GamePlatform.VR,
  },
  {
    name: 'Environment Interaction',
    value: 'interactive_env',
    type: GamePlatform.AR,
  },
  {
    name: 'Virtual Field Trip',
    value: 'field_trip',
    type: GamePlatform.AR,
  },
];
function SelectLessonType({ context }: any): JSX.Element {
  if (!context) {
    return <div />;
  }
  const { state, dispatch } = context;
  const options = lessonTypeOptions.map((lt) => ({
    ...lt,
    name: `${lt.name} [${lt.type}]`,
  }));

  return (
    <RadioSelect
      title="Lesson Type"
      options={options}
      actionType="SET_LESSON_TYPE"
      selected={state.lessonType}
      dispatch={dispatch}
    />
  );
}

function SelectEscapeRoomInteraction({ context }: any) {
  const { state, dispatch }: Context = context;

  const options = lessonTypeOptions.map((lt) => ({
    ...lt,
    name: `${lt.name} [${lt.type}]`,
  }));

  const selected: string[] = state?.escapeRoomConfigs?.interactions.map((s) => s.toString()) || [];
  return (
    <CheckboxSelect
      title="Escape Room Interactions"
      options={options}
      actionType="SET_ESCAPEROOM_INTERACTIONS"
      selected={selected}
      dispatch={dispatch}
    />
  );
}

// function SelectNumRooms() {
//   const options: Option[] = [1, 2, 3, 4].map(
//     (n): Option => ({
//       name: `${n} ${n === 1 ? 'Room' : 'Rooms'}`,
//       value: n,
//     })
//   );
//   return (
//     <RadioSelect
//       title="Number of Rooms"
//       options={options}
//       selected="numRooms"
//       actionType="SET_NUM_ROOMS"
//     />
//   );
// }

// function SelectNumFocusAreas() {
//   const options: Option[] = [1, 2, 3, 4].map(
//     (n): Option => ({
//       name: `${n} Focus ${n === 1 ? 'Area' : 'Areas'}`,
//       value: n,
//     })
//   );
//   return (
//     <RadioSelect
//       title="Number of Focus Areas"
//       options={options}
//       selected="numFocusAreas"
//       actionType="SET_NUM_FOCUS_AREAS"
//     />
//   );
// }

// function SelectNumActivities() {
//   const options: Option[] = [1, 2, 3, 4].map(
//     (n): Option => ({
//       name: `${n} ${n === 1 ? 'Activity' : 'Activities'}`,
//       value: n,
//     })
//   );
//   return (
//     <RadioSelect
//       title="Number of Activities"
//       options={options}
//       selected="numActivities"
//       actionType="SET_NUM_ACTIVITIES"
//     />
//   );
// }

// function SelectRoomSize() {
//   const options: Option[] = ['Small', 'Medium', 'Large', 'Massive'].map((opt) => ({
//     name: opt,
//     value: opt.toLowerCase(),
//   }));
//   return (
//     <RadioSelect
//       title="Number of Focus Areas"
//       options={options}
//       selected="roomSize"
//       actionType="SET_ROOM_SIZE"
//     />
//   );
// }

// function SelectPuzzleDifficulty() {
//   const options: Option[] = ['Easy', 'Medium', 'Hard', 'Insane'].map((opt) => ({
//     name: opt,
//     value: opt.toLowerCase(),
//   }));
//   return (
//     <RadioSelect
//       title="Puzzle Difficulty"
//       options={options}
//       selected="puzzleDifficulty"
//       actionType="SET_PUZZLE_DIFFICULTY"
//     />
//   );
// }

// function SelectLessonOption() {
//   const options: Option[] = [1, 2, 3, 4].map(
//     (n): Option => ({
//       name: `Option ${n}`,
//       value: n,
//     })
//   );
//   return (
//     <RadioSelect
//       title="Lesson Option"
//       options={options}
//       selected="lessonOption"
//       actionType="SET_LESSON_OPTION"
//     />
//   );
// }

/* endregion Radio Options */

const Container = styled(Block)``;

const StyledButton = styled(Button)`
  margin: 60px 20px;
  width: 180px;
  height: 40px;
`;

export default Setup;
