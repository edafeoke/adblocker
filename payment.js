const server = 'https://offgrid-adblocker.herokuapp.com'
// const server = "http://127.0.0.1:7000";

document.addEventListener("DOMContentLoaded", async () => {
  const checkboxes = Array.prototype.slice.call(
    document.querySelectorAll(".checkbox")
  );
  const textboxes = Array.prototype.slice.call(
    document.querySelectorAll(".textbox")
  );

  let price = 0;
  let price2 = 0;

  document.querySelector("#stripe-button").addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.querySelector("#currency").value;
    price = checkboxes
      .filter((checkbox, index) => {
        return checkbox.checked !== false && parseFloat(checkbox.name);
      })
      .reduce((total, num) => {
        return total + parseFloat(num.name);
      }, 0);

    price2 = textboxes
      .filter((textbox) => {
        return textbox.value !== "";
      })
      .reduce((total, num) => {
        return total + parseFloat(num.value);
      }, 0);
    price = parseFloat(price) + parseFloat(price2);
    if (!price) {
      alert("Price cannot be empty");
      return;
    }
    fetch(`${server}/stripe/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        currency,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        console.log(res);
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.log(e);
        alert(e.error);
      });
  });

  // Paypal payment integration
  document.querySelector("#paypal-button").addEventListener("click", (e) => {
    // e.preventDefault();
    const currency = document.querySelector("#currency").value;
    price = checkboxes
      .filter((checkbox, index) => {
        return checkbox.checked !== false && parseFloat(checkbox.name);
      })
      .reduce((total, num) => {
        return total + parseFloat(num.name);
      }, 0);

    price2 = textboxes
      .filter((textbox) => {
        return textbox.value !== "";
      })
      .reduce((total, num) => {
        return total + parseFloat(num.value);
      }, 0);
    price = parseFloat(price) + parseFloat(price2);
    if (!price) {
      alert("Price cannot be empty");
      return;
    }
    paypalCheckout(price, currency);
  });
  const paypalCheckout = (price, currency) => {
    fetch(`${server}/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        currency,
      }),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.log(e.message);
        alert(e.message);
      });
  };
});
