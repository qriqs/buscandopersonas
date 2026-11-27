import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { inView, scroll } from 'motion';
import { animate } from 'motion/mini';

const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const desktopPointer = matchMedia('(pointer: fine) and (min-width: 841px)');

let detachMotion: (() => void) | undefined;
let lenis: Lenis | undefined;

function updateMotion() {
  detachMotion?.();
  lenis?.destroy();
  detachMotion = undefined;
  lenis = undefined;

  if (motionPreference.matches) return;

  if (desktopPointer.matches) {
    lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      anchors: false,
    });
  }

  const image = document.querySelector<HTMLElement>('[data-hero-plate]');
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const route = document.querySelector<HTMLElement>('[data-route]');
  const routeSection = route?.closest<HTMLElement>('section');

  const stops: (() => void)[] = [];

  if (image && hero) {
    const animation = animate(
      image,
      { transform: ['translateY(0%)', 'translateY(8%)'] },
      { ease: 'linear' },
    );
    const stop = scroll(animation, { target: hero, offset: ['start start', 'end start'] });
    stops.push(() => {
      stop();
      animation.cancel();
      image.style.removeProperty('transform');
    });
  }

  if (route && routeSection) {
    let animation: ReturnType<typeof animate> | undefined;
    const stop = inView(routeSection, () => {
      animation = animate(
        route,
        { transform: ['scaleX(0.06)', 'scaleX(1)'] },
        { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
      );
    }, { amount: 0.35 });
    stops.push(() => {
      stop();
      animation?.cancel();
      route.style.removeProperty('transform');
    });
  }

  detachMotion = () => stops.forEach((stop) => stop());
}

updateMotion();
motionPreference.addEventListener('change', updateMotion);
desktopPointer.addEventListener('change', updateMotion);
