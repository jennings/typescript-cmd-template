class Messenger {
  show(message: string, ...args: any[]) {
    console.log(message, ...args);
  }
}

new Messenger().show("It", "worked!");
