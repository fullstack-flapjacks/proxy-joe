 db.availabilities.aggregate([{
   "$match": {
     "id": 150
   }
 }, {
   $project: {
     availability: {
       $filter: {
         input: "$availability",
         as: "availability",
         cond: {
           $lte: ["$$availability.day", 1]
         }
       }
     }
   }
 }]).pretty()