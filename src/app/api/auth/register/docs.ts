/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint untuk mendaftarkan pengguna baru.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - passwordConfirm
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kamaluddin Arsyad Fadllillah
 *               email:
 *                 type: string
 *                 format: email
 *                 example: kamaluddin.arsyad17@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secret123
 *               passwordConfirm:
 *                 type: string
 *                 format: password
 *                 example: secret123
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Success create new user
 *                 data:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: kamaluddin.arsyad17@gmail.com
 *                     avatar:
 *                       type: string
 *                       format: uri
 *                       example: https://ui-avatars.com/api/?name=Kamaluddin+Arsyad+Fadllillah
 *                     name:
 *                       type: string
 *                       example: Kamaluddin Arsyad Fadllillah
 *       400:
 *         description: Validation error or email already taken
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Email is taken or validation error
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 */
