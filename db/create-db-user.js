'use blog';

db.createUser({
  user: 'Laurent',
  pwd: 'password',

  roles: [{ role: 'readWrite', db: 'blog' }],
});

('mongodb://Laurent:password@localhost:27017/blog');
