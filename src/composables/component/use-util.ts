export function useUtil() {
  const isServer = () => {
    return typeof window === 'undefined';
  };

  const isClient = () => {
    return typeof window !== 'undefined';
  };

  return {
    isServer,
    isClient,
  };
}
