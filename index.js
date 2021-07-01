
export const useMultiVariant = (experimentId, sections) => {
  let exp = `${experimentId}.`;
  const variant = [];

  for (let i = 0; i < sections.length; i++) {
    variationId = Math.round(Math.random() * sections[i]);
    variant.push(variationId);
    exp += `${variationId}-`;
  }

  // remove lasting -
  exp = exp.slice(0, -1);

  window.ga('set', 'exp', exp);

  return variant;
};
