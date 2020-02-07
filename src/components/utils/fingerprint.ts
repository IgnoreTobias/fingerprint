// @ts-ignore
import fp from "fingerprintjs2";

export const getFingerprint = () =>
  new Promise(resolve => {
    fp.get((components: unknown) => {
      resolve(components);
    });
  });
