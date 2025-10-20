export const hotDrinks = {
    cappuccino: [
        {
            "name": "Cappuccino",
            color: "#4E2A2A",
            cup: "Bigger Espresso Cup",
            steps: "Single shot/200mL Milk with extra foam (steam)/take all foam out with spoon/Chocolate Powder on top",
            mainSize: "Dine in (v60 Cup)",
            availableSizes: ["9oz: same", "12oz: Double shot/250mL milk with foam/Chocolate powder on top"],
        }
    ],
    espresso: [
        {
            "name": "Espresso",
            destination: "./espresso.html",
            color: "#4E2A2A",
            cup: "Small Espresso Cup",
            steps: "10g Grind/Single Shot",
            mainSize: "Dine in (Tiny Handle Cup)",
            availableSizes: ["9oz: same"]
        },
        { "name": "Double Espresso", destination: "./doubleespresso.html", color: "#bdab98", cup: "Bigger Espresso Cup", steps: "16g Grind/Single Shot", mainSize: "Dine in (tiny handle cup 2)", availableSizes: ["9oz: same"] },
        { "name": "Cortado", destination: "./cortado.html", color: "#967969", cup: "Bigger Espresso Cup", steps: "80mL Milk First/16g Grind: Double Shot/add foam on top (Steaming)", mainSize: "Dine in (double espresso cup)", availableSizes: ["4oz:same"] },
        { "name": "Piccolo", destination: "./piccolo.html", color: "#6F4E37", cup: "Small Espresso Cup", steps: "50mL Milk First/10g Grind: Single Shot/Add foam on top (Steaming)", mainSize: "Dine in (small espresso cup)", availableSizes: ["4oz: same"] },
        { "name": "Macchiato", destination: "./macchiato.html", color: "#6F4E37", cup: "Small Espresso Cup", steps: "Single Shot/6g (50mL) Foam", mainSize: "Dine in (Tiny cup 2)", availableSizes: ["4oz: same"] },
        { "name": "Americano", destination: "./americano.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "Single Shot/200mL hot water", mainSize: "Dine in (Big handle cup)", availableSizes: ["9oz: same", "12oz: 2 shots/hot water", "16oz: 3 shots/hot water"] },
        { "name": "Long-Black", destination: "./longblack.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "250mL hot water First/Double Shot (should have espresso foam on top)", mainSize: "Dine in (Big handle cup)", availableSizes: ["12oz: same"] },
        { "name": "Drip-Coffee (V60)", destination: "./v60.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "drench filter paper with hot water then throw water/add 20g Grounded Beans onto filter paper(use scale)/0:00 - 50mL/0:30 - 50mL/0:50 - 50mL/1:10 - 50mL/1:30 - 50mL/1:50 - 50mL/Leave until 4:00", mainSize: "Dine In (Handle Cup)", availableSizes: ["12oz: same"] },
        { "name": "French Press", destination: "./frenchpress.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "add 20g grounded beans into french press thing (use scale)/add 300mL of hot water/wait 2 min/compress fully", mainSize: "Dine in (French Press, Big Handle Cup)", availableSizes: ["12oz: same"] }
    ],
    hotChocolate: [
        { "name": "Hot Chocolate", destination: "./hotchocolate.html", color: "#6A4F2C", cup: "Small Espresso Cup", steps: "35g Chocolate Powder/1 pump chocolate sauce/0.25 pumps vanilla syrup/250mL Milk (Steamed)/5g chocolate powder on top/Whipped Cream", mainSize: "Dine in (Big Handle Cup)", availableSizes: ["12oz: same", "16oz: 50g Chocolate Powder/1.5 Chocolate Sauce/300mL Milk (Steamed)/5g Chocolate Powder on top/Whipped Cream (extra topping)"] },
        { "name": "Hot White Chocolate", destination: "./hotwhitechocolate.html", color: "#ede6d6", cup: "Small Espresso Cup", steps: "1 scoop white chocolate powder/1 pump white chocolate sauce/1.5 pumps rose syrup/250mL Milk (Steamed)/Whipped Cream (extra topping)", mainSize: "Dine in (Big Handle Cup)", availableSizes: ["12oz: same"] },
    ],
    latte: [
        { "name": "Noix", destination: "./noix.html", color: "#6A4F2C", cup: "Small Espresso Cup", steps: "40g toffee powder/Single shot/Stir/2 pumps toffee crunch syrup/Stir/150mL Milk with foam (Steamed)/5g Caramel Sauce on top", mainSize: "Dine In (Big Handle Cup)", availableSizes: ["12oz: same", "16oz: 2 shots/60g toffee powder/3 pump toffee syrup/300mL Milk/10g caramel sauce on top (design)"] },
        { "name": "Latte", destination: "./latte.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "Single shot/220mL Milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 2 shots/250mL milk", "16oz:3 shots/300mL Milk"] },
        { "name": "Matcha", destination: "./matcha.html", color: "#69bf64", cup: "Small Espresso Cup", steps: "3g matcha powder/220mL milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 4g matcha powder/250mL milk", "16oz: 5g matcha powder/300mL milk"] },
        { "name": "Blue Curacao", destination: "./bluecuracao.html", color: "#33becc", cup: "Small Espresso Cup", steps: "1 pump Blue Curacao/single shot/220mL milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 2 pumps blue curacao syrup/double shot/250mL Milk", "16oz: 3 pumps blue curacao syrup/3 shots/300mL Milk"] },
        { "name": "Vanilla", destination: "./vanilla.html", color: "#F3E5AB", cup: "Small Espresso Cup", steps: "2 pump vanilla syrup/Single shot/Stir/220mL Milk with foam (Steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3 pumps vanilla syrup/double shot/250mL Milk", "16oz: 4 pumps vanilla syrup/3 shots/300mL Milk"] },
        { "name": "Caramel", destination: "./caramel.html", color: "#C68E17", cup: "Small Espresso Cup", steps: "Single shot/2 pump caramel syrup/Stir/220mL Milk", mainSize: "Dine in (Hourlgass)", availableSizes: ["9oz: same", "12oz: 3 pumps caramel syrup/2 shots/250mL milk", "16oz: 4 pumps caramel syrup/3 shots/300mL Milk"] },
        { "name": "Cinnamon", destination: "./cinnamon.html", color: "#D2691E", cup: "Small Espresso Cup", steps: "2 pump cinnamon syrup/Single shot/Stir/220mL Milk", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3 pumps cinnamon syrup/2 shots/250mL Milk", "16oz: 4 pumps cinnamon syrup/3 shots/300mL Milk"] },
        { "name": "Hazelnut", destination: "./hazelnut.html", color: "#ae9f80 ", cup: "Small Espresso Cup", steps: "2 pump hazelnut syrup/Single shot/Stir/220mL Milk", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3 pumps hazelnut syrup/2 shots/250mL Milk", "16oz: 4 pumps hazelnut syrup/3 shots/300mL Milk"] },
        { "name": "Rose", destination: "./rose.html", color: "#FF69B4", cup: "Small Espresso Cup", steps: "3-4 drops red food coloring/2 pumps rose syrup/220mL Milk with Foam (Steaming)/ (add a bit of milk first and stir)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3 pumps rose syrup/5 drops red food coloring/250mL Milk", "16oz: 4 pumps rose syrup/7 drops coloring/300mL Milk"] },
        { "name": "Charcoal", destination: "./charcoal.html", color: "#333333", cup: "Small Espresso Cup", steps: "15g Charcoal powder/Single Shot/Stir/220mL Milk with foam (Steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 20g charcoal powder/Double shot/250mL Milk", "16oz: 25g Charcoal Powder/3 shots/300mL Milk"] },
        { "name": "Flat White", destination: "./flatwhite.html", color: "#3E2413", cup: "Small Espresso Cup", steps: "Double Shot/100mL Milk", mainSize: "Dine in (Hourglass Cup)", availableSizes: ["9oz: same"] },
        { "name": "Mocha", destination: "./mocha.html", color: "#30210c", cup: "Small Espresso Cup", steps: "2 pumps chocolate sauce/Single shot/220mL Milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3 pumps chocolate sauce/2 shots/250mL milk", "16oz: 4 pumps chocolate sauce/3 shots/300mL Milk"] },
        { "name": "White Mocha", destination: "./whitemocha.html", color: "#ffe1b8", cup: "Small Espresso Cup", steps: "2.5 pumps white chocolate sauce/Single shot/220mL Milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 3.5 pumps white chocolate sauce/2 shots/250mL milk", "16oz: 4.5 pumps white chocolate sauce/3 shots/300mL Milk"] },
        { "name": "Caramel Macchiato", destination: "./caramelmacchiato.html", color: "#ffe1b8", cup: "Small Espresso Cup", steps: "3 pumps vanilla syrup/Double Shot/250mL Milk with Foam(steamed)/15g caramel on top (Design)/<a href='#garnish'>click to see garnish pattern", mainSize: "Dine in (Big Handle Cup)", availableSizes: ["12oz: Same", "16oz: 4 pumps vanilla syrup/3 shots/300mL Milk/15g caramel on top"] },
        { "name": "White Mocha Caramel Latte", destination: "./whitemochacaramel.html", color: "#fcb738", cup: "Small Espresso Cup", steps: "2 pumps Caramel Sauce/1 pump White Chocolate Sauce/Single Shot/Stir/250mL Milk with Foam (Steamed)/5g Caramel on Top (Design)/<a href='#garnish'>click to see garnish pattern", mainSize: "Dine in (Hourglass)", availableSizes: ["12oz: same", "16oz: 3 pumps caramel sauce/1.5 pumps white chocolate sauce/Double Shot/300mL milk with foam(steams)/10g caramel sauce on top"] },
        { "name": "Salted Caramel Mocha", destination: "./saltedcaramelmocha.html", color: "#BEA07E", cup: "Small Espresso Cup", steps: "1.5 pumps Salted Caramel Syrup/1.5 pumps Chocolate Sauce/Single Shot/250mL Milk/5g Chocolate Sauce on Top (Design)/<a href='#garnish'>click to see garnish pattern", mainSize: "Big Handle Cup", availableSizes: ["12oz: same", "16oz: 2 pumps salted caramel syrup/2 pumps chocolate sauce/2 shots/300mL Milk/10g Chocolate Sauce on top"] },
        { "name": "Spanish Latte", destination: "./spanishlatte.html", color: "#6F6E39", cup: "Small Espresso Cup", steps: "Single shot/25g condensed milk/mix well/220mL Milk with foam (steamed)", mainSize: "Dine in (Hourglass)", availableSizes: ["9oz: same", "12oz: 2 shots/45g condensed milk/mix well/250mL steamed milk", "16oz:3 shots/65g condensed milk/mix well/300mL steamed Milk"] },
        { "name": "Pumpkin Spice", destination: "./pumpkinspice.html", color: "#FF7518", special: 1, cup: "Small Espresso Cup", steps: "2 pump Pumpkin Spice syrup/1 scoop (40g) pumpkin spice powder/2 drops orange food coloring/single shot/Stir/220mL Milk/Whipped cream (optional)/Pinch of cinnamon powder on top", mainSize: "Dine in (Tea Cup)", availableSizes: ["12oz: same"] },
        { "name": "Red Velvet", destination: "./redvelvet.html", color: "#9c0000", special: 1, cup: "Big Handle Cup", steps: "1 scoop red velvet powder (40g)/250 Milk (steamed)/2 pumps rose syrup", mainSize: "Dine in (Big Handle Cup)", availableSizes: ["12oz: same", "16oz: 1 scoop red velvet powder/200mL Milk (steamed)/3 pumps rose syrup"] },
        { "name": "Gingerbread", destination: "./gingerbread.html", color: "#CA9F71", special: 1, cup: "Big Handle Cup", steps: "single shot/2 pumps gingerbread syrup/200mL milk (steamed)/sprinkle cocoa powder on milk after steaming for presentation", mainSize: "Dine in (Big Handle Cup)", availableSizes: ["12oz: same", "16oz: double shot/3 pumps gingerbread syrup/250mL milk (steamed)/sprinkle cocoa powder on milk after steaming for presentation"] },
    ]
}