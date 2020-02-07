// @ts-ignore
import fp from "fingerprintjs2";

// We re-write the callback into a Promise style,
// so it plays nice with React Hooks
export const getFingerprint = () =>
  new Promise(resolve => {
    fp.get((components: unknown) => {
      resolve(components);
    });
  });
