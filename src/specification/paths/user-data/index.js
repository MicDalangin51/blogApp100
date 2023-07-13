export const userData = {
    '/change-password': {
      post: {
        summary: 'Change user password',
        operationId: 'changeOwnPassword',
  
        requestBody: {
          description: 'The request body for new password',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  newPassword: {
                    type: 'string'
                  }
                }
              }
  
            }
          },
          required: true
        },
  
        responses: {
          200: {
            description: 'Change password',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      }
    },
    '/user/:userId': {
      get: {
        summary: 'Get a user data',
        operationId: 'getUserData',
        parameters: [
          {
            $ref: '#/components/parameters/UserParameterId'
          }
        ],
        responses: {
          200: {
            description: 'A todo object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UserObject'
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      }
    }
  };