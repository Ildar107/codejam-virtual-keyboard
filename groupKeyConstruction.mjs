export default class GroupKeyConstruction {
    constructor(key1, className1, key2, className2) {
      this.element1 = key1;
      this.element2 = key2;
      this.className1 = className1;
      this.className2 = className2;
    }
  
    getDOMElement() {
      const group = document.createElement('div');
      group.className = 'group-btn';
      const domElement1 = this.element1.getDOMElement();
      const domElement2 = this.element2.getDOMElement();
      domElement1.className = this.className1;
      domElement2.className = this.className2;
      group.appendChild(domElement1);
      group.appendChild(domElement2);
      return group;
    }
  
    changeLanguage() {
      this.element1.changeLanguage();
      this.element2.changeLanguage();
    }
  
    setMouseEvent() {
      this.element1.setMouseEvent();
      this.element2.setMouseEvent();
    }
  }