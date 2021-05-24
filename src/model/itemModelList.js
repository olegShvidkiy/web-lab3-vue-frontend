import ItemModel from "./itemModel";

export default class itemListModel {
  constructor() {
    this.items = [];
    this.totalVotes = 0;
    this.downloadItemsFromServer();
  }

  calculateTotalVotes() {
    this.totalVotes = 0;

    this.items.forEach((e) => {
      this.totalVotes += e.chooseNumberVotes;
    });
    this.items.map((item) => {
      item.calculatePercent(this.totalVotes);
    });
    this.sendItemsOnServer();
  }

  addItem(title) {
    const item = new ItemModel(title);
    this.items.push(item);
    console.log(this.items);
    this.sendItemsOnServer();
  }

  deleteItem() {
    let i = 0;
    while (i != this.items.length) {
      if (this.items[i].chosed) {
        this.items.splice(i, 1);
        i--;
      }
      i++;
    }
    this.calculateTotalVotes();
  }

  async downloadItemsFromServer() {
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          const newItem = new ItemModel(
            item.title,
            item.chooseNumberVotes,
            item.percent,
            item.chosed,
            item.id
          );
          this.items.push(newItem);
        });
      });
    this.calculateTotalVotes();
    console.log(this.items);
  }

  sendItemsOnServer() {
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: JSON.stringify({ items: this.items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  vote(id) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index].vote();
    this.calculateTotalVotes();
  }
}
