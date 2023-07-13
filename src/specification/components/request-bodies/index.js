export const requestBodies = {
    RequestNewUser: {
      description: 'The request body for registering a new user',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/NewUserObject'
          }
        }
      }
    },
    LoginUser: {
      description: 'This logs in a user',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/LoginObject'
          }
        }
      }
    }
  };