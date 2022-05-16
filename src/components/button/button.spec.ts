import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LButton } from '~/index';

test('mount component', async () => {
  expect(LButton).toBeTruthy();

  const wrapper = mount(LButton, {
    props: {
      id: 'id',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('button button-md button-primary');
});

test('register css variables', async () => {
  mount(LButton);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-button');
});

test('variant', async () => {
  const component = mount(LButton, {
    props: {
      id: 'id',
      variant: 'secondary',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('button-secondary');

  await component.setProps({ variant: 'error' });
  expect(component.html()).toContain('button-error');
});

test('disabled', async () => {
  const component = mount(LButton, { props: { id: 'button' } });

  expect(component.html()).not.toContain('disabled');

  await component.setProps({ disabled: true });
  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('disabled');
});

test('link types', async () => {
  const component = mount(LButton, {
    props: { id: 'button', href: '/', tag: 'a' },
  });
  expect(component.html()).toMatchSnapshot();
});

test('loading', async () => {
  const component = mount(LButton, {
    props: { loading: true },
  });
  expect(component.html()).toContain('loading-inherit');
});

test('inherit attributes', async () => {
  const component = mount(LButton, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
