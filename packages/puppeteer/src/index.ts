import { getPuppeteerBrowserPath, BrowserName } from "@replayio/replay";
import { getDirectory } from "@replayio/replay/src/utils";
import path from "path";

const browserName: BrowserName = "chromium";
function getDeviceConfig() {
  const executablePath = getExecutablePath();

  const env: Record<string, any> = {
    ...process.env,
    RECORD_ALL_CONTENT: 1,
  };

  return {
    launchOptions: {
      executablePath,
      env,
    },
    defaultBrowserType: browserName,
  };
}

export function getMetadataFilePath(workerIndex = 0) {
  return path.join(getDirectory(), `PUPPETEER_METADATA_${workerIndex}`);
}

export function getExecutablePath() {
  return getPuppeteerBrowserPath(browserName);
}

export const devices = {
  get "Replay Chromium"() {
    return getDeviceConfig();
  },
};
