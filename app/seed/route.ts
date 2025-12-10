import postgres from "postgres";
import { films, posts } from "../lib/data";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: "require" });

async function seedPosts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(100),
      description TEXT,
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  const insertedPosts = await Promise.all(
    posts.map(
      (post) => sql`
        INSERT INTO posts (title, description, image_url)
        VALUES (${post.title}, ${post.description}, ${post.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedPosts;
}

async function seedFilms() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS films (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(100),
      released VARCHAR(4),
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  const insertedFilms = await Promise.all(
    films.map(
      (film) => sql`
        INSERT INTO films (title, released, image_url)
        VALUES (${film.title}, ${film.released}, ${film.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedFilms;
}

async function updatePostImageExtensions() {
  await sql`
    UPDATE posts SET
      image_url = REGEXP_REPLACE(image_url, '\.(png|jpg|jpeg|JPG|PNG|JPEG)$', '.webp')
    WHERE image_url ~ '\.(png|jpg|jpeg|JPG|PNG|JPEG)$';
  `;
}

export async function GET() {
  try {
    await sql.begin(() => [seedPosts(), seedFilms()]);
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH() {
  try {
    await updatePostImageExtensions();
    return Response.json({ message: "Image extensions updated successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  } 
}   
