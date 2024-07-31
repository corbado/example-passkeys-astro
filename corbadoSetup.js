export const loadCorbadoProject = async () => {
  await Corbado.load({
    projectId: 'YOUR_PROJECT_ID',
  });
};
