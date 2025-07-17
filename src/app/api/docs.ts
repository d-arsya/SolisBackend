/**
 * @swagger
 * /:
 *   get:
 *     summary: Hello world endpoint
 *     description: Returns a sample response with a 200 success code.
 *     tags:
 *       - Example
 *     responses:
 *       200:
 *         description: API call succcess
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: success
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Hello world!
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *                   $ref : '#/components/schemas/Example'
 */
