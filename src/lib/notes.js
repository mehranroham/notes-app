import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('notes.db');

// run for inserting data
// all for getting data
// get for single row

export async function getNotes() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Loading failed!');
  return db.prepare('SELECT * FROM notes').all();
}

export function getNote(slug) {
  return db.prepare('SELECT * FROM notes WHERE slug = ?').get(slug);
}

export async function saveNote(note) {
  note.slug = slugify(note.title, {
    lower: true,
    trim: true,
    replacement: '-',
  });
  note.description = xss(note.description);

  const extention = note.image.name.split('.').pop();
  const fileName = `${note.slug}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await note.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('saving image Failed');
    }
  });

  note.image = `/images/${fileName}`;

  db.prepare(
    `
  INSERT INTO notes
  (title, slug, image, summary, description ,creator, creator_email)
  VALUES (
    @title,
    @slug,
    @image,
    @summary,
    @description,
    @creator,
    @creator_email
  )
  `
  ).run(note);
}
