export const schemas = {
    BlogObject: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        content: {
          type: 'string'
        },
        username: {
          type: 'string'
        },
        comments: {
          type: 'object',
          properties: {
           
          }
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
  
        }
  
      }
    },

    
    BlogRequestRequiredObject: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        content: {
          type: 'string'
        },
      },
      required: [
        'title',
        'content'
      ]
    },

    ViewBlogObject: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
  
        },
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        username: {
          type: 'string'
        },
        comments: {
          type: 'object',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string'
  
              },
              message: {
                type: 'string'
              },
              username: {
                type: 'string'
              },
  
              createdDate: {
                type: 'number'
              },
              updatedDate: {
                type: 'number'
              }
            }
          }
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
  
        }
  
      }
    },
  
  
    BlogRequestObject: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        content: {
          type: 'string'
        },
      }
  
    },
  
    NewUserObject: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        }
      }
    },
  
    UserObject: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
        }
      }
    },
    LoginObject: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        }
      }
    },
    SuccessfulObject: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean'
        }
      }
    },
    ChangeUserDataObject: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        }
      }
    },
    CommentRequestRequiredObject: {
      type: 'object',
      properties: {
        content: {
          type: 'string'
        }
      },
      required: [
        'content'
      ]
    },
    CommentRequestObject: {
      type: 'object',
      properties: {
        content: {
          type: 'string'
        }
      }
  
    },
    CommentObject: {
      type: 'object',
      properties: {
        content: {
          type: 'string'
        },
        username: {
          type: 'string'
        },
        createdDate: {
          type: 'number'
        },
        updatedDate: {
          type: 'number'
        }
      }
    },
  };