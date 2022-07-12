import { Device } from '@capacitor/device';
import { OsPlatForm } from '@/types/common';
export const useDevice = () => {
  const isIOS = async (): Promise<boolean> => {
    const info = await Device.getInfo();
    return new Promise((resolve) => {
      resolve(info.operatingSystem === 'ios');
    });
  };

  const isAppPlatfrom = (os: OsPlatForm) => {
    return isPlatform(os);
  };
  const getAppPlatForm = () => {
    return getPlatforms();
  };
  return {
    isIOS,
    isAppPlatfrom,
    getAppPlatForm,
  };
};
