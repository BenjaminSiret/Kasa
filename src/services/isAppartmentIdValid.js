export function isAppartmentIdValid(id, appartments) {
  return appartments.some((appartment) => appartment.id === id);
}
