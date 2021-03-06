   // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteens = inventors.filter(element=>{
      console.log(Math.floor(element.year/100)===15);
       return Math.floor(element.year/100)===15;
      }

    );
    console.log("Arr of inventors who were born in the 1500's is");
    fifteens.forEach(function(item,i,arr){
      console.log(JSON.parse(JSON.stringify(item)));
    });


    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
 
    const names = inventors.map(function(item,i,arr){

      return ([item.first, item.last]);
    });
    console.log(names);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
      const compareYears=(a, b)=> {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
      }

      console.log(inventors.sort(compareYears));
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
      const yearsLived = inventors.reduce(function(sum, current) {
        return sum + (current.passed-current.year) ;
      },0);
      console.log(`All the inventors live ${yearsLived} years`);
    // 5. Sort the inventors by years lived
         const compareYearsLived=(a, b)=> {
        if ((a.passed-a.year) > (b.passed-b.year)) return 1;
        if ((a.passed-a.year) < (b.passed-b.year))  return -1;
      }

      console.log(inventors.sort(compareYearsLived));

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const boulevards = ["l'Amiral-Bruix", "la Chapelle", "Clichy", "l'Hôpital", "la Madeleine", "Magenta", "Sébastopol", "Strasbourg", "la Zone"],
      boulevardsInParis = boulevards.map((item,i,arr)=>`De ${item}`);
      console.log(boulevardsInParis);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.log(people[0].split( /,/)[0]);
      const compareStr = (a, b)=> {
        if (a.split( /,/)[0] > b.split( /,/)[0]) return 1;
        if (a.split( /,/)[0] < b.split( /,/)[0]) return -1;
      }

      console.log(people.sort(compareStr));

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce((obj, item)=> {
      if(!obj[item]){
        obj[item]=0;
      }
      obj[item]++;
        return obj;
      }
      ,{} );

console.log(transportation);