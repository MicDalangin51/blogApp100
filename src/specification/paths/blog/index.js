export const blog = {
    '/blog': {
        post: {
          summary: 'Create a blog',
          operationId: 'createBlogPage',
          requestBody: {
            description: 'THe request body for todo',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BlogRequestRequiredObject'
                }
              }
            },
            required: true
          },
          responses: {
            200: {
              description: 'A blog object',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/BlogObject'
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
    '/blog/:blogId': {
        put: {
            summary: 'Edit own blog page',
            operationId: 'editBlogPage',
            parameters: [
              {
                $ref: '#/components/parameters/BlogParameterId'
              }
            ],
            requestBody: {
              description: 'The request body for todo',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/BlogRequestObject'
                  }
                }
              },
              required: true
            },
            responses: {
              200: {
                description: 'A Blog object',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/BlogObject'
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
        get: {
            summary: 'View blog page with comments',
            operationId: 'viewBlogPage',
            parameters: [
              {
                $ref: '#/components/parameters/BlogParameterId'
              }
            ],
            responses: {
              200: {
                description: 'A blog object',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/BlogObject'
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