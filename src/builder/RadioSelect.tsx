import React, { Dispatch } from 'react';
import styled from '@emotion/styled';
import { Radio, Typography } from 'antd';
import { Option } from './model/model';
import { RadioChangeEvent } from 'antd/lib/radio';

const { Title } = Typography;

interface Props {
  title: string;
  options: Option[];
  actionType: string;
  selected: string;
  dispatch: Dispatch<any>;
}

function RadioSelect(props: Props): JSX.Element {
  const selectedRadio = props.selected;

  const action = (checkedValues: string) => {
    props.dispatch({
      type: props.actionType,
      payload: checkedValues,
    });
  };

  return (
    <Container>
      <Title level={4}>{props.title}</Title>
      <Radio.Group value={selectedRadio} onChange={(e): void => action(e.target.value)}>
        {props.options.map((opt) => (
          <StyledRadio value={opt.value} key={`${props.selected}-${opt.value}`}>
            {opt.name}
          </StyledRadio>
        ))}
      </Radio.Group>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
  margin: 10px 20px;
`;
const StyledRadio = styled(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
`;

export default RadioSelect;
