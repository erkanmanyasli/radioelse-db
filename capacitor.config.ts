import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.radioelse.app',
  appName: 'RadioElse',
  webDir: 'web',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    allowNavigation: [
      'api.radioking.io',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net',
      'www.gstatic.com',
      'play.radioking.io'
    ]
  }
};

export default config;
