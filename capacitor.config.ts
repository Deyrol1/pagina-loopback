import { CapacitorConfig } from '@capacitor/cli';




const config: CapacitorConfig = {


  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  appId: 'com.example.app',
  appName: 'app',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
