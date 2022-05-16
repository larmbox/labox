import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LSelect } from '~/index';

test('mount component', () => {
  expect(LSelect).toBeTruthy();

  const component = mount(LSelect, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('select');
  expect(component.html()).toContain('form-field');
});

test('register css variables', () => {
  mount(LSelect);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-select');
});

test('inherit attributes', () => {
  const component = mount(LSelect, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
