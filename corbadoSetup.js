const projectId = import.meta.env.PUBLIC_CORBADO_PROJECT_ID;
export const loadCorbadoProject = async () => {
  await Corbado.load({
    projectId: projectId,
  });
};
