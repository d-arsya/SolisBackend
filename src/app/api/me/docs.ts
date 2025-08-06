/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get current user profile
 *     description: Mengambil data profil pengguna yang sedang login.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Success retrieve user data
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
 *                   example: Success retrieve user data
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
 *       401:
 *         description: Unauthorized
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
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 */
