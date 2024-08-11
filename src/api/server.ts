import { createServer, Model } from 'miragejs';

createServer({
  models: {
    project: Model,
    task: Model,
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/projects', (schema) => {
      return schema.projects.all();
    });

    this.post('/projects', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.projects.create(attrs);
    });

    this.delete('/projects/:id', (schema, request) => {
      let id = request.params.id;
      return schema.projects.find(id).destroy();
    });

    this.get('/tasks', (schema) => {
      return schema.tasks.all();
    });

    this.post('/tasks', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });

    this.put('/tasks/:id', (schema, request) => {
      let id = request.params.id;
      let newAttrs = JSON.parse(request.requestBody);
      let task = schema.tasks.find(id);
      return task.update(newAttrs);
    });

    this.delete('/tasks/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id).destroy();
    });
  }
});
