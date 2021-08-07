/*
*  Create a shopping list or todo app that allows
*  a user to add and remove items from a list.
*  Items should have user provided text.
*
*  Ex: Each 'item' can be an input box that allows
*  the user to type text or you can have one text
*  box that a user can type text and click 'add'
*  to add to the list.
*
*  Requirements:
*   -Can add items/tasks to the list
*   -Can remove items/tasks from the list
*   -At least 5 styles applied (color, padding, etc)
*    these can be applied in the header (<style>)
*    or via DOM manipulation or via an external css file.
*    If you use a css file, please upload it
*
*/

$(document).ready(function(){

  var input = $("#newItem");

  //Function to create list item, check if it is empty, create delete button, event listener for delete button, and reset input text
  function getListText() {
    var newText = $(input).val();

    if (newText.length>1) {
      var newLi = document.createElement("li");
      var deleteButton = document.createElement("button");

      $(deleteButton).text('X');
      $(deleteButton).addClass('delete');

      $("ul").append(newLi);
      $(newLi).append(newText, deleteButton);

      $(deleteButton).on('click', function() {
        removeListItem(event);
      });

    }
      $(input).val('');
    }

  //Function to remove list items
  function removeListItem(event){
    $(event.target).parent().remove();
    $(event.target).remove();
  }

  //Event listener to add list items
  $("#addButton").on("click", function() {
    getListText();
  });

  //Event listener for pressing enter key in the input field
  $(input).keypress(function(e) {
    if (e.which === 13) {
      getListText();
    }
  });

});
