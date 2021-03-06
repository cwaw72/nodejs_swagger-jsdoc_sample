const route = require('express').Router();

module.exports=function(){

  /** 
  * @swagger
  *     components:
  *         schemas:
  *             test:
  *                 type: object
  *                 required:
  *                     - title
  *                     - author
  *                     - finished
  *                 properties:
  *                     id:
  *                         type: integer
  *                         description: The auto-generated id of the Index.
  *                     title:
  *                         type: string
  *                         description: The title of your Index.
  *                     author:
  *                         type: string
  *                         description: Who wrote the Index?
  *                     finished:
  *                         type: boolean
  *                         description: Have you finished reading it?
  *                     createdAt:
  *                         type: string
  *                         format: date
  *                         description: The date of the record creation.
  *                     example:
  *                         title: The Pragmatic Programmer
  *                         author: Andy Hunt / Dave Thomas
  *                         finished: true
  */
  /**
  *  @swagger
  *  tags:
  *    name: Indexs
  *    description: API to manage your Indexs.
  */
  /**
  *  @swagger
  *  paths:
  *   /Indexs:
  *     get:
  *       summary: Lists all the Indexs
  *       tags: [Indexs]
  *       responses:
  *         "200":
  *           description: The list of Indexs.
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Index'
  *     post:
  *       summary: Creates a new Index
  *       tags: [Indexs]
  *       requestBody:
  *         required: true
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Index'
  *       responses:
  *         "200":
  *           description: The created Index.
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Index'
  */
  route.get('/index', function(req, res){
    return res.json({result : true});
  });
}
