const formatter = {
  currency: (n) => {
    let result = 0;

    result = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(n);

    return result;
  },

  date: (d) => {
    const date = new Date(d);
    const day = date.getDate();
    const mon = date.getMonth() + 1;
    const yy = date.getFullYear();
    return mon + "/" + day + "/" + yy;
  },
};
export default formatter;
