import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LRadio } from '~/index';

test('mount component', async () => {
  expect(LRadio).toBeTruthy();

  const component = mount(LRadio, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('form-control radio radio-md radio-primary');
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(LRadio);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-radio');
});

test('inherit attributes', async () => {
  const component = mount(LRadio, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
