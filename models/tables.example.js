const productTableQuery = `CREATE TABLE IF NOT EXISTS product (
    product_id int PRIMARY KEY,
    name text,
    slogan text,
    description text,
    category text,
    default_price int,
    updated_at date,
    created_at date,
  )`;

const categoryTableQuery = `CREATE TABLE IF NOT EXISTS category (
    category_id int PRIMARY KEY,
    name text,
  )`;

const featuresTableQuery = `CREATE TABLE IF NOT EXISTS features (
    features_id int PRIMARY KEY,
    product_id text,
    feature text,
    value int,
  )`;

const featureTablesQuery = `CREATE TABLE IF NOT EXISTS feature (
    features_id int PRIMARY KEY,
    title text,
  )`;

const styleTablesQuery = `CREATE TABLE IF NOT EXISTS style (
    style_id int PRIMARY KEY,
    product_id int,
    name text,
    original_price int,
    sale_price int,
  )`;

const photos = `CREATE TABLE IF NOT EXISTS photos (
    photo_id int PRIMARY KEY,
    style_id int,
    product_id int,
    name text,
    original_price int,
    sale_price int,
  )`;

const sku = `CREATE TABLE IF NOT EXISTS sku (
    sku_id int PRIMARY KEY,
    style_id int,
    quantity int,
    size text,
  )`;


const allQueries = [
  productTableQuery,
  categoryTableQuery,
  featuresTableQuery,
  featureTablesQuery,
  styleTablesQuery,
  photos,
  sku,
];

module.exports = allQueries