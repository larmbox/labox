import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LInput } from '~/index';

test('mount component', () => {
  expect(LInput).toBeTruthy();

  const component = mount(LInput, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('input');
  expect(component.html()).toContain('form-field');
});

test('register css variables', () => {
  mount(LInput);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-input');
});

test('inherit attributes', () => {
  const component = mount(LInput, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
