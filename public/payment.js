async function initiatePhonePePayment(totalAmount) {
  try {
    console.log("Payment Started...");
    console.log("Total Amount (INR):", totalAmount);

    // STEP 1: Generate Access Token
    const tokenResponse = await fetch(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/v1/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_version: 1,
          grant_type: "client_credentials",
          client_id: "M23SDLRCTHQGZ_2512071520",
          client_secret: "NDQwOTQ4MWQtYjFhNS00ZDU4LThhOGMtMDZmYjY0N2YyOGFi",
        }),
      }
    );

    const tokenData = await tokenResponse.json();
    console.log("Token Data:", tokenData);

    const accessToken = tokenData.access_token;

    // STEP 2: Create Payment Request
    const paymentResponse = await fetch(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          amount: totalAmount * 100, // rupees → paise
          expireAfter: 300,

          merchantOrderId: "ORDER_" + Date.now(),

          paymentFlow: {
            type: "PG_CHECKOUT",
            message: "Orange Delivery Payment",

            merchantUrls: {
              redirectUrl: "https://order.orange-foods.info",
            },
          },
        }),
      }
    );

    const paymentData = await paymentResponse.json();
    console.log("Payment Data:", paymentData);

    // STEP 3: Redirect User
    if (paymentData.redirectUrl) {
    
      console.log("Opening PhonePe PayPage in IFRAME...");
    
      window.PhonePeCheckout.transact({
        tokenUrl: paymentData.redirectUrl,
        type: "IFRAME",
    
        callback: function (response) {
          console.log("Payment Finished:", response);
    
          if (
            response === "CONCLUDED" ||
            response === "COMPLETED" ||
            response === "SUCCESS"
          ) {
            alert("Payment Successful 🎉");
          } else if (response === "USER_CANCEL") {
            window.PhonePeCheckout.closePage();
          }
            else {
            alert("Payment Failed or Cancelled ❌");
          }
        }
      });
    
    }

  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong!");
  }
}