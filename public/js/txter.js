console.log("Client-side code running");

sendbutton.addEventListener("click", function (e) {
  console.log("the button was clicked");
  fetch("/clicked", { method: "POST" })
    .then(function (response) {
      if (response.ok) {
        console.log("Click was recorded");
        return;
      }
      throw new Error("Request failed.");
    })
    .catch(function (error) {
      console.log(error);
    });
});
