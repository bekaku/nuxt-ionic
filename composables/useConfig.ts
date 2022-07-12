export const useConfig = () => {
  const getConfig = (key: string) => {
    return useRuntimeConfig()[key] || undefined;
  };
  return {
    getConfig,
  };
};
