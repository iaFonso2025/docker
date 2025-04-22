db = db.getSiblingDB('clientes');

db.createCollection('clientes');
db.clientes.insertMany([
  { nombre: 'Juan Pérez', email: 'juan@example.com' },
  { nombre: 'Ana López', email: 'ana@example.com' },
  { nombre: 'Carlos Ruiz', email: 'carlos@example.com' }
]);