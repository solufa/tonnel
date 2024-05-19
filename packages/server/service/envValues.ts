import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const PORT = +z.string().regex(/^\d+$/).parse(process.env.PORT);

export { PORT };
