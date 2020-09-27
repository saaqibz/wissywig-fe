import React from 'react';
import Block from 'react-blocks';
import styled from '@emotion/styled';
import { Button } from 'antd';
import RadioSelect from '../RadioSelect';
import { LessonTypeOption, GamePlatform, Option } from '../model/model';

function Content(): JSX.Element {
  return (
    <Container layout>
      <Col>
        <SelectLessonType />
        <StyledButton type="primary">Next</StyledButton>
      </Col>
      <Col>
        <Col>
          <SelectNumRooms />
          <SelectNumFocusAreas />
          <SelectNumActivities />
        </Col>
        <Col>
          <SelectRoomSize />
          <SelectPuzzleDifficulty />
        </Col>
        <Col>
          <SelectLessonOption />
        </Col>
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
    name: '3D Maze',
    value: '3d_maze',
    type: GamePlatform.VR,
  },
  {
    name: '3D Escape Room',
    value: '3d_escape',
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
function SelectLessonType() {
  const options = lessonTypeOptions.map((lt) => ({
    ...lt,
    name: `${lt.name} [${lt.type}]`,
  }));

  return (
    <RadioSelect
      title="Lesson Type"
      options={options}
      stateSelector="lessonType"
      actionType="SET_LESSON_TYPE"
    />
  );
}

function SelectNumRooms() {
  const options: Option[] = [1, 2, 3, 4].map(
    (n): Option => ({
      name: `${n} ${n === 1 ? 'Room' : 'Rooms'}`,
      value: n,
    })
  );
  return (
    <RadioSelect
      title="Number of Rooms"
      options={options}
      stateSelector="numRooms"
      actionType="SET_NUM_ROOMS"
    />
  );
}

function SelectNumFocusAreas() {
  const options: Option[] = [1, 2, 3, 4].map(
    (n): Option => ({
      name: `${n} Focus ${n === 1 ? 'Area' : 'Areas'}`,
      value: n,
    })
  );
  return (
    <RadioSelect
      title="Number of Focus Areas"
      options={options}
      stateSelector="numFocusAreas"
      actionType="SET_NUM_FOCUS_AREAS"
    />
  );
}

function SelectNumActivities() {
  const options: Option[] = [1, 2, 3, 4].map(
    (n): Option => ({
      name: `${n} ${n === 1 ? 'Activity' : 'Activities'}`,
      value: n,
    })
  );
  return (
    <RadioSelect
      title="Number of Activities"
      options={options}
      stateSelector="numActivities"
      actionType="SET_NUM_ACTIVITIES"
    />
  );
}

function SelectRoomSize() {
  const options: Option[] = ['Small', 'Medium', 'Large', 'Massive'].map((opt) => ({
    name: opt,
    value: opt.toLowerCase(),
  }));
  return (
    <RadioSelect
      title="Number of Focus Areas"
      options={options}
      stateSelector="roomSize"
      actionType="SET_ROOM_SIZE"
    />
  );
}

function SelectPuzzleDifficulty() {
  const options: Option[] = ['Easy', 'Medium', 'Hard', 'Insane'].map((opt) => ({
    name: opt,
    value: opt.toLowerCase(),
  }));
  return (
    <RadioSelect
      title="Puzzle Difficulty"
      options={options}
      stateSelector="puzzleDifficulty"
      actionType="SET_PUZZLE_DIFFICULTY"
    />
  );
}

function SelectLessonOption() {
  const options: Option[] = [1, 2, 3, 4].map(
    (n): Option => ({
      name: `Option ${n}`,
      value: n,
    })
  );
  return (
    <RadioSelect
      title="Lesson Option"
      options={options}
      stateSelector="lessonOption"
      actionType="SET_LESSON_OPTION"
    />
  );
}

/* endregion Radio Options */

const Container = styled(Block)``;

const StyledButton = styled(Button)`
  margin: 60px 20px;
  width: 180px;
  height: 40px;
`;

export default Content;
