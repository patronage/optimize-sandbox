var testVariants = [{
    variant: 0,
    weight: 0.25,
}, {
    variant: 1,
    weight: 0.25,
}, {
    variant: 2,
    weight: 0.25,
}, {
    variant: 3,
    weight: 0.25,
}]

window.chooseVariantWeighted = function() {
    var list = [];
  
    _.each(testVariants, item => {
      _.times(item.weight * 100, () => {
        list.push(item.variant);
      });
    });
  
    if (list.length > 100) {
      console.error(
        'Your experiment targeting weights are totaling > 1, which means that your targeting is wrong.'
      );
    }
  
    return _.sample(list);
};