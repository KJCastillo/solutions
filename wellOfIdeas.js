function well(x) {
  let match = (''+x).match(/good/gi) || []
  if (match.length == 0) return 'Fail!'
  if (match.length <= 2) return 'Publish!'
  return 'I smell a series!'
}

//well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]) --> 'Fail!
//well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]) --> 'Publish!'
//well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]) --> 'I smell a series!'
