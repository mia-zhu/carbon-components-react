import React from 'react';
import { iconAdd, iconAddSolid, iconAddOutline } from 'carbon-icons';
import iconsList from 'carbon-icons';
import { storiesOf } from '@storybook/react';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import Icon, { setIconsList } from '../Icon';
import IconSkeleton from '../Icon/Icon.Skeleton';

setIconsList(iconsList);

const icons = {
  'Add (iconAdd from `carbon-icons`)': 'iconAdd',
  'Add with filled circle (iconAddSolid from `carbon-icons`)': 'iconAddSolid',
  'Add with circle (iconAddOutline from `carbon-icons`)': 'iconAddOutline',
  'Legacy add (icon--add)': 'icon--add',
  'Legacy add with filled circle (add--solid)': 'add--solid',
  'Legacy add with circle (add--outline)': 'add--outline',
};

const iconMap = {
  iconAdd,
  iconAddSolid,
  iconAddOutline,
};

const props = () => {
  const selectedIcon = select(
    'The icon (icon (regular)/name (legacy))',
    icons,
    'iconAdd'
  );
  return {
    style: {
      margin: '50px',
    },
    icon: iconMap[selectedIcon],
    name: iconMap[selectedIcon] ? undefined : selectedIcon,
    role: text('ARIA role (role)', ''),
    fill: text('The SVG `fill` attribute (fill)', 'grey'),
    fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
    width: text('The SVG `width` attribute (width)', ''),
    height: text('The SVG `height` attribute (height)', ''),
    description: text(
      'The content in <title> in SVG (description)',
      'This is a description of the icon and what it does in context'
    ),
    className: 'extra-class',
  };
};

const propsSkeleton = {
  style: {
    margin: '50px',
  },
};

const propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px',
  },
};

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <Icon {...props()} />
      </div>
    ),
    {
      info: {
        text: `
            Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library
          `,
      },
    }
  )
  .add(
    'Skeleton',
    () => (
      <div>
        <IconSkeleton {...propsSkeleton} />
        <IconSkeleton {...propsSkeleton2} />
      </div>
    ),
    {
      info: {
        text: `
            Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library
          `,
      },
    }
  );
