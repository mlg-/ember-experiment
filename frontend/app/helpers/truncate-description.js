import Ember from 'ember';

export function truncateDescription(params) {
  var fullDescription = params[0];

  if (fullDescription.length > 100){
    var shortDescription = fullDescription.substring(0, 100);
    return shortDescription;
  } else {
    return fullDescription;
  }
}

export default Ember.Helper.helper(truncateDescription);
