    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    function adultCheck(adultAge) {
      const nowYear = new Date().getFullYear();
      // console.log(this.year); 
      // console.log((nowYear-this.year) > adultAge);     
      return ((nowYear-this.year) >= adultAge);
    };

     const isSomeoneAdult = people.some(
      function(person){ 
      return adultCheck.apply(person,[19]) 

    });
     console.log(isSomeoneAdult);
    // Array.prototype.every() // is everyone 19 or older?
     const isEveryoneAdult = people.every(
          function(person){
          return adultCheck.apply(person,[19]) 
          }
        );
     console.log(isEveryoneAdult);
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    function checkID(checkValue){
      return this.id==checkValue;
    }  
   function findComment(comments, id){
      return comments.find(
        function(comment){
          return checkID.apply(comment, [id]);
        }

      );

   } 
 console.log(findComment(comments, 823423));
 
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
  function deleteComment(comments, id){
    const index = comments.findIndex(
        function(comment){
          return checkID.apply(comment, [id]);
        }
    );
    comments.splice(index, 1);
    return comments;

  }
   console.log(deleteComment(comments, 823423));