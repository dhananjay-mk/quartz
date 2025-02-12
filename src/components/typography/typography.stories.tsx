import { Meta } from '@storybook/react';
import { Box } from 'rebass';

import Value from './value';
import Title from './title';
import Subtitle from './subtitle';
import Labeling from './labeling';
import Microlabeling from './microlabeling';
import { HoverableText, Text } from '../../index';
import InputValidation from './input-validation/input-validation';

const meta: Meta = {
  title: 'Typography',
};
export default meta;

const Template = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      '> *': {
        lineHeight: '30px',
      },
    }}
  >
    <Title uppercase>Titrage/H1</Title>
    <Text>Text</Text>
    <HoverableText>hoverable</HoverableText>
    <Subtitle>Titrage/H2</Subtitle>
    <Labeling bold>labeur/bold</Labeling>
    <Labeling>labeur/regular</Labeling>
    <Labeling gray>labeur/gray</Labeling>
    <Value>value/default</Value>
    <Microlabeling>labeling/micro</Microlabeling>
  </Box>
);

export const DefaultInfo = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      '> *': {
        lineHeight: '30px',
      },
    }}
  >
    <InputValidation intent="success">the sum is 100%</InputValidation>
  </Box>
);

export const Default = {
  render: Template,
};
