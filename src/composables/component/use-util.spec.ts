import { mount } from '@vue/test-utils';
import { expect, describe, test, beforeEach } from 'vitest';
import { LButton, LCheckbox, LIcon } from '~/components';
import createLabox from '~/create-labox';

beforeEach(() => {
  createLabox();
});

describe('first', async () => {
  test('first', () => {
    const component = mount(LIcon);
    expect(component.vm.first(undefined)).toEqual(undefined);
    expect(component.vm.first(null)).toEqual(undefined);
    expect(component.vm.first(false)).toEqual(false);
    expect(component.vm.first(false, true)).toEqual(false);
    expect(component.vm.first(undefined, 'b')).toEqual('b');
    expect(component.vm.first('a', 'b')).toEqual('a');
    expect(component.vm.first(null, 'b')).toEqual('b');
    expect(component.vm.first(null, null, 'c')).toEqual('c');
    expect(component.vm.first(false, 'b')).toEqual(false);
    expect(component.vm.first(0, 1)).toEqual(0);
  });
});

describe('hasSlot', async () => {
  test('detect default slot', () => {
    const component = mount(LButton, {
      slots: { default: '<div></div>' },
    });
    expect(component.vm.hasSlot('default')).toEqual(true);
  });

  test('detect named slot', () => {
    const component = mount(LCheckbox, {
      slots: { label: '<div></div>' },
    });
    expect(component.vm.hasSlot('label')).toEqual(true);
  });
});

describe('className', async () => {
  test('className', () => {
    const component = mount(LIcon);
    expect(component.vm.className('test')).toEqual('test');
  });

  test('className with global style prefix', () => {
    createLabox({ config: { stylePrefix: '_' } });
    const component2 = mount(LIcon);
    expect(component2.vm.className('test')).toEqual('_test');
  });
});

describe('classComponentName', async () => {
  test('classComponentName', () => {
    const component = mount(LIcon);
    expect(component.vm.classComponentName('test')).toEqual('icon-test');
  });

  test('classComponentName with global style prefix', () => {
    createLabox({
      config: { stylePrefix: '_', components: { LIcon: { name: 'i' } } },
    });
    const component2 = mount(LIcon);
    expect(component2.vm.classComponentName('test')).toEqual('_i-test');
  });
});

describe('classNameList', async () => {
  test('classNameList', () => {
    const component = mount(LIcon);
    expect(component.vm.classNameList({ test: true })).toEqual({
      'icon-test': true,
    });
  });

  test('classNameList with global style prefix', () => {
    createLabox({
      config: { stylePrefix: '_', components: { LIcon: { name: 'i' } } },
    });
    const component2 = mount(LIcon);
    expect(component2.vm.classNameList({ test: true })).toEqual({
      '_i-test': true,
    });
  });
});
