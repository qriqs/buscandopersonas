const menu = document.querySelector<HTMLDetailsElement>('[data-menu]');
const trigger = menu?.querySelector('summary');

if (menu?.open) menu.open = false;

menu?.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !menu.open) return;

  event.preventDefault();
  menu.open = false;
  trigger?.focus();
});

menu?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) {
    menu.open = false;
  }
});

document.addEventListener('pointerdown', (event) => {
  if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
    menu.open = false;
  }
});

matchMedia('(min-width: 841px)').addEventListener('change', (event) => {
  if (event.matches && menu) menu.open = false;
});
