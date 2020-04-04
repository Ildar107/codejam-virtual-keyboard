import KeyValue from './keyvalue.mjs';

export default class KeyLocalisation {
    constructor(data) {
      this.data = data;
    }
  
    getLoacalisatedKey() {
      if (localStorage.getItem('currentLanguage') === 'ru') {
        return new KeyValue(this.data[0]);
      }
      return new KeyValue(this.data[1]);
    }
  }