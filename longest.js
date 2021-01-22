

  function megaFriend(a){
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < a.length; i++) {
    if (a[i].length > lgth) {
      var lgth = a[i].length;
      longest = a[i];
    }
  }
  return longest;
}

var arr = megaFriend(["sasss", "toma", "tiaffffffffffff"]);
  
  console.log(arr);