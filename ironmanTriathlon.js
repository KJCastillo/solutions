//the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile)

function iTri(s){
 let totalDist = 2.4 + 112 + 26.2
 if (s === 0) return 'Starting Line... Good Luck!';
 if (s <= 2.4) return {"Swim": (totalDist - s).toFixed(2)  + " to go!" };
 if (s <= 114.4) return {"Bike": (totalDist - s).toFixed(2) + " to go!"};
 if (s <= 130.6) return {"Run": (totalDist - s).toFixed(2) + " to go!"};
 if (s <= 140.6) return {"Run": 'Nearly there!'}
 if (s > totalDist) return "You're done! Stop Runnin!"
}

iTri(36),{'Bike':'104.60 to go!'});
iTri(103.5),{'Bike':'37.10 to go!'});
iTri(2),{'Swim':'138.60 to go!'});
