import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Badge, { BadgeProps } from './badge';
import Dot, { DotProps } from './dot';
import Blink, { BlinkProps } from './blink';
import TextValueBadge, { TextValueBadgeProps } from './text-value-badge';
import ProjectBadge, { ProjectBadgeProps } from './project-badge';
import { IconName } from '../icon/list';

export default {
  title: 'Quartz/Badges',
  component: TextValueBadge,
} as Meta;

const Template: Story<TextValueBadgeProps> = (props) => (
  <TextValueBadge {...props} />
);

export const Default = (props: BadgeProps) => <Badge {...props} />;
export const TextValue = Template.bind({});
export const DotBadge: Story<DotProps> = (props) => <Dot p="5px" {...props} />;
export const BlinkBadge: Story<BlinkProps> = (props) => <Blink {...props} />;
export const ProjectBadgeBadge: Story<ProjectBadgeProps> = (props) => (
  <ProjectBadge p="5px" {...props} />
);

TextValue.args = {
  text: 'features',
  value: 128,
};

TextValue.argTypes = {
  text: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  value: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['white', 'gray'],
    },
    type: {
      required: false,
    },
  },
};

Default.args = {
  value: 'arizona',
  mode: 'default',
  variant: 'default',
  loading: false,
};

Default.argTypes = {
  value: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  icon: {
    options: ['download', 'card', 'birth', 'lock'],
    mapping: {
      download: IconName.download,
      card: IconName.card,
      birth: IconName.birth,
      lock: IconName.lock,
    },
    control: {
      type: 'select',
    },
    type: {
      required: false,
    },
  },
  variant: {
    control: {
      type: 'select',
      options: [
        'light',
        'default',
        'fail',
        'warning',
        'success',
        'label',
        'notice',
      ],
    },
    type: {
      required: false,
    },
  },
  mode: {
    control: {
      type: 'select',
      options: ['default', 'bordered'],
    },
    type: {
      required: false,
    },
  },
  loading: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
};

DotBadge.args = {
  mainText: 'title',
};

DotBadge.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['green', 'black', 'info'],
    },
    type: {
      required: false,
    },
  },
  mainText: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  secondaryText: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
  position: {
    control: {
      type: 'select',
      default: 'bottom',
      options: ['bottom', 'right'],
    },
    type: {
      required: false,
      summary: 'Tooltip position ',
    },
  },
};

ProjectBadgeBadge.args = {
  value: 'title',
};

ProjectBadgeBadge.argTypes = {
  value: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  isLock: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
};

BlinkBadge.args = {
  text: 'something is loading...',
  variant: 'gray',
};

BlinkBadge.argTypes = {
  text: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['green', 'red', 'gray'],
    },
    type: {
      required: false,
    },
  },
};