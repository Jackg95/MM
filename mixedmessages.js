const words = {
  starter: ["Dough balls", "Chicken wings", "Potato skins", "Mixed salad"],
  main: ["Fried Seabass", "Lobster tails", "In-house burger", "Fillet steak"],
  dessert: [
    "Triple Sundae",
    "Chocolate fudge cake",
    "Pancakes",
    "Swiss brownies",
  ],
  closeStatement: [
    "Bon appetit!",
    "Enjoy!",
    "Thanks for ordering!",
    "Your food will be with you shortly!",
  ],
};

const randNum = () => {
  return Math.floor(Math.random() * 4);
};

const foodOrder = () => {
  let combined = `Your takeaway will consist of the following: ${
    words.starter[randNum()]
  } for starters. For your main course you will have ${
    words.main[randNum()]
  }. Finally, for dessert you will have ${words.dessert[randNum()]}. ${
    words.closeStatement[randNum()]
  }.`;
  console.log(combined);
};
foodOrder();
