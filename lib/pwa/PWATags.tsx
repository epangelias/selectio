import { asset } from 'fresh/runtime';
import { site } from '@/app/site.ts';

export function PWATags() {
  return (
    <>
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content={site.themeColor} />
      <meta name='format-detection' content='telephone=no' />
      <link rel='manifest' href={asset('/manifest.json')} />

      <link rel='apple-touch-icon' href={asset('/img/gen/apple-icon-180.png')} />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2048-2732.jpg'
        media={asset(
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2732-2048.jpg'
        media={asset(
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1668-2388.jpg'
        media={asset(
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2388-1668.jpg'
        media={asset(
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1536-2048.jpg'
        media={asset(
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2048-1536.jpg'
        media={asset(
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1488-2266.jpg'
        media={asset(
          '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2266-1488.jpg'
        media={asset(
          '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1640-2360.jpg'
        media={asset(
          '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2360-1640.jpg'
        media={asset(
          '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1668-2224.jpg'
        media={asset(
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2224-1668.jpg'
        media={asset(
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1620-2160.jpg'
        media={asset(
          '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2160-1620.jpg'
        media={asset(
          '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1320-2868.jpg'
        media={asset(
          '(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2868-1320.jpg'
        media={asset(
          '(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1206-2622.jpg'
        media={asset(
          '(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2622-1206.jpg'
        media={asset(
          '(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1290-2796.jpg'
        media={asset(
          '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2796-1290.jpg'
        media={asset(
          '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1179-2556.jpg'
        media={asset(
          '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2556-1179.jpg'
        media={asset(
          '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1284-2778.jpg'
        media={asset(
          '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2778-1284.jpg'
        media={asset(
          '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1170-2532.jpg'
        media={asset(
          '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2532-1170.jpg'
        media={asset(
          '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1125-2436.jpg'
        media={asset(
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2436-1125.jpg'
        media={asset(
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1242-2688.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2688-1242.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-828-1792.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1792-828.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1242-2208.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-2208-1242.jpg'
        media={asset(
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-750-1334.jpg'
        media={asset(
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1136-640.jpg'
        media={asset(
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-1334-750.jpg'
        media={asset(
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        )}
      />
      <link
        rel='apple-touch-startup-image'
        href='/img/gen/apple-splash-640-1136.jpg'
        media={asset(
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        )}
      />
    </>
  );
}
