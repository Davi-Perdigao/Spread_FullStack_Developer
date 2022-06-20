import Joi from 'joi';

import PostsController from '../controllers/posts';
import PostsModel from '../models/posts';

const postsController = new PostsController(PostsModel)

const postsRoute = (server) => {

    server.route({
        method: 'GET',
        path: '/posts/{id}',
        handler: (request) => postsController.find(request)
    })

    server.route({
        method: 'POST',
        path: '/posts',
        handler: (request, h) => postsController.create(request, h),
        options: {
            validate: {
                payload: {
                    title: Joi.string(),
                    content: Joi.string(),
                    author: Joi.string().email()
                }
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/posts/{id}',
        handler: (request, h) => postsController.update(request, h)
    })
    server.route({
        method: 'DELETE',
        path: '/posts/{id}',
        handler: (request, h) => postsController.delete(request, h)
    })



}

module.exports = postsRoute;
