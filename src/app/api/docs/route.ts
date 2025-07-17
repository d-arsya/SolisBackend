import { createSwaggerSpec } from "next-swagger-doc";
import { NextResponse } from "next/server";

export async function GET() {
  const spec = createSwaggerSpec({
    apiFolder: "/src/app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Teman Kiko API",
        description: "API documentation for the Teman Kiko platform.",
        license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT",
        },
        version: "1.0.0",
      },
      servers: [
        {
          url: "/api",
          description: "Base URL",
        },
        //   {
        //     url: "http://localhost:3000",
        //     description: "Local development server",
        //   },
        //   {
        //     url: "https://tk-be.disyfa.cloud",
        //     description: "Production server on cloud",
        //   },
      ],
      externalDocs: {
        description: "GitHub Repository",
        url: "https://github.com/d-arsya/TemanKikoBackend",
      },
      tags: [
        {
          name: "Example",
          description: "Hello world endpoint",
        },
      ],
      components: {
        schemas: {
          Example: {
            type: "object",
            properties: {
              text: { type: "string" },
            },
            required: ["text"],
          },
        },
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
  });
  return NextResponse.json(spec, {
    headers: { "Content-Type": "application/json" },
  });
}
