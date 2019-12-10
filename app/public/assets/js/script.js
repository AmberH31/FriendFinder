var userSelected;

$("#submit").on("click", handleSelection);

function handleSelection(event) {
  event.preventDefault();
  userSelected = $("select").val();
  console.log("selected!");
}
