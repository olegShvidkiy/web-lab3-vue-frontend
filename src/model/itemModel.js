export default class ItemModel {
  constructor(
    title,
    chooseNumberVotes = 0,
    percent = 0,
    chosed = false,
    id = Math.round(Math.random() * 100000).toString()
  ) {
    this.title = title;
    this.id = id;
    this.chooseNumberVotes = chooseNumberVotes;
    this.percent = percent;
    this.chosed = chosed;
  }

  calculatePercent(total) {
    if (total != 0)
      this.percent = Math.round((this.chooseNumberVotes / total) * 100);
    console.log(this.percent);
  }

  vote() {
    this.chooseNumberVotes++;
  }
}
