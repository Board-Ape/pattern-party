const changeTab = (event) => {
  const clickedTab = $(event.target);
  const divToShow = $(`#${clickedTab.data('tab')}`);

  $('.tab-content').css('display', 'none');
  divToShow.css('display', 'flex')

  $('.tab').removeClass('active-tab');
  clickedTab.addClass('active-tab');
}

$('.tab').on('click', (event) => changeTab(event));
