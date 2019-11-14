export default class KeyValue {
    constructor(data) {
      this.value = data[0] || '';
      this.upperValue = data[1] || null;
    }
  }