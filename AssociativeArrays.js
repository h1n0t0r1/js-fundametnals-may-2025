function travelTime(data) {
    let destinations = {};

    // Parse input and collect cheapest offers
    for (let entry of data) {
        let [country, town, costStr] = entry.split(" > ");
        let cost = Number(costStr);
        
        // add destination if not exist
        if (!destinations[country]) {
            destinations[country] = {};
        }

        // update cost
        if (!destinations[country][town] || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    // Sort countries and towns, then display
    let sortedCountries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of sortedCountries) {
        let sortedTowns = Object.entries(towns)
            .sort((a, b) => a[1] - b[1]) // sort by travel cost
            .map(([town, cost]) => `${town} -> ${cost}`);

        console.log(`${country} -> ${sortedTowns.join(" ")}`);
    }
}

function arenaTier(input) {
    let gladiators = {};

    for (let line of input) {
        if (line === "Ave Cesar") break;

        if (line.includes("->")) {
            // Handle "{gladiator} -> {technique} -> {skill}"
            let [name, technique, skillStr] = line.split(" -> ");
            let skill = Number(skillStr);

            if (!gladiators[name]) {
                gladiators[name] = {};
            }

            // Add or update technique if higher skill
            if (!gladiators[name][technique] || gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }

        } else if (line.includes("vs")) {
            // Handle "{gladiator} vs {gladiator}"
            let [first, second] = line.split(" vs ");

            if (gladiators[first] && gladiators[second]) {
                let firstTechniques = Object.keys(gladiators[first]);
                let secondTechniques = Object.keys(gladiators[second]);
                
                // check if two gladiators have same technique
                //find() method goes through each technique in firstTechniques, 
                // and returns the first one that matches the condition.
                let common = firstTechniques.find(tech => secondTechniques.includes(tech));
                
                if (common) {
                    // calculate all points for gladiator
                    let firstSkill = Object.values(gladiators[first]).reduce((a, b) => a + b, 0);
                    let secondSkill = Object.values(gladiators[second]).reduce((a, b) => a + b, 0);
                    //reduce() is a method to sum up all values in the array.
                    //Here's how it works:
                    //a is the accumulator (starts at 0)
                    //b is each value from the array

                    if (firstSkill > secondSkill) {
                        delete gladiators[second];
                    } else if (secondSkill > firstSkill) {
                        delete gladiators[first];
                    }
                }
            }
        }
    }

    // Sort and print
    let sorted = Object.entries(gladiators) // convert to array
        .map(([name, techniques]) => {
            let totalSkill = Object.values(techniques).reduce((a, b) => a + b, 0);
            return { name, techniques, totalSkill };
        }) // This transforms each [name, techniques] pair into an object with calculated total skill
        .sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));
        // Sort gladiators by skill and name when skill are equal

    for (let gladiator of sorted) {
        console.log(`${gladiator.name}: ${gladiator.totalSkill} skill`);

        let sortedTechniques = Object.entries(gladiator.techniques)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

function legendaryFarming(inputLine) {
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    let junkMaterials = {};

    let legendaryItems = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };

    let items = inputLine.toLowerCase().split(" ");

    let obtained = null;

    for (let i = 0; i < items.length; i += 2) {
        let quantity = Number(items[i]);
        let material = items[i + 1];

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250 && !obtained) {
                keyMaterials[material] -= 250;
                obtained = legendaryItems[material];
                console.log(`${obtained} obtained!`);
            }

        } else {
            if (!junkMaterials[material]) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity;
        }

        if (obtained) break;
    }

    // Print key materials sorted by qty desc, then name asc
    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, qty]) => {
            console.log(`${material}: ${qty}`);
        });

    // Print junk sorted alphabetically
    Object.entries(junkMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([material, qty]) => {
            console.log(`${material}: ${qty}`);
        });
}
