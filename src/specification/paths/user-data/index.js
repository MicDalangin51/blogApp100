export const userData = {
    '/change-password': {
      post: {
        summary: 'Change user password',
        operationId: 'changePassword',
  
        requestBody: {
          description: 'The request body for todo',
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
    }
  };