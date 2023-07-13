export const userData = {
    '/change-password': {
      post: {
        summary: 'Change own password',
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
        summary: 'See user data',
        operationId: 'seeUserData',
        parameters: [
          {
            $ref: '#/components/parameters/UserParameterId'
          }
        ],
        responses: {
          200: {
            description: 'A user object',
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
      },
      put: {
        summary: 'Change own user data',
        operationId: 'changeUserData',
        parameters: [
          {
            $ref: '#/components/parameters/UserParameterId'
          }
        ],
        requestBody: {
          description: 'The request body for changing user data',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ChangeUserDataObject'
              }
            }
          },
          required: true
        },
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