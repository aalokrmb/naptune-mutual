export const nepToBusdConversion = (nep: number): number => {
  return nep * 3;
}

export const busdToNepConversion = (busd: number): number => {
  return busd / 3;
}

export const convertToDecimal = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
  const start = inputEvent.target.selectionStart;
  let val = inputEvent.target.value;
  val = val.replace(/([^0-9.]+)/, "");
  val = val.replace(/^(0|\.)/, "");
  const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);
  const value = (match ||[])[1] + (match ||[])[2];
  let finalValue = value;
  inputEvent.target.value = value;
  if (val.length > 0) {
    inputEvent.target.value = Number(value).toFixed(2);
    inputEvent.target.setSelectionRange(start, start);
    finalValue = Number(value).toFixed(2);
  }
  return finalValue
}