import bananaPic from './pictures/banana.jpg';
import pageBananaPic from './bigPictures/Banana.jpeg';
import breadPic from './pictures/bread.jpg';
import pageBreadPic from './bigPictures/Bread.jpg';
import milkPic from './pictures/milk.jpg';
import pageMilkPic from './bigPictures/milk.webp';
import strawberryJamPic from './pictures/strawberry-jam.jpg';
import pageJamPic from './bigPictures/jam.jpg';
import peanutButterPic from './pictures/peanut-butter.jpg';
import pagePeanutPic from './bigPictures/Peanut-Butter.jpg'

export const shoppingList = [
    {
        name: "bread",
        price: 5,
        picture: breadPic,
        shop: "bakery",
        description: `Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture.
        Bread may be leavened by naturally occurring microbes (e.g. sourdough), chemicals (e.g. baking soda), industrially produced yeast, or high-pressure aeration, which creates the gas bubbles that fluff up bread. In many countries, commercial bread often contains additives to improve flavor, texture, color, shelf life, nutrition, and ease of production.`,
        pagePicture: pageBreadPic
    },
    {
        name: "banana",
        price: 10,
        picture: bananaPic,
        shop: "trees",
        description: `A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.`,
        pagePicture: pageBananaPic
    },
    {
        name: "milk",
        price: 17,
        picture: milkPic,
        shop: "cows",
        description: `Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food. Immune factors and immune-modulating components in milk contribute to milk immunity. Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system, and thus reduces the risk of many diseases. Milk contains many nutrients, including protein and lactose.
        As an agricultural product, dairy milk is collected from farm animals. The US CDC recommends that children over the age of 12 months should have two servings of dairy milk products a day.
        More than six billion people worldwide consume milk and milk products, and between 750 and 900 million people live in dairy-farming households.`,
        pagePicture: pageMilkPic
    },
    {
        name: "strawberry jam",
        price: 8,
        picture: strawberryJamPic,
        shop: "supermarket",
        description: `Fruit preserves are preparations of fruits whose main preserving agent is sugar and sometimes acid, often stored in glass jars and used as a condiment or spread.
        There are many varieties of fruit preserves globally, distinguished by the method of preparation, type of fruit used, and place in a meal. Sweet fruit preserves such as jams, jellies, and marmalades are often eaten at breakfast with bread or as an ingredient of a pastry or dessert, whereas more savory and acidic preserves made from "vegetable fruits" such as tomato, squash or zucchini, are eaten alongside savory foods such as cheese, cold meats, and curries.`,
        pagePicture: pageJamPic
    },
    {
        name: "peanut butter",
        price: 11,
        picture: peanutButterPic,
        shop: "supermarket",
        description: `Peanut butter is a food paste or spread made from ground, dry-roasted peanuts. It commonly contains additional ingredients that modify the taste or texture, such as salt, sweeteners, or emulsifiers. Peanut butter is consumed in many countries. The United States is a leading exporter of peanut butter and one of the largest consumers of peanut butter annually per capita. January 24 is National Peanut Butter Day in the United States.
        Peanut butter is a nutrient-rich food containing high levels of protein, several vitamins, and dietary minerals. It is typically served as a spread on bread, toast, or crackers, and used to make sandwiches (notably the peanut butter and jelly sandwich). It is also used in a number of breakfast dishes and desserts, such as granola, smoothies, crepes, cookies, brownies, or croissants. It is similar to other nut butters such as cashew butter and almond butter.`,
        pagePicture: pagePeanutPic
    }
];

export function findShoppingItemByName(name) {
    return shoppingList.find(item => item.name === name);
}
