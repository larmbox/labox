const LABOX_TELEPORT_TARGET = 'lx';

export const TeleportTarget = {
  Modal: `${LABOX_TELEPORT_TARGET}-md`,
  Tooltip: `${LABOX_TELEPORT_TARGET}-tt`,
  Toast: `${LABOX_TELEPORT_TARGET}-to`,
};

export function createLaboxTeleportTarget(): void {
  if (typeof document === 'undefined') return;
  let global = document.getElementById(LABOX_TELEPORT_TARGET);
  if (!global) {
    global = document.createElement('div');
    global.id = LABOX_TELEPORT_TARGET;
    document.body.appendChild(global);
  }

  Object.values(TeleportTarget).forEach((a) => {
    let target = document.getElementById(a);
    if (!target) {
      target = document.createElement('div');
      target.setAttribute('id', a);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      global!.appendChild(target);
    }
  });
}
