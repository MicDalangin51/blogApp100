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
        },
        get: {
            summary: 'List blog page',
            operationId: 'listBlogPage',
            parameters: [
              {
                name: 'limit',
                in: 'query',
                description: 'The number of items returned',
                schema: {
                  type: 'number'
                }
              }
            ],
            responses: {
              200: {
                description: 'A blog object',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/ViewBlogObject'
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
                      $ref: '#/components/schemas/ViewBlogObject'
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
        delete: {
            summary: 'Delete own blog data',
            operationId: 'deleteBlogData',
            parameters: [
              {
                $ref: '#/components/parameters/BlogParameterId'
              }
            ],
            responses: {
              200: {
                description: 'successful response',
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