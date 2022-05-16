import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LIcon } from '~/index';

test('mount component', async () => {
  expect(LIcon).toBeTruthy();

  const component = mount(LIcon, {
    props: {
      id: 'id',
      icon: 'some-icon',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('icon');
});

test('i alias', async () => {
  const component = mount(LIcon, {
    props: {
      id: 'id',
      i: 'some-icon',
    },
  });

  expect(component.html()).toMatchSnapshot();
});

test('types', () => {
  const component1 = mount(LIcon, {
    props: {
      prefix: 'i-',
      type: 'inline',
      icon: 'some-icon',
    },
  });

  const component2 = mount(LIcon, {
    props: {
      prefix: 'i-',
      type: 'class',
      icon: 'some-icon',
    },
  });

  expect(component1.text()).toEqual('i-some-icon');
  expect(component2.classes()).toEqual(['icon', 'i-some-icon']);
});

test('inherit attributes', async () => {
  const component = mount(LIcon, {
    props: { notaprop: '1', prefix: 'i-' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('prefix="i-"');
});
