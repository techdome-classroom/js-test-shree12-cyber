const decodeTheRing = function (s, p) {
  
  if (s.length === 0 && p.length === 0) {
      return true;
  }
  
  if (s.length === 0 || p.length === 0) {
      return false;
  }
  

  if (p[0] === s[0] || p[0] === '?') {
      
      return decodeTheRing(s.slice(1), p.slice(1));
  } else if (p[0] === '*') {
      return decodeTheRing(s, p.slice(1)) || decodeTheRing(s.slice(1), p);
  } else {
      return false;
  }
};

module.exports = decodeTheRing;
