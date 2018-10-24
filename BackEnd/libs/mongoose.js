const mongoose = require('mongoose');
const log = require(INCPATH + '/log')(module);
const config = require(INCPATH + '/config');
const Q = require('q');

mongoose.connect(config.get('db'));
const db = mongoose.connection;

db.on('error', function (err) {
  log.error('connection error:', err.message);
});
db.once('open', function callback() {
  log.info('Connected to DB!');
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: {
    type: Number,
    required: 'Enter an ID',
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: 'Some description',
    trim: true
  },
  author: {
    type: String,
    default: 'User',
    trim: true
  },
  imageLink: {
    type: String,
    default: ''
  },
  imageName: {
    type: String,
    default: 'image'
  },
  date: {
    type: Object,
    required: 'Enter the date'
  },
  text: {
    type: Object,
    required: 'Enter the text'
  },
  comments: {
    type: Array,
    default: ['0']
  },
  label: {
    type: String,
    validate: [{
      validator: function checkLabel(value) {
        return /^ti-\w{1,20}/.test(value);
      },
      msg: 'Enter a valid label name'
    }],
    default: 'ti-image'
  }
});

module.exports.UserModel = mongoose.model('User', postSchema);
