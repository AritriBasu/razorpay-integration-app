//var rzrpay=document.getElementById("razorpay-donate-btn");

axios.post('/donate').then((info)=>{
    console.log(info);

    var options = {
        key: "rzp_test_hPVajQ5EObBlSz", // Enter the Key ID generated from the Dashboard
        amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Covid Care",
        "description": "Test Transaction",
        //"image": "https://example.com/your_logo",
        order_id: info.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://razorpay-integration-app.herokuapp.com/payment-process",
        redirect:'true',

        /*prefill: {
            name: "Aritri Basu",
            email: "basu.ari@example.com",
            contact: "9999999999"
        },/** 
        "notes": {
            "address": "Razorpay Corporate Office"
        },*/
        "theme": {
            "color": "#ee6e73"
        }
    };

    var rzp1 = new Razorpay(options);
    document.getElementById('razorpay-donate-btn').onclick = function(e){
    rzp1.open();
    e.preventDefault();
    }
});
