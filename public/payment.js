async function initiatePhonePePayment(totalAmount) {
  try {
    console.log("Payment Started...");
    console.log("Total Amount:", totalAmount);

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
    const accessToken = tokenData.access_token;

    // STEP 2: Create Order ID
    const merchantOrderId = "ORDER_" + Date.now();

    // STEP 3: Create Payment Request
    const paymentResponse = await fetch(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          amount: totalAmount * 100,
          expireAfter: 300,
          merchantOrderId: merchantOrderId,

          paymentFlow: {
            type: "PG_CHECKOUT",
            message: "Orange Delivery Payment",
            merchantUrls: {
              redirectUrl: "https://order.orange-foods.info/payment",
            },
          },
        }),
      }
    );

    const paymentData = await paymentResponse.json();
    console.log("Payment Data:", paymentData);

    // STEP 4: Open PayPage in IFRAME
    if (paymentData.redirectUrl) {
      window.PhonePeCheckout.transact({
        tokenUrl: paymentData.redirectUrl,
        type: "IFRAME",

        callback: async function (response) {
          console.log("Payment Callback:", response);

          // ✅ Always Verify Final Status
          const statusResponse = await checkPaymentStatus(
            merchantOrderId,
            accessToken
          );

          console.log("Final Status:", statusResponse);

          if (statusResponse.state === "COMPLETED") {
            alert("✅ Payment Successful 🎉");
          } else if (statusResponse.state === "FAILED") {
            alert("❌ Payment Failed!");
          } else {
            alert("⚠️ Payment Pending...");
          }

          // Close iframe
          window.PhonePeCheckout.closePage();
        },
      });
    }
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong!");
  }
}

/* ---------------- STATUS API ---------------- */

async function checkPaymentStatus(merchantOrderId, accessToken) {
  try {
    const response = await fetch(
      `https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/order/${merchantOrderId}/status`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${accessToken}`,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.error("Status Check Error:", err);
    return { state: "FAILED" };
  }
}
