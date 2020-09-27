import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Radio, Typography } from 'antd';
import { Option } from './model/model';

import { BuilderContext } from './BuilderProvider';

const { Title } = Typography;

interface Props {
  title: string;
  options: Option[];
  stateSelector: string;
  actionType?: string;
}

function RadioSelect(props: Props): JSX.Element {
  const { state, dispatch } = useContext(BuilderContext);
  const selectedRadio = state[props.stateSelector];

  const action = (id: string) => {
    dispatch({
      type: props.actionType,
      payload: id,
    });
  };

  return (
    <Container>
      <Title level={4}>{props.title}</Title>
      <Radio.Group value={selectedRadio} onChange={(e): void => action(e.target.value)}>
        {props.options.map((opt) => (
          <StyledRadio value={opt.value} key={`${props.stateSelector}-${opt.value}`}>
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
  lineheight: 30px;
`;

export default RadioSelect;
