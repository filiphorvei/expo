import { ConfigPlugin } from '@expo/config-plugins';

const USER_TRACKING = 'This identifier will be used to deliver personalized ads to you.';

export const withUserTrackingPermission: ConfigPlugin<{
  userTrackingPermission?: string | false;
} | void> = (config, { userTrackingPermission } = {}) => {
  if (userTrackingPermission === false) {
    return config;
  }
  if (!config.ios) config.ios = {};
  if (!config.ios.infoPlist) config.ios.infoPlist = {};
  config.ios.infoPlist.NSUserTrackingUsageDescription =
    userTrackingPermission || config.ios.infoPlist.NSUserTrackingUsageDescription || USER_TRACKING;

  return config;
};
