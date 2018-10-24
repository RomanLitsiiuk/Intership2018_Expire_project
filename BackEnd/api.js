const log = require(INCPATH + '/log')(module);
const express = require('express');
const router = express.Router();
//const PostModel = require(INCPATH + '/mongoose').UserModel;
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

/* router.route('/list')
  .get((req, res) => {
    PostModel.find((err, posts) => {
      if (err) {
        log.error('Error find users in Mongo');
      }
      log.info('Users finds');
      res.end(JSON.stringify(posts));
    });
  })
  .delete((req, res) => {
    PostModel.deleteMany((err, posts) => {
      if (err) {
        log.error('Error delete users in Mongo');
      }
      log.info('Users deleted');
      res.end(JSON.stringify(posts));
    });
  });

router.route('/list/:id')
  .get((req, res) => {
    PostModel.findOne({id: +req.params.id}, (err, post) => {
      if (err) {
        log.error('Error searching post in Mongo');
      }
      log.info('One post found in Mongo!');
      res.end(JSON.stringify(post));
    });
  })
  .patch((req, res) => {
    PostModel.updateOne({id: +req.params.id}, {$set: req.body}).then((posts) => {
      log.info('One post changed in Mongo!');
      res.end(JSON.stringify(posts));
    }).catch((err) => {
      log.error('Error patching post in Mongo');
    });
  })
  .delete((req, res) => {
    PostModel.deleteOne({id: +req.params.id}, (err, posts) => {
      if (err) {
        log.error('Error delete post in Mongo');
      }
      log.info('One post deleted in Mongo');
      res.end(JSON.stringify(posts));
    });
  });

router.post('/create-article', (req, res) => {
  const user = PostModel(req.body);
  user.save((err, posts) => {
    if (err) {
      log.error('Error creating post in Mongo');
    }
    log.info('One post created in Mongo');
    res.end(JSON.stringify(posts));
  });
});*/

// Code for working without MongoDB

let list;

fs.readFile('./config/articles.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  list = data;
  list = JSON.parse(list);
});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

router.route('/list')
  .get((req, res) => {
    log.info('==Get all list articles==');
    res.end(JSON.stringify(list));
  })
  .delete((req, res) => {
    log.info('==Delete all list articles==');
    list = [];
    res.end(JSON.stringify(list));
  });

router.route('/list/:id')
  .get((req, res) => {
    log.info('==Get article by id==');
    const articleById = list.find(article => +article.id === +req.params.id);
    res.end(JSON.stringify(articleById));
  })
  .delete((req, res) => {
    log.info('==Delete article by id==');
    const articleById = list.find(article => +article.id === +req.params.id);
    const position = list.indexOf(articleById);
    if (position >= 0 && position < list.length) {
      list.splice(position, 1);
    }
    res.end(JSON.stringify(list));
  })
  .patch((req, res) => {
    log.info('==Change article by id==');
    if (isFinite(req.params.id) && +req.params.id > 0 && +req.params.id <= list.length) {
      Object.keys(req.body).forEach((key) => {
        list[+req.params.id - 1][key] = req.body[key];
      });
    }
    res.end(JSON.stringify(list));
  });

router.post('/create-article', (req, res) => {
  log.info('==Save article==');
  list.push(req.body);
  res.end(JSON.stringify(list));
});

module.exports = router;
