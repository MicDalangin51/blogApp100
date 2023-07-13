export const parameters = {
    UserParameterId: {
      name: 'userId',
      in: 'path',
      required: true,
      description: 'This is the id of the user',
      schema: {
        type: 'string'
      }
    }
  };