class Materializer {
  constructor(targetName) { 
    this.targetName = targetName;
  }

  get targetName() {
    return this._targetName;
  }

  set targetName(activate) {
    if (activate == false) {
      alert('Activated');
      return;
    }
    this._targetName = activate;
  }
}

let activated = new Materializer();
alert(activated.targetName);
