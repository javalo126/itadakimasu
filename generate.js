
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;

  if (value < 10) {
    value++;
  }
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
// create array then newValue to it

var arr = [" "];

function stringArraySearch(s, k) {
  var aray = [];
  var value = parseInt(document.getElementById('number').value, 10);
    for ( var i =0; i < foods.length-1; i++) {
      //iterates over selected array of strings
      var newString = "";
      for ( var j = 0; j < foods[i].length; j++) {
        newString = food[i];
        //iterates over selected string
        if (newString.charAt(j) != " ") {
          newString = newString + newString.char(i);
        }
      }
      console.log(newString);
      if ( newString.length < value ) {
        arr.push(newString);
      }
      else {
        newString = newString + "";
      }
    }
  }



var foods = [
  "alfalfa", "shawarma", "gin", "rum", "tea", "tomago", "beetroot", "tunip", "cardamom", "fried", "boiled", "baked", "steamed", "broiled", "sake", "tequila", "blueberry", "biryani", "clover", "apricot", "pea", "bean", "lentil", "lupin", "mesquite", "carob", "soybean", "peanut", "tamarind", "acorn", "almond", "beech", "candlenut", "cashew", "chestnut", "hazelnut", "pecan", "macadamia", "pistachio", "walnut", "asparagus", "apple", "avacado", "squash", "arugala", "artichoke", "applesauce", "noodle", "cantelope", "tuna", "juice", "sushi", "bruscetta", "bacon", "bagel", "bbq", "bison", "barley", "beer", "bisque", "bluefish", "bread", "broccoli", "buritto", "babaganoosh", "cabbage", "cake", "carrots", "celery", "cheese", "chicken", "catfish", "chips", "chocolate", "chowder", "clam", "coffee", "cookie", "corn", "cupcake", "crab", "curry", "cereal", "chimichanga", "date", "dip", "duck", "dumpling", "donut", "egg", "enchilada", "eggroll", "muffin", "edamame", "eel", "fajita", "falafel", "fish", "fondu", "toast", "garlic", "ginger", "gnocchi", "goose", "granola", "grape", "guacamole", "gumbo", "grits", "cracker", "ham", "halibut", "hamburger", "cheeseburger", "honey", "sugar", "roll", "hummus", "ice", "cream", "stew", "jambalaya", "jelly", "jam", "jerky", "jalapeA�o", "kale", "ketchup", "kiwi", "kingfish", "lobster", "lamb", "linguine", "lasagna", "meatball", "moose", "milk", "milkshake", "ostrich", "pizza", "pepperoni", "pancakes", "quesadilla", "quiche", "reuben", "spinach", "spaghetti", "venison", "waffle", "wine", "yogurt", "ziti", "zucchini", "water", "vodka", "cocktail", "rhubarb", "martini", "watermelon", "melon", "strawberry", "raspberry", "banana", "cherry", "lemon", "plum", "pumpkin", "potato", "eggplant", "onion", "mushroom", "sausage", "steak", "porridge", "rice", "seafood", "cod", "herring", "salmon", "maize", "wheat", "flour", "musturd", "crisp", "syrup", "candy", "dessert", "kebab", "kombucha", "pie", "salad", "letuce", "sandwich", "sauce", "soy", "snack", "raisin", "soup", "cider", "soda", "pop", "alcohol", "lemonade", "marshmallow"
]; //list of food options in password generator

var button = [
  "Generate", "Generate Recipe", "Generate Password", "Generate Recipe Password", "Generate Random Password", "Generate Random Recipe", "Another!", "Not your cup of tea?", "Still hungry?"
]; // list of randomly generated buttons



var placeholders = [
  "correct-horse-battery-staple", "water-rhubarb-martini"
];

function starter() {
  document.getElementById("pass").innerHTML = placeholders[Math.floor(Math.random() * (placeholders.length))];
}

function pass() {
  var randFood1 = arr[Math.floor(Math.random() * (arr.length))];
  var randFood2 = foods[Math.floor(Math.random() * (foods.length))];
  var randFood3 = foods[Math.floor(Math.random() * (foods.length))];
  var randFood4 = foods[Math.floor(Math.random() * (foods.length))];
  var seperator = "-";
  document.getElementById("pass").innerHTML = randFood1.concat(seperator.concat(randFood2.concat(seperator.concat(randFood3.concat(seperator.concat(randFood4))))));
  document.getElementById("gen").innerHTML = button[Math.floor(Math.random() * (button.length))];
}
