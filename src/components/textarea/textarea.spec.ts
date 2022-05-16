import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LTextarea } from '~/index';

test('mount component', () => {
  expect(LTextarea).toBeTruthy();

  const component = mount(LTextarea, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('textarea');
  expect(component.html()).toContain('form-field');
});

test('register css variables', () => {
  mount(LTextarea);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-textarea');
});

test('inherit attributes', () => {
  const component = mount(LTextarea, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
